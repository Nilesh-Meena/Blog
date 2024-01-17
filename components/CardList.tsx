import React from "react";
import Pagination from "./Pagination";
import Card from "./Card";
import { CardListProps, PostItem } from "@/interfaces/interfaces";
import Image from "next/image";
import Link from "next/link";

const getData = async (page: CardListProps) => {
  const response = await fetch(
    `http://localhost:3000/api/posts?page=${page.page}`,
    {
      cache: "no-cache",
    }
  );
  if (!response.ok) {
    throw new Error("Failed");
  }
  return response.json();
};

async function CardList(page: CardListProps) {
  const { posts, totalPosts } = await getData(page);
  const POST_PER_PAGE = 4;
  // Boolean
  const hasPrev = POST_PER_PAGE * (page.page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page.page - 1) + POST_PER_PAGE < totalPosts;

  return (
    <div className="flex-5">
      <h1 className="my-12 text-3xl font-semibold">Recent Posts</h1>

      {/* Post */}
      <div>
        {posts?.map((item: PostItem, key: number) => (
          <div key={item._id} className="mb-12 lg:flex gap-12 items-center ">
            {/* Image */}
            <div className="flex-1 aspect-square md::h-[240px] lg:h-[350px] relative">
              {item.img && (
                <Image
                  src={item.img}
                  alt="Image Icon"
                  fill
                  className="object-cover"
                />
              )}
            </div>
            {/* Text */}
            <div className="flex-1 mt-3 lg:mt-0 flex flex-col gap-8">
              <div>
                <span className="text-gray-500">
                  {new Date(item.createdAt).toLocaleDateString("en-GB")} -{" "}
                </span>
                <span className="text-prime-red font-medium capitalize">
                  {item.catSlug}
                </span>
              </div>
              <Link href="/">
                <h1 className="text-3xl">{item.title}</h1>
              </Link>
              <p className="text-base font-light text-bgDarkTextSoft">
                {item.desc}
              </p>
              <Link
                href="/"
                className="border-b border-solid border-prime-red max-w-max py-[2px]"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Pagination page={page.page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
}

export default CardList;
