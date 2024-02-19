import Comments from "@/components/Comments";
import Menu from "@/components/Menu";
import Image from "next/image";
import React from "react";

const getData = async (slug: string) => {
  const response = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-cache",
  });
  if (!response.ok) {
    throw new Error("Failed");
  }
  return response.json();
};

async function SinglePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const data = await getData(slug);
  // console.log("there", data.user.image);
  return (
    <div>
      {/* Image Container */}
      <div className="px-8 flex justify-center">
        <div className="flex relative w-[732px] h-[316px]">
          <Image
            src={data.img}
            alt="conver Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
      {/* title container */}
      <div className="w-full block break-words m-0 font-light mb-4 border-t-2 border-b-2 border-black">
        <div className="min-h-[253px] px-[93px] items-start flex flex-col gap-4 justify-center">
          <p className="gap-1 flex items-center">
            <span className="text-3xl">•</span>
            <span className="text-lg">
              {new Date(data?.createdAt)
                .toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                })
                .replace(/(\d+) (\w+) (\d+)/, (match, day, month, year) => {
                  const months = [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ];
                  return `${
                    months[new Date(data?.createdAt).getMonth()]
                  } ${day.padStart(2, "0")}, ${year}`;
                })}
            </span>
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl  mb-12">
            {data?.title}
          </h1>
        </div>
      </div>

      {/* content */}
      <div className="flex gap-12 mx-auto w-full">
        {/* posts */}
        <div className="flex-5 mt-12  px-[93px] w-full">
          {/* description */}
          <div
            className="text-pretty"
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />

          {/* Comments */}
          <div>
            <Comments postSlug={slug} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
