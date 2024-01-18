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
      {/* info container */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* text container */}
        <div className="flex-1 ">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl  mb-12">
            {data?.title}
          </h1>
          <div className="lg:hidden mb-5 flex flex-1 relative h-[350px]">
            {data?.imag && (
              <Image
                src={data?.imag}
                alt="conver Image"
                fill
                className="object-cover"
              />
            )}
          </div>
          {/* user */}
          <div className="flex items-center gap-5">
            {/* userImage */}
            {data?.user.image && (
              <div className="w-[50px] h-[50px] relative">
                <Image
                  src={data.user.image}
                  alt="conver Image"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            )}
            {/* User text container */}
            <div className="flex flex-col gap-1 text-bgDarkTextSoft">
              <span className="text-lg font-medium">{data?.user.name}</span>
              <span>
                {new Date(data?.createdAt).toLocaleDateString("en-GB")}
              </span>
            </div>
          </div>
        </div>
        {/* Image container */}
        <div className="hidden lg:flex flex-1 relative h-[350px]">
          <Image
            src={data.img}
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
          <div
            className="text-pretty"
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />

          {/* Comments */}
          <div>
            <Comments postSlug={slug} />
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
