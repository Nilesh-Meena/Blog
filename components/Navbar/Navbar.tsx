import React from "react";

import AuthLinks from "../AuthLink/AuthLinks";
import NavLinks from "./NavLinks";
import Toggle from "../ui/Toggle";
import NavMobileLinks from "./NavMobileLinks";
import AuthButton from "../AuthLink/AuthButton";
import Link from "next/link";

const Navbar = () => {
  return (
    <main className="mx-4 my-8 z-80 text-black font-Domain">
      <div
        className="mx-4 border border-solid rounded-3xl border-black box-border shadow-[0.25rem_0.25rem_rgba(0,0,0)] dark:shadow-[0.25rem_0.25rem_rgba(255,255,255)]  top-6 left-2 right-2 bg-white z-50
      dark:bg-black dark:border-white dark:text-white"
      >
        <div className="px-4  md:px-10 md:py-2 gap-8">
          <div className="flex ustify-between items-center h-[48px] md:h-full">
            {/* Logo */}

            <div className="flex items-center justify-start w-full md:flex-1 ">
              <div className="lg:hidden mx-2 mr-2 md:mb-0 items-center">
                <NavMobileLinks />
              </div>
              <div className="flex text-xl font-bold justify-center md:justify-normal whitespace-nowrap  w-full">
                <Link href="/">InkWell</Link>
              </div>
            </div>

            {/* Nav Items */}
            <div className="hidden lg:flex lg:gap-4 flex-1 text-center text-lg justify-center">
              <NavLinks href="/">Blogs</NavLinks>
              <NavLinks href="/Tutorials">Tutorials</NavLinks>
              <NavLinks href="/">Books</NavLinks>
              <NavLinks href="/News">News</NavLinks>
              <NavLinks href="/" className=" whitespace-nowrap">
                About us
              </NavLinks>
            </div>

            {/* Search and Subscribe */}

            <div className="flex items-center gap-2 flex-1 justify-end ">
              <div className="hidden  mx-4 md:mr-8  md:flex space-x-1">
                <Toggle />
              </div>
              <div className="flex">
                <AuthButton />
                <AuthLinks />
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
      </div>
    </main>
  );
};

export default Navbar;
