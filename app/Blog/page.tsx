import React from "react";

import { Metadata } from "next";
import CardList from "@/components/CardList";
import Menu from "@/components/Menu";
import { HomeProps } from "@/interfaces/interfaces";

export const metadata: Metadata = {
  title: "Blogs ",
  description: "The Blog Page",
};

function Blog({ searchParams }: HomeProps) {
  const page = parseInt(searchParams?.page || "1");
  const cat = searchParams?.cat || "";
  // console.log("here", cat);

  return (
    <div>
      {/* Title */}
      <div className="py-1 px-2 text-center text-4xl bg-prime-purple">
        {cat}
      </div>
      {/* Blogs */}
      <div className="flex gap-12">
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
}

export default Blog;
