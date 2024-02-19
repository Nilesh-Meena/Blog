"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";

function AuthLinks() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    // User is not authenticated
    return (
      <Link
        href="/Subscribe"
        className={`hidden font-TWMedium font-bold dark:bg-black dark:active:shadow-none dark:text-white sm:block transition-[0.2s] px-6 py-2 rounded 
            bg-white text-black border border-solid dark:border-white border-black  translate-x-[-0.25rem] translate-y-[-0.25rem] shadow-[0.25rem_0.25rem_rgba(0,0,0)] dark:shadow-[0.25rem_0.25rem_rgba(255,255,255)] active:translate-x-0 active:shadow-none`}
      >
        Login
      </Link>
    );
  }

  // User is authenticated
  return (
    <span
      onClick={async () => {
        try {
          await signOut();
        } catch (error) {
          console.error("Error signing out:", error);
        }
      }}
      className={`ml-4 dark:bg-black dark:active:shadow-none dark:border-white hidden sm:block transition-[0.2s] px-6 py-2 rounded border border-solid border-black translate-x-[-0.25rem] translate-y-[-0.25rem] shadow-[0.25rem_0.25rem_rgba(0,0,0)] dark:shadow-[0.25rem_0.25rem_rgba(255,255,255)] active:translate-x-0 active:shadow-none cursor-pointer`}
    >
      Logout
    </span>
  );
}

export default AuthLinks;
