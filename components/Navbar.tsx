import React from "react";
import Image from "next/image";

import { searchIcon } from "@/public/Icons";
import AuthLinks from "./AuthLinks";
import NavLinks from "./NavLinks";
import Toggle from "./Toggle";
import NavMobileLinks from "./NavMobileLinks";

const Navbar = () => {
  return (
    <main className="mx-4 z-80 text-black">
      <div className="mx-4 border border-solid rounded-3xl border-black box-border shadow-[0.25rem_0.25rem_rgba(0,0,0)] fixed top-6 left-2 right-2 bg-white z-50">
        <div className="px-4  md:px-10 md:py-2 gap-8">
          <div className="flex ustify-between items-center h-[48px] md:h-full">
            {/* Logo */}

            <div className="flex items-center justify-start w-full md:flex-1 ">
              <div className="lg:hidden mx-2 mr-2 md:mb-0 items-center">
                <NavMobileLinks />
              </div>
              <div className="flex text-xl font-bold justify-center md:justify-normal whitespace-nowrap  w-full">
                InkWell
              </div>
            </div>

            {/* Nav Items */}
            <div className="hidden lg:flex lg:gap-4 flex-1 text-center text-lg justify-center">
              <NavLinks href="/">All</NavLinks>
              <NavLinks href="/Technology">Blogs</NavLinks>
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
                <Image
                  src={searchIcon}
                  alt="Search"
                  width={24}
                  height={1}
                  className="cursor-pointer "
                />
              </div>
              <AuthLinks />
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
      </div>
    </main>
  );
};

export default Navbar;
