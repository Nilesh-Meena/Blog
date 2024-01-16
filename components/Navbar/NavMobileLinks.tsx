"use client";

import { NavMobileLinksProps } from "@/interfaces/interfaces";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const MobileLink = ({ href, children, className }: NavMobileLinksProps) => {
  const pathName = usePathname();

  return (
    <button
      className={`${className} relative group text-light dark:text-dark my-2`}
    >
      <a href={href}>{children}</a>
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
          ${pathName === href ? "w-full" : "w-0"} dark:bg-dark`}
      ></span>
    </button>
  );
};

function NavMobileLinks() {
  const [isOpen, setOpen] = useState(false);

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    // Check if the click is outside the mobile navigation and isOpen is true
    if (isOpen && !target.closest("#mobileNavigation")) {
      console.log("click");
      setOpen(false);
    }
  };

  if (isOpen) {
    // Attach event listener when isOpen is true
    document.addEventListener("click", handleClickOutside);
  }

  return (
    <div id="mobileNavigation">
      <div className="flex w-full items-center justify-center self-stretch lg:hidden">
        {/* hamberger icon */}
        <button
          className="outline-none mobile-menu-button "
          onClick={() => setOpen(!isOpen)}
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
        {isOpen && (
          <div>
            {/* <div className="h-full flex justify-between items-center w-full">
              <button
                onClick={() => setOpen(false)}
                className="relative right-0 w-6 h-6"
              >
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-0.5 block bg-black rotate-45"></span>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-0.5 block bg-black -rotate-45"></span>
              </button>
            </div> */}

            <div className="min-w-[70vw] flex flex-col z-30 justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-900 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
              <nav className="flex items-center flex-col justify-center">
                <MobileLink href="/" children="Home" className="" />
                <MobileLink href="/" children="Home" className="" />
                <MobileLink href="/" children="Home" className="" />
                <MobileLink href="/" children="Home" className="" />
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavMobileLinks;
