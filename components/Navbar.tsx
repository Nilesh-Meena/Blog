"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { NavLinksProps, NavMobileLinksProps } from "@/interfaces/interfaces";
import { searchIcon } from "@/public/Icons";

const MobileLink = ({
  href,
  children,
  className,
  toggle,
}: NavMobileLinksProps) => {
  const pathName = usePathname();
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      <a href={href}>{children}</a>
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
        ${pathName === href ? "w-full" : "w-0"} dark:bg-dark`}
      ></span>
    </button>
  );
};

const NavLinks = ({ href, children, className }: NavLinksProps) => {
  const pathname: string = usePathname();
  const isActive = pathname === href;

  const defaultClasses = `inline-block align-middle text-ellipsis border border-solid
    transition-[0.2s] px-3 py-2 relative
    border-transparent hover:border hover:border-solid hover:border-black rounded-3xl
    hover:shadow-[0.25rem_0.25rem_rgba(0,0,0)] hover:translate-x-[-0.25rem]
    hover:translate-y-[-0.25rem] active:translate-x-0 active:shadow-none`;

  const activeClasses = `text-ellipsis px-3 py-2 border border-solid border-black rounded-3xl shadow-[0.25rem_0.25rem_rgba(0,0,0)]`;
  const linkClasses = clsx(
    isActive ? activeClasses : defaultClasses,
    className
  );

  return (
    <Link href={href} className={linkClasses}>
      {children}
    </Link>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;
      if (isLargeScreen) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
    };

    // Check screen size on mount and whenever the window size changes
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="mx-4">
      <div className="mx-4 w-auto md:h-[64px] border border-solid rounded-3xl border-black box-border shadow-[0.25rem_0.25rem_rgba(0,0,0)] fixed top-6 left-2 right-2 bg-white z-50">
        <div className="px-4 md:px-10 md:py-1">
          <div className="flex h-full w-full justify-between items-center p-2 mx-auto">
            {/* hamburger Menu */}
            <div className="flex h-full lg:hidden">
              <button
                className="outline-none mobile-menu-button"
                onClick={handleClick}
              >
                <svg
                  className="w-6 h-6 text-black transition-colors duration-200 hover:text-emerald-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="scale(-1, 1)"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
            {/* Logo */}
            {!isOpen ? (
              <div className="h-full space-x-2 flex items-center justify-center w-100%">
                <div className="text-xl font-bold">Hello</div>
              </div>
            ) : (
              <div className="h-full flex justify-between items-center w-full">
                <div className="text-xl font-bold ml-8">Hello</div>
                <button
                  onClick={handleClick}
                  className="relative right-0 w-6 h-6"
                >
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-0.5 block bg-black rotate-45"></span>
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-0.5 block bg-black -rotate-45"></span>
                </button>
              </div>
            )}
            {/* Nav Items */}
            <div
              className={`hidden lg:flex space-x-2 h-full relative ${
                isOpen
                  ? "flex flex-col items-center justify-center w-full"
                  : "w-70%"
              }`}
            >
              <NavLinks href="/Technology">Technology</NavLinks>
              <NavLinks href="/Innovation">Innovation</NavLinks>
              <NavLinks href="/News">News</NavLinks>
              <NavLinks href="/">About us</NavLinks>
            </div>
            {/* Search and Subscribe */}
            {!isOpen && (
              <div className="flex space-x-1 relative w-10%">
                <Image
                  src={searchIcon}
                  alt="Search"
                  width={24}
                  height={1}
                  className="cursor-pointer mr-4 hidden sm:block"
                />
                <Link
                  href="/Subscribe"
                  className={`hidden sm:block transition-[0.2s] px-4 py-2 rounded ${
                    isScrolled
                      ? "bg-emerald-500 text-white"
                      : "bg-white text-black"
                  } border border-solid border-black hover:bg-button-hover translate-x-[-0.25rem] translate-y-[-0.25rem] shadow-[0.25rem_0.25rem_rgba(0,0,0)] active:translate-x-0 active:shadow-none`}
                >
                  Subscribe
                </Link>
              </div>
            )}
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="min-w-[70vw] flex flex-col z-30 justify-between items-center fixed 
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-900 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
          >
            <nav className="flex items-center flex-col justify-center">
              <MobileLink
                href="/"
                children="Home"
                className=""
                toggle={handleClick}
              />
            </nav>
          </div>
        )}
      </div>
    </main>
  );
};

export default Navbar;
