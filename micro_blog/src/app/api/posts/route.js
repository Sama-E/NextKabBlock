import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  // page number
  const page = searchParams.get("page");

  // page category
  const cat = searchParams.get("cat");

  // # post per page
  const POST_PER_PAGE = 2;

  try {
    // take: only post per page
    // skip: do not skip any pages
    const query = {
      take: POST_PER_PAGE,
      skip: POST_PER_PAGE * (page - 1),
      where: {
        ...(cat && { catSlug: cat }),
      },
    };
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      // Pagination count + category pagination count
      prisma.post.count({ where: query.where }),
      // prisma.post.count(),
    ]);

    return new NextResponse(JSON.stringify({posts, count}, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
}