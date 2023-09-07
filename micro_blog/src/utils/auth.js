import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./connect";

export const authOptions = {
  // DB - Prisma Adapter - npx prisma generate
  // RDBMS - npx prisma migrate
  adapter: PrismaAdapter(prisma),
  // Auth - Google & Facebook Providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
  ],
}