import Image from "next/image";
import React from "react";
import Button from "./ui/Button";
import Link from "next/link";

function Featured() {
  return (
    <div className="mt-12 lg:mt-8">
      <h1 className=" text-4xl md:text-6xl xl:text-7xl font-Domain">
        EVERYTHING IS <b>PERSONAL</b>
        <br /> INCLUDING THIS BLOG
      </h1>
      <div className="mt-16 flex items-center gap-12">
        {/* image */}
        <div className="hidden md:flex flex-1 h-[500px] relative">
          <Image
            src="/Images/cover.jpg"
            alt="Cover Image"
            fill
            className="object-cover"
          />
        </div>
        {/* text */}
        <div className="flex flex-col gap-5 flex-1 ">
          <h1 className="text-4xl font-TWLight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h1>
          <p className="text-xl font-light font-TWMedium text-justify dark:text-bgDarkText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            quibusdam quisquam exercitationem blanditiis iste debitis sint
            reiciendis est? Nam, asperiores. Ipsam fugit libero alias nihil
            soluta quo hic perspiciatis quia?
          </p>

          <Button>Read More</Button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
