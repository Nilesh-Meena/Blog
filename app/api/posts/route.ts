// get method to fetch all categories

import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const categories = await prisma?.post.findMany();
    return new NextResponse(JSON.stringify(categories), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong..." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
