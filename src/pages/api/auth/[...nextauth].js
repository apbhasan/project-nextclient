import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // Simple demo credentials provider
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Minimal logic just for the assignment:
        // accept any email with password "demo123"
        if (!credentials?.email || !credentials?.password) return null;
        if (credentials.password !== "demo123") return null;

        return {
          id: "demo-user",
          name: "Demo User",
          email: credentials.email,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
});
