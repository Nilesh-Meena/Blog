import Image from "next/image";
import React from "react";

function Featured() {
  return (
    <div className="mt-8">
      <h1 className="text-7xl">
        EVERYTHING IS <b>PERSONAL</b>
        <br /> INCLUDING THIS BLOG
      </h1>
      <div className="mt-16 flex items-center gap-12">
        {/* image */}
        <div className="flex-1 h-[500px] relative">
          <Image
            src="/Images/cover.jpg"
            alt="Cover Image"
            fill
            className="object-cover"
          />
        </div>
        {/* text */}
        <div className="flex flex-col gap-5 flex-1 ">
          <h1 className="text-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h1>
          <p className="text-xl font-light text-justify dark:text-bgDarkText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            quibusdam quisquam exercitationem blanditiis iste debitis sint
            reiciendis est? Nam, asperiores. Ipsam fugit libero alias nihil
            soluta quo hic perspiciatis quia?
          </p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
