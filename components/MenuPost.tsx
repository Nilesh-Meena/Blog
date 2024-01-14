import React from "react";
import Image from "next/image";
import Link from "next/link";

function MenuPost({ withImage }: { withImage: boolean }) {
  return (
    <div>
      {/* 1st container*/}
      <div className="mt-9 mb-16 flex flex-col gap-9">
        <Link href="/" className="flex items-center gap-5">
          {withImage && (
            <div className="w-1/2 flex-grow">
              <Image
                src="/Images/Avatar.jpg"
                alt="Image Icon"
                width={60}
                height={60}
                className="rounded-[50%] border-2 object-cover border-gray-300"
              />
            </div>
          )}
          <div className="flex-4 flex flex-col gap-1">
            <span className="py-1 px-2 text-xs text-white bg-prime-red max-w-max rounded-full cap">
              Travel
            </span>
            <h3 className="text-lg font-medium leading-4 text-bgDarkTextSoft">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className="text-xs">
              <span>John Doe - </span>
              <span className="text-gray-500">11/01/2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className="flex items-center gap-5">
          {withImage && (
            <div className="w-1/2 flex-grow">
              <Image
                src="/Images/Avatar.jpg"
                alt="Image Icon"
                width={60}
                height={60}
                className="rounded-[50%] border-2 object-cover border-gray-300"
              />
            </div>
          )}
          <div className="flex-4 flex flex-col gap-1">
            <span className="py-1 px-2 text-xs text-white bg-prime-red max-w-max rounded-full cap">
              Travel
            </span>
            <h3 className="text-lg font-medium leading-4 text-bgDarkTextSoft">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className="text-xs">
              <span>John Doe - </span>
              <span className="text-gray-500">11/01/2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className="flex items-center gap-5">
          {withImage && (
            <div className="w-1/2 flex-grow">
              <Image
                src="/Images/Avatar.jpg"
                alt="Image Icon"
                width={60}
                height={60}
                className="rounded-[50%] border-2 object-cover border-gray-300"
              />
            </div>
          )}
          <div className="flex-4 flex flex-col gap-1">
            <span className="py-1 px-2 text-xs text-white bg-prime-red max-w-max rounded-full cap">
              Travel
            </span>
            <h3 className="text-lg font-medium leading-4 text-bgDarkTextSoft">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className="text-xs">
              <span>John Doe - </span>
              <span className="text-gray-500">11/01/2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className="flex items-center gap-5">
          {withImage && (
            <div className="w-1/2 flex-grow">
              <Image
                src="/Images/Avatar.jpg"
                alt="Image Icon"
                width={60}
                height={60}
                className="rounded-[50%] border-2 object-cover border-gray-300"
              />
            </div>
          )}
          <div className="flex-4 flex flex-col gap-1">
            <span className="py-1 px-2 text-xs text-white bg-prime-red max-w-max rounded-full cap">
              Travel
            </span>
            <h3 className="text-lg font-medium leading-4 text-bgDarkTextSoft">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className="text-xs">
              <span>John Doe - </span>
              <span className="text-gray-500">11/01/2024</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuPost;
