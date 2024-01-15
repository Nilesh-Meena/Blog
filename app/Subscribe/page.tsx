"use client";
import React from "react";

// import { Metadata } from "next";
// import Button from "@/components/Button";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Subscribe ",
//   description: "Subscribe to our newsletter",
// };

function Subscribe() {
  const { data, status } = useSession();
  const router = useRouter();
  // console.log(data, status);

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <div className="pb-4">
      <div>Subscribe Page</div>
      <div className="flex space-x-4 ">
        <div className=" w-1/2 p-4 border  border-black dark:border-white shadow-[0.25rem_0.25rem]">
          <div className="mb-4">
            <h2 className="text-3xl">Turn your curisoty into skills.</h2>
            <p className="">Get your hot & fresh cup of Tech tutorial.</p>
          </div>

          <div className="flex flex-col gap-5">
            <button
              onClick={() => signIn("google")}
              className="border border-black dark:border-white shadow-[0.25rem_0.25rem] py-2 transition-[0.3] active:shadow-none "
            >
              Sing in with Google
            </button>
            <button className="border border-black dark:border-white shadow-[0.25rem_0.25rem] py-2 transition-[0.3] active:shadow-none">
              Sing in with Github
            </button>
          </div>
        </div>
        <div className="w-1/2 p-4">
          <h2>Right</h2>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
