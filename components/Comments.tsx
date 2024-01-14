import Link from "next/link";
import React from "react";
import Image from "next/image";

function Comments() {
  const status = "authenticated";
  return (
    <div className="mt-12">
      <h1 className="text-2xl text-bgDarkTextSoft mb-8">Comments</h1>
      {status === "authenticated" ? (
        <div className="flex  items-center justify-between gap-8">
          <textarea
            placeholder="Write a comment..."
            className="p-5 w-full border border-black-[0.8] dark:border-white-[0.8]"
          />
          <button className="px-5 py-4 bg-teal-500 rounded  text-white ">
            Send
          </button>
        </div>
      ) : (
        <Link href="/Subscribe"> Login to Comment</Link>
      )}
      {/* comments */}
      <div className="mt-12">
        {/* comment */}
        <div className="mb-12">
          {/* user */}
          <div className="flex  items-center  gap-5 mb-5 ">
            <Image
              src="/Images/Avatar.jpg"
              alt="Image"
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
            <div className="flex flex-col text-bgDarkTextSoft">
              <span className="font-semibold">John Doe</span>
              <span className="text-base">11/04/2024</span>
            </div>
          </div>
          <p className="text-base font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            architecto consequuntur magni autem praesentium eos, voluptas dicta
            inventore exercitationem perferendis reiciendis quia. Commodi id
            reiciendis est veritatis voluptates possimus voluptate!
          </p>
        </div>
        <div className="mb-12">
          {/* user */}
          <div className="flex  items-center  gap-5 mb-5 ">
            <Image
              src="/Images/Avatar.jpg"
              alt="Image"
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
            <div className="flex flex-col text-bgDarkTextSoft">
              <span className="font-semibold">John Doe</span>
              <span className="text-base">11/04/2024</span>
            </div>
          </div>
          <p className="text-base font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            architecto consequuntur magni autem praesentium eos, voluptas dicta
            inventore exercitationem perferendis reiciendis quia. Commodi id
            reiciendis est veritatis voluptates possimus voluptate!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comments;
