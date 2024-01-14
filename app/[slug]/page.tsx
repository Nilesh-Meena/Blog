import Comments from "@/components/Comments";
import Menu from "@/components/Menu";
import Image from "next/image";
import React from "react";

function SinglePage() {
  return (
    <div>
      {/* info container */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* text container */}
        <div className="flex-1 ">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl  mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className="lg:hidden mb-5 flex flex-1 relative h-[350px]">
            <Image
              src="/Images/cover.jpg"
              alt="conver Image"
              fill
              className="object-cover"
            />
          </div>
          {/* user */}
          <div className="flex items-center gap-5">
            {/* userImage */}
            <div className="w-[50px] h-[50px] relative">
              <Image
                src="/Images/cover.jpg"
                alt="conver Image"
                fill
                className="object-cover rounded-full"
              />
            </div>
            {/* User text container */}
            <div className="flex flex-col gap-1 text-bgDarkTextSoft">
              <span className="text-lg font-medium">John Doe</span>
              <span>11/04/2024</span>
            </div>
          </div>
        </div>
        {/* Image container */}
        <div className="hidden lg:flex flex-1 relative h-[350px]">
          <Image
            src="/Images/cover.jpg"
            alt="conver Image"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* content */}
      <div className="flex gap-12 w-full">
        {/* posts */}
        <div className="flex-5 mt-12 w-full">
          {/* description */}
          <div className="text-pretty">
            <p className="text-lg   font-light mb-5 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis, placeat mollitia repellendus sint molestiae deserunt
              aliquid exercitationem reprehenderit nulla dolore ab pariatur
              nostrum quisquam dolorem aspernatur neque dicta a quibusdam.
            </p>
            <p className="text-lg  font-light mb-5 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis, placeat mollitia repellendus sint molestiae deserunt
              aliquid exercitationem reprehenderit nulla dolore ab pariatur
              nostrum quisquam dolorem aspernatur neque dicta a quibusdam.
            </p>
            <p className="text-lg  font-TWLight font-light mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis, placeat mollitia repellendus sint molestiae deserunt
              aliquid exercitationem reprehenderit nulla dolore ab pariatur
              nostrum quisquam dolorem aspernatur neque dicta a quibusdam.
            </p>
            <p className="text-lg  font-TWLight font-light mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis, placeat mollitia repellendus sint molestiae deserunt
              aliquid exercitationem reprehenderit nulla dolore ab pariatur
              nostrum quisquam dolorem aspernatur neque dicta a quibusdam.
            </p>
          </div>
          {/* Comments */}
          <div>
            <Comments />
          </div>
        </div>
        {/* MeclassName="text-lg  font-TWLight font-light"nu */}
        <div className="hidden md:inline-block">
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
