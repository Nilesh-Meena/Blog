import React from "react";
import Link from "next/link";

import twitter from "@/public/Icons/twitter.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div
      className="bottom-0 w-full h-full inline-block z-0 
   bg-black p-32 xl:p-20 lg:p-16 md:p-12 sm:p-8 "
    >
      <div className=" flex flex-col md:flex-row items-center justify-between w-full">
        {/* left Div */}
        <div className="flex items-center">
          <span className="text-white">
            {new Date().getFullYear()} &copy; All Rights Reserved.
          </span>
        </div>
        {/* right Div */}
        <div className="flex flex-col items-end">
          <Link href="/privacy-policy" className="text-white items-center">
            Privacy Policy
          </Link>
        </div>
      </div>
      {/* Icons */}
      <div className="flex flex-row mt-4 justify-end">
        <div className="mx-2 h-12 w-12 px-2 py-2 border border-white shadow-[0.10rem_0.10rem_rgba(255,255,255)] active:shadow-none cursor-pointer  transition-[0.2s] active:translate-x-[0.10rem] active:translate-y-[0.10rem]">
          <Image src={twitter} alt="twitter" width={24} height={24} />
        </div>
        <div className="mx-2 h-12 w-12 px-2 py-2 border border-white shadow-[0.10rem_0.10rem_rgba(255,255,255)] active:shadow-none cursor-pointer  transition-[0.2s] active:translate-x-[0.10rem] active:translate-y-[0.10rem]">
          <Image src={twitter} alt="twitter" width={24} height={24} />
        </div>
        <div className="mx-2 h-12 w-12 px-2 py-2 border border-white shadow-[0.10rem_0.10rem_rgba(255,255,255)] active:shadow-none cursor-pointer  transition-[0.2s] active:translate-x-[0.10rem] active:translate-y-[0.10rem]">
          <Image src={twitter} alt="twitter" width={24} height={24} />
        </div>
        <div className="mx-2 h-12 w-12 px-2 py-2 border border-white shadow-[0.10rem_0.10rem_rgba(255,255,255)] active:shadow-none cursor-pointer  transition-[0.2s] active:translate-x-[0.10rem] active:translate-y-[0.10rem]">
          <Image src={twitter} alt="twitter" width={24} height={24} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
