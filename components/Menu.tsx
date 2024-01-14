import Link from "next/link";
import React from "react";
import MenuPost from "./MenuPost";

function Menu() {
  return (
    <div className="hidden lg:block flex-2 mt-12">
      {/* Popular */}
      <h2 className="text-base font-normal text-gray-500">What's Hot</h2>
      <h1 className="text-3xl font-semibold">Most Popular</h1>
      {/* Items */}
      <MenuPost withImage={false} />
      {/* Categories */}
      <h2 className="text-base font-normal text-gray-500">
        Discover by topics
      </h2>
      <h1 className="text-3xl font-semibold">Categories</h1>
      <div className="mt-9 mb-14 flex flex-wrap gap-5">
        <Link
          href="/"
          className="capitalize py-5 px-6 rounded-xl bg-[#57c4ff31] text-base leading-3"
        >
          Blogs
        </Link>
        <Link
          href="/"
          className="capitalize py-5 px-6 rounded-xl bg-[#da85c731]  text-base leading-3"
        >
          Tutorials
        </Link>
        <Link
          href="/"
          className="capitalize py-4 px-6 rounded-xl bg-[#7fb88133]  text-base leading-3"
        >
          books
        </Link>
        <Link
          href="/"
          className="capitalize py-5 px-6 rounded-xl bg-[#ff795736] text-base leading-3"
        >
          Coding
        </Link>
        <Link
          href="/"
          className="capitalize py-5 px-6 rounded-xl bg-[#ffb04f45]  text-base leading-3"
        >
          News
        </Link>
        <Link
          href="/"
          className="capitalize py-5 px-6 rounded-xl bg-[#5e4fff31]  text-base leading-3"
        >
          Review
        </Link>
      </div>

      {/* Editors */}
      <h2 className="text-base font-normal text-gray-500">
        Choosen by the Editor
      </h2>
      <h1 className="text-3xl font-semibold">Editor's Pick</h1>
      {/* Items */}
      <MenuPost withImage={true} />
    </div>
  );
}

export default Menu;
