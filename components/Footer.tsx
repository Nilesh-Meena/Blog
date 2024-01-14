import React from "react";
import Link from "next/link";

import twitter from "@/public/Icons/twitter.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="mt-12 flex md:flex-row flex-col md:gap-8 gap-12 justify-between py-5 px-5 bg-black text-white">
      {/*info  */}
      <div className="flex-1 flex-col gap-4 ">
        {/* logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/Images/Avatar.jpg"
            alt="Blog Website"
            width={50}
            height={50}
            className="rounded-full"
          />
          <h1 className="text-3xl ">InkWell</h1>
        </div>
        <p className="font-light dark:text-bgDarkTextSoft">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, iusto
          illo similique itaque eos excepturi magnam, aliquid molestiae, velit
          quibusdam debitis. Iste at numquam dolorum dolore laborum natus rerum
          deleniti?
        </p>

        {/* Icons */}
        <div className="flex flex-row mt-4 gap-3 ">
          <div className=" h-12 w-12 px-2 py-2 border border-gray-400 shadow-[0.10rem_0.10rem_rgba(255,255,255)] active:shadow-none cursor-pointer  transition-[0.2s] active:translate-x-[0.10rem] active:translate-y-[0.10rem]">
            <Image src={twitter} alt="twitter" width={24} height={24} />
          </div>
          <div className=" h-12 w-12 px-2 py-2 border border-gray-400 shadow-[0.10rem_0.10rem_rgba(255,255,255)] active:shadow-none cursor-pointer  transition-[0.2s] active:translate-x-[0.10rem] active:translate-y-[0.10rem]">
            <Image src={twitter} alt="twitter" width={24} height={24} />
          </div>
          <div className=" h-12 w-12 px-2 py-2 border border-gray-400 shadow-[0.10rem_0.10rem_rgba(255,255,255)] active:shadow-none cursor-pointer  transition-[0.2s] active:translate-x-[0.10rem] active:translate-y-[0.10rem]">
            <Image src={twitter} alt="twitter" width={24} height={24} />
          </div>
          <div className=" h-12 w-12 px-2 py-2 border border-gray-400 shadow-[0.10rem_0.10rem_rgba(255,255,255)] active:shadow-none cursor-pointer  transition-[0.2s] active:translate-x-[0.10rem] active:translate-y-[0.10rem]">
            <Image src={twitter} alt="twitter" width={24} height={24} />
          </div>
        </div>
        <p className="mt-4">
          {new Date().getFullYear()} &copy; All Rights Reserved.
        </p>
      </div>
      {/* links */}

      <div className="flex items-center justify-center gap-16 md:gap-8 ">
        <div className="flex flex-col gap-2">
          <span className="font-medium text-lg">Links</span>
          <Link href="/">Home</Link>
          <Link href="/">Blogs</Link>
          <Link href="/">Tutorials</Link>
          <Link href="/">Books</Link>
          <Link href="/">News</Link>
          <Link href="/" className="whitespace-nowrap">
            About Us
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-medium text-lg">Links</span>
          <Link href="/">Home</Link>
          <Link href="/">Blogs</Link>
          <Link href="/">Tutorials</Link>
          <Link href="/">Books</Link>
          <Link href="/">News</Link>
          <Link href="/" className="whitespace-nowrap">
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
