import React from "react";
import Pagination from "./Pagination";
import Card from "./Card";

function CardList() {
  return (
    <div className="flex-5">
      <h1 className="my-12 text-3xl">Recent Posts</h1>

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
