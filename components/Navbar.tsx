"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { NavLinksProps } from "@/interfaces/interfaces";
import { searchIcon } from "@/public/Icons";
import Button from "./Button";

const NavLinks = ({ href, children }: NavLinksProps) => {
  const pathname: string = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={
        isActive
          ? `  text-ellipsis px-3 py-2 border border-solid border-black rounded-3xl shadow-[0.25rem_0.25rem_rgba(0,0,0)]
          translate-x-[-0.25rem] translate-y-[-0.25rem]`
          : `inline-block align-middle text-ellipsis  border border-solid
      transition-[0.2s] px-3 py-2  relative
      border-transparent hover:border hover:border-solid hover:border-black rounded-3xl
      hover:shadow-[0.25rem_0.25rem_rgba(0,0,0)] hover:translate-x-[-0.25rem]
      hover:translate-y-[-0.25rem] active:translate-x-0 active:shadow-none `
      }
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="mx-4">
      <div className="mx-4 w-auto h-14 border border-solid rounded-3xl border-black box-border shadow-[0.25rem_0.25rem_rgba(0,0,0)] fixed top-6 left-2 right-2 bg-white z-50">
        <div className="px-10">
          <div className="flex h-full w-full justify-between items-center p-2 mx-auto">
            {/* Logo */}
            <div className="h-full space-x-2 flex items-center w-20%">
              <div className="text-xl font-bold">Hello</div>
            </div>

            {/* Nav Items */}

            <div className="flex space-x-2 h-full relative w-70%">
              <NavLinks href="/Technology">Technology</NavLinks>
              {/* <NavLinks href="/Technology">Tutorials</NavLinks> */}
              <NavLinks href="/Innovation">Innovation</NavLinks>
              <NavLinks href="/News">News</NavLinks>
              <NavLinks href="/">About us</NavLinks>
            </div>

            {/* Search and Subscribe */}
            <div className="flex space-x-1 relative w-10%">
              <Image
                src={searchIcon}
                alt="Search"
                width={24}
                height={1}
                className="cursor-pointer mr-4"
              />
              <Link
                href="/Subscribe"
                className={`transition-[0.2s] px-4 py-2 rounded ${
                  isScrolled
                    ? "bg-emerald-500 text-white"
                    : "bg-white text-black"
                } border border-solid border-black hover:bg-button-hover translate-x-[-0.25rem] translate-y-[-0.25rem] shadow-[0.25rem_0.25rem_rgba(0,0,0)] active:translate-x-0 active:shadow-none`}
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
