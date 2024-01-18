// get method to fetch all categories

import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// Get All Comments

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");

  // Try and Catch
  try {
    const comments = await prisma?.comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(comments), {
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
