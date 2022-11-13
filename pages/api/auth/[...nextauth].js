import NextAuth from "next-auth/next";
import githubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    githubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});
