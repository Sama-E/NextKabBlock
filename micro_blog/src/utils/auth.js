import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./connect";
import { getServerSession } from "next-auth";

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
    CredentialsProvider({
      name: "Credentials",
      credentials: {
          username: {
              label: "Username:",
              type: "text",
              placeholder: "your-cool-username"
          },
          password: {
              label: "Password:",
              type: "password",
              placeholder: "your-awesome-password"
          }
      },
      async authorize(credentials) {
        // This is where you need to retrieve user data 
        // to verify with credentials
        // Docs: https://next-auth.js.org/configuration/providers/credentials
        const user = { 
          id: "clpt29j0v0000m8a0jo3758n1", 
          name: "Guest", 
          email: "guest@guest.com", 
          password: "Password" }

        if (credentials?.email === user.email) {
            return user
        } else {
            return null
        }
      }
    })
  ],
};

export const getAuthSession = () => getServerSession(authOptions);