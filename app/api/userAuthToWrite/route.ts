// get method to fetch user role based on session ID

import prisma from "@/utils/connect";
import { getSession } from "next-auth/react";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // const session = await getSession({ req });

    // if (!session || !session.user) {
    //   return res.status(401).json({ error: "Unauthorized" });
    // }
    // Fetch user information based on the session user's email
    const userId = await prisma?.session.findMany({
      select: {
        userId: true,
      },
    });

    if (!userId || userId.length === 0) {
      return new NextResponse(
        JSON.stringify({ message: "User session not found" }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    const user = await prisma?.user.findUnique({
      where: {
        id: userId[0].userId,
      },
      select: {
        role: true,
      },
    });

    return new NextResponse(JSON.stringify(user), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong..." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
