import { PrismaAdapter } from "@auth/prisma-adapter";
// import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./connect";
import { getServerSession } from "next-auth";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      profile(profile){
        return({
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.image,
          role: profile.role,
        })
      }
    }),
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
  ],

  callbacks:{
    async jwt({ token, user }){
      return { ...token, ...user };
    },
    async session({ session, token }){
      session.user.role = token.role;
      return session;
    }
  }
};

export const getAuthSession = () => getServerSession(authOptions);
