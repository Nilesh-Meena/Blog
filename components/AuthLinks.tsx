"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function AuthLinks() {
  const [isScrolled, setIsScrolled] = useState(false);

  //temporary
  const status = "authenticated";

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div>
      {status !== "authenticated" ? (
        <Link
          href="/Subscribe"
          className={`hidden font-TWMedium font-bold dark:bg-black dark:active:shadow-none dark:text-white sm:block transition-[0.2s] px-6 py-2 rounded ${
            isScrolled
              ? "bg-prime-yello-secondary dark:text-black"
              : "bg-white text-black"
          } border border-solid dark:border-white border-black  translate-x-[-0.25rem] translate-y-[-0.25rem] shadow-[0.25rem_0.25rem_rgba(0,0,0)] dark:shadow-[0.25rem_0.25rem_rgba(255,255,255)] active:translate-x-0 active:shadow-none`}
        >
          Login
        </Link>
      ) : (
        <div className="flex">
          <Link
            href="/"
            className={`hidden dark:bg-black dark:active:shadow-none dark:text-white  sm:block transition-[0.2s] px-6 py-2 rounded ${
              isScrolled
                ? "bg-prime-yello-secondary dark:text-black dark:bg-prime-yello-secondary dark:border-b-black dark:border-r-black"
                : "bg-white text-black"
            } border border-solid border-black dark:border-white  translate-x-[-0.25rem] translate-y-[-0.25rem] shadow-[0.25rem_0.25rem_rgba(0,0,0)] dark:shadow-[0.25rem_0.25rem_rgba(255,255,255)] active:translate-x-0 active:shadow-none`}
          >
            Write
          </Link>
          <span
            onClick={signOut}
            className={`ml-4 dark:bg-black dark:active:shadow-none dark:border-white hidden sm:block transition-[0.2s] px-6 py-2 rounded border border-solid border-black translate-x-[-0.25rem] translate-y-[-0.25rem] shadow-[0.25rem_0.25rem_rgba(0,0,0)] dark:shadow-[0.25rem_0.25rem_rgba(255,255,255)] active:translate-x-0 active:shadow-none cursor-pointer`}
          >
            Logout
          </span>
        </div>
      )}
      <div></div>
    </div>
  );
}

export default AuthLinks;
