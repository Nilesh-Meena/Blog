import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategoryList() {
  return (
    <div>
      <h1 className="font-Domain my-12 text-3xl font-semibold">Categories</h1>
      {/* list */}
      <div className="flex flex-wrap  justify-between gap-5">
        <Link
          href="/"
          className={` flex items-center gap-3 w-[45%] lg:w-[25%] xl:w-[15%] h-20 justify-center rounded-lg bg-[#57c4ff31] `}
        >
          <Image
            src="/Images/Avatar.jpg"
            alt="Image"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="capitalize">Blogs</span>
        </Link>
        <Link
          href="/"
          className={` flex items-center gap-3 w-[45%] lg:w-[25%] xl:w-[15%] h-20 justify-center rounded-lg bg-[#da85c731] `}
        >
          <Image
            src="/Images/Avatar.jpg"
            alt="Image"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="capitalize">Tutorials</span>
        </Link>
        <Link
          href="/"
          className={` flex items-center gap-3 w-[45%] lg:w-[25%] xl:w-[15%] h-20 justify-center rounded-lg bg-[#7fb88133] `}
        >
          <Image
            src="/Images/Avatar.jpg"
            alt="Image"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="capitalize">Books</span>
        </Link>
        <Link
          href="/"
          className={` flex items-center gap-3 w-[45%] lg:w-[25%] xl:w-[15%] h-20 justify-center rounded-lg bg-[#ff795736] `}
        >
          <Image
            src="/Images/Avatar.jpg"
            alt="Image"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="capitalize">Coding</span>
        </Link>
        <Link
          href="/"
          className={` flex items-center gap-3 w-[45%] lg:w-[25%] xl:w-[15%] h-20 justify-center rounded-lg bg-[#ffb04f45] `}
        >
          <Image
            src="/Images/Avatar.jpg"
            alt="Image"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="capitalize">News</span>
        </Link>
        <Link
          href="/"
          className={` flex items-center gap-3 w-[45%] lg:w-[25%] xl:w-[15%] h-20 justify-center rounded-lg bg-[#5e4fff31] `}
        >
          <Image
            src="/Images/Avatar.jpg"
            alt="Image"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="capitalize">Review</span>
        </Link>
      </div>
    </div>
  );
}

export default CategoryList;
