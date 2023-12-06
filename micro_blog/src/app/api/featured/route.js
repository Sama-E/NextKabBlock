import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET FEATURED POST
export const GET = async (req) => {

  try {
    const post = await prisma.post.findMany({
      where: { featured: true },
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
}