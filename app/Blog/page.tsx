import React from "react";

import { Metadata } from "next";
import CardList from "@/components/CardList";
import Menu from "@/components/Menu";

export const metadata: Metadata = {
  title: "Blogs ",
  description: "The Blog Page",
};

function Blog() {
  return (
    <div>
      {/* Title */}
      <div className="py-1 px-2 text-center text-4xl bg-prime-purple">
        Coding Blog
      </div>
      {/* Blogs */}
      <div className="flex gap-12">
        <CardList />
        <Menu />
      </div>
    </div>
  );
}

export default Blog;
