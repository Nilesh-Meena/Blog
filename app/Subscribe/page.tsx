import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subscribe ",
  description: "Subscribe to our newsletter",
};

function Subscribe() {
  return (
    <div className="pb-4">
      <div>Subscribe Page</div>
      <div className="flex space-x-4">
        <div className="w-1/2 p-4 border border-black shadow-[0.25rem_0.25rem]">
          <h2 className="text-3xl">Turn your curisoty into skills.</h2>
          <p className="">Get your hot & fresh cup of Tech tutorial.</p>
        </div>
        <div className="w-1/2 p-4">
          <h2>Right</h2>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
