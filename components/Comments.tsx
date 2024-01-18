"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { CommentItemProps } from "@/interfaces/interfaces";

const fetcher = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  if (!response.ok) {
    const error = new Error(data.message);
    throw error;
  }
  return data;
};

function Comments({ postSlug }: { postSlug: string }) {
  const { status } = useSession();
  const { data, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );
  // console.log(data, typeof data);

  console.log(data);
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
        {isLoading
          ? "loading..."
          : data?.map((item: CommentItemProps) => (
              <div className="mb-12" key={item._id}>
                {/* user */}
                <div className="flex  items-center  gap-5 mb-5 ">
                  {item.user.image && (
                    <Image
                      src={item.user.image}
                      alt="Image"
                      width={50}
                      height={50}
                      className="rounded-full object-cover"
                    />
                  )}
                  <div className="flex flex-col text-bgDarkTextSoft">
                    <span className="font-semibold">{item.user.name}</span>
                    <span className="text-base">
                      {new Date(item.createdAt).toLocaleDateString("en-GB")}
                    </span>
                  </div>
                </div>
                <p className="text-base font-light">{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Comments;
