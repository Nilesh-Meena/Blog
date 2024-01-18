import Image from "next/image";
import Link from "next/link";
import React from "react";

type CategoryItem = {
  _id: string;
  slug: string;
  img: string;
  title: string;
};

const getData = async () => {
  const response = await fetch("http:localhost:3000/api/categories", {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed");
  }

  return response.json();
};

const getBgColorSlug = (slug: string) => {
  const colorMapping: Record<string, string> = {
    Blogs: "bg-[#57c4ff31]",
    Tutorials: "bg-[#da85c731]",
    Books: "bg-[#7fb88133]",
    Coding: "bg-[#ff795736]",
    News: "bg-[#ffb04f45]",
    WebDev: "bg-[#5e4fff31]",
  };

  return colorMapping[slug] || "bg-gray-500";
};

const CategoryList = async () => {
  const data = await getData();
  // console.log(data);
  return (
    <div>
      <h1 className="font-Domain my-12 text-3xl font-semibold">Categories</h1>
      {/* list */}
      <div className="flex flex-wrap  justify-between gap-5">
        {data?.map((item: CategoryItem, key: number) => (
          <Link
            href={`/Blog?cat=${item.slug}`}
            key={item._id}
            className={` flex items-center gap-3 w-[45%] lg:w-[25%] xl:w-[15%] h-20 justify-center rounded-lg ${getBgColorSlug(
              item.slug
            )}`}
          >
            {item.img && (
              <Image
                src={item.img}
                alt="Image"
                width={32}
                height={32}
                className="rounded-full"
              />
            )}
            <span className="capitalize  text-base">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
