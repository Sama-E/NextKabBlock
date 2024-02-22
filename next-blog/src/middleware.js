import { withAuth } from "next-auth/middleware"

export default withAuth(
  function middleware(req) {
    // console.log(req.nextauth.token)
  },
  {
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    //Authorize Role
    authorized: async ({req, token}) => {
      if(req.nextUrl.pathname.startsWith("/write"))
        return token?.role === "ADMIN"
      return !!token
    }
  }
})

export const config = { matcher: ["/write"] };