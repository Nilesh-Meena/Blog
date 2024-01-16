import React from "react";
import Pagination from "./Pagination";
import Card from "./Card";

const getData = async () => {
  const response = await fetch("http:localhost:3000/api/posts", {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed");
  }

  return response.json();
};

async function CardList() {
  const data = await getData();
  return (
    <div className="flex-5">
      <h1 className="my-12 text-3xl font-semibold">Recent Posts</h1>

      {/* Post */}
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
}

export default CardList;
