// get method to fetch all categories

import { getAuthSessions } from "@/utils/auth";
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

// Create a comment

export const POST = async (req: NextRequest) => {
  const session = await getAuthSessions();
  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "User not Authenticated..." }),
      {
        status: 401,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // Try and Catch
  try {
    const body = await req.json();
    const userEmail =
      session && session.user?.email ? session.user.email : undefined;
    const comment = await prisma?.comment.create({
      data: { ...body, userEmail },
    });

    return new NextResponse(JSON.stringify(comment), {
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
