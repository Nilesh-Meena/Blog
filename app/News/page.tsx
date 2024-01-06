import Head from "next/head";
import React from "react";
import { Metadata } from "next";

import ArticleCard from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: "News",
  description: "All the latest news from the world of Software",
};

function News() {
  return (
    <>
      <div className="mt-32 mx-5">
        <div>Hello, this is the News page</div>
        <ArticleCard />
      </div>
    </>
  );
}

export default News;
