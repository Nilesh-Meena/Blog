import Image from "next/image";
import Link from "next/link";
import React from "react";

function Card() {
  return (
    <div className="mb-12 lg:flex gap-12 items-center ">
      {/* Image */}
      <div className="flex-1 aspect-square md::h-[240px] lg:h-[350px] relative">
        <Image
          src="/Images/cover.jpg"
          alt="Image Icon"
          fill
          className="object-cover"
        />
      </div>
      {/* Text */}
      <div className="flex-1 mt-3 lg:mt-0 flex flex-col gap-8">
        <div>
          <span className="text-gray-500">11/01/2024 - </span>
          <span className="text-prime-red font-medium uppercase">Coding</span>
        </div>
        <Link href="/">
          <h1 className="text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
        </Link>
        <p className="text-base font-light text-bgDarkTextSoft"></p>
        <Link
          href="/"
          className="border-b border-solid border-prime-red max-w-max py-[2px]"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export default Card;
