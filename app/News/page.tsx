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
      <Head>
        <title>News</title>
        <meta
          name="description"
          content="All the latest news from the world of Software"
        />
      </Head>
      <div>
        <div>Hello, this is the News page</div>
        <ArticleCard />
      </div>
    </>
  );
}

export default News;
