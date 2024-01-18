// get method to fetch all categories

import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// Get Single Post

export const GET = async (
  req: NextRequest,
  { params }: { params: { slug: string } }
) => {
  const { slug } = params;

  // Try and Catch
  try {
    const post = await prisma?.post.findUnique({
      where: {
        slug,
      },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(post), {
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
