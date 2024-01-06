import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import rightArrow from "@/public/Icons/rightArrow.svg";
import ArticleCard from "@/components/ArticleCard";
import { column } from "@/interfaces/interfaces";

export const metadata: Metadata = {
  title: "Tutorials",
  description: "Roadmap to learn some skills",
};

const Column = ({ bgColor, title, items }: column) => (
  <div
    className={`w-full md:w-1/2 md:h-64 ${bgColor} flex items-center justify-center border border-black border-solid h-full md:border md:border-black md:border-solid`}
  >
    <div className="block mx-12 my-12">
      <h3 className="text-2xl text-center mb-4">{title}</h3>
      <ul role="list">
        {items.map((item, index) => (
          <li key={index} className="flex items-center mb-2">
            <Image
              src={rightArrow}
              width={24}
              height={24}
              alt="right arrow"
              className="inline-block mr-2"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

function Tutorials() {
  return (
    <>
      <div className="mt-12 md:mt-32 h-auto md:h-1/2">
        {/* Two columns */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row">
            {/* Left column */}
            <Column
              bgColor="bg-prime-red"
              title="Figma"
              items={[
                "Step-by-step guides",
                "Step-by-step guides",
                "Step-by-step guides",
                "Step-by-step guides",
              ]}
            />
            {/* Right column */}
            <Column
              bgColor="bg-white"
              title="Unlock Skills, One Step at a Time"
              items={[
                "Step-by-step guides",
                "Step-by-step guides",
                "Step-by-step guides",
                "Step-by-step guides",
              ]}
            />
          </div>
          {/* Text content */}
          <div className="flex bg-black w-full h-[400px] flex-col items-center justify-center">
            <span className="text-white mx-4 my-2 md:mx-12 md:my-12 md:px-6 md:py-6 text-center">
              Creating your own path can be challenging, but it's also an
              exciting opportunity for growth and self-discovery. With the help
              of our expert tips, some How-Tos, and Tutorials, you'll have
              everything you need to pave the way to success. You don't need a
              roadmap - trust your instincts and take control of your journey
              today.
            </span>
          </div>
          <div className="flex flex-col md:flex-row">
            {/* Left column */}
            <Column
              bgColor="bg-prime-purple"
              title="Figma"
              items={[
                "Step-by-step guides",
                "Step-by-step guides",
                "Step-by-step guides",
                "Step-by-step guides",
              ]}
            />
            {/* Right column */}
            <Column
              bgColor="bg-white"
              title="Start Small, Learn Quickly, Get Better Together"
              items={[
                "Step-by-step guides",
                "Step-by-step guides",
                "Step-by-step guides",
                "Step-by-step guides",
              ]}
            />
          </div>
        </div>
      </div>
      <ArticleCard />
    </>
  );
}

export default Tutorials;
