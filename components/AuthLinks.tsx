"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

function AuthLinks() {
  const [isScrolled, setIsScrolled] = useState(false);
  //temporary
  const isAuthenticated = false;

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
      {!isAuthenticated ? (
        <Link
          href="/Subscribe"
          className={`hidden sm:block transition-[0.2s] px-6 py-2 rounded ${
            isScrolled ? "bg-emerald-500 text-white" : "bg-white text-black"
          } border border-solid border-black hover:bg-button-hover translate-x-[-0.25rem] translate-y-[-0.25rem] shadow-[0.25rem_0.25rem_rgba(0,0,0)] active:translate-x-0 active:shadow-none`}
        >
          Login
        </Link>
      ) : (
        <div className="flex">
          <Link
            href="/"
            className={`hidden sm:block transition-[0.2s] px-6 py-2 rounded ${
              isScrolled ? "bg-prime-blue" : "bg-white text-black"
            } border border-solid border-black hover:bg-button-hover hover:translate-x-[-0.25rem] hover:translate-y-[-0.25rem] hover:shadow-[0.25rem_0.25rem_rgba(0,0,0)] active:translate-x-0 active:shadow-none`}
          >
            Write
          </Link>
          <span
            className={`ml-4 hidden sm:block transition-[0.2s] px-6 py-2 rounded border border-solid border-black hover:bg-button-hover hover:translate-x-[-0.25rem] hover:translate-y-[-0.25rem] hover:shadow-[0.25rem_0.25rem_rgba(0,0,0)] active:translate-x-0 active:shadow-none cursor-pointer`}
          >
            Logout
          </span>
        </div>
      )}
    </div>
  );
}

export default AuthLinks;
