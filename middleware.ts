import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/",
  },
});

// Protect all routes inside users
export const config = {
  matcher: ["/users/:path*"],
};
