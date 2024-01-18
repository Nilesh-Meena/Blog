import Head from "next/head";
import React from "react";
import Image from "next/image";

import { ArticleProps } from "@/interfaces/interfaces";

const ArticleAuthor = ({ author }: { author: string }) => (
  <div className="px-4 py-4 flex space-x-2">
    <div className="flex items-center space-x-2">
      <Image
        src="/images/Avatar.jpg"
        width={36}
        height={36}
        className="rounded-full"
        alt="Author"
      />
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white">
          {author}
        </h3>
        <h6 className="text-sm font-medium text-gray-500">
          Oct 27, 2021 · 6 min read
        </h6>
      </div>
    </div>
  </div>
);

const ArticleComponent = ({ title, coverImage, description }: ArticleProps) => {
  return (
    <li className="relative w-full group ">
      <div
        className=" md:w-full
          bg-light-white-100 border border-solid border-black
          transition-[0.2s]
          rounded-md 
          shadow-[0.25rem_0.25rem_rgba(0,0,0)] active:translate-x-0 active:shadow-none
          hover:cursor-pointer 
          "
      >
        {/* Cover Image */}
        <div className="mb-1 overflow-hidden">
          <Image
            src={coverImage}
            width={20}
            height={10}
            layout="responsive"
            className="w-full rounded-t-md"
            alt="Cover Image"
          />
        </div>
        {/* Title */}
        <h1
          className="px-4 py-2 text-base sm:h-[84px] md:text-xl font-bold text-gray-900 dark:text-white group-hover:underline
        md:h-16 "
        >
          {title.length > 60
            ? title.slice(0, title.lastIndexOf(" ", 60)) + " ..."
            : title}
        </h1>
        {/* Description */}
        <div
          className="px-4 py-2 mb-8 text-sm sm:text-base sm:mb-2 md:h-16 
          sm:h-16 
         "
        >
          <p
            className="text-base text-gray-900 dark:text-white
          "
          >
            {description.length > 80
              ? description.slice(0, description.lastIndexOf(" ", 80)) + " ..."
              : description}
          </p>
        </div>
        <ArticleAuthor author="John Doe" />
      </div>
    </li>
  );
};

export default function ArticleCard() {
  return (
    <>
      <main className="w-full flex flex-col items-center justify-center overflow-hidden ">
        <h1>Here</h1>
        <ul
          className="grid grid-cols-1 gap-4 mt-16 mb-5 mx-4 
          sm:grid-cols-2 sm:gap-4 
          md:grid-cols-2 md:gap-4
          lg:grid-cols-3 lg:gap-8 "
        >
          <ArticleComponent
            title="The Future of Software is here. What should we do As this is impossible"
            coverImage="/images/cover.jpg"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          quibusdam, quos, quia, voluptatum quisquam quae voluptate"
          />
          <ArticleComponent
            title="The Future of Software"
            coverImage="/images/cover.jpg"
            description="12 34 56 78 90 12 "
          />
          <ArticleComponent
            title="The Future of Software"
            coverImage="/images/cover.jpg"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          quibusdam, quos, quia, voluptatum quisquam quae voluptate, voluptas, quod "
          />
          <ArticleComponent
            title="The Future of Software"
            coverImage="/images/cover.jpg"
            description="L "
          />
          <ArticleComponent
            title="The Future of Software"
            coverImage="/images/cover.jpg"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            quibusdam, quos, quia, voluptatum quisquam quae voluptate, voluptas, quod "
          />
        </ul>
      </main>
    </>
  );
}
