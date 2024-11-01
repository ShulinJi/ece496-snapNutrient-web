import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { NextAuthOptions } from "next-auth"

// Verify environment variables are loaded
if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  throw new Error('Missing Google OAuth Credentials');
}

export const authOptions: NextAuthOptions = {
  debug: true,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("Sign in attempt:", { user, account, profile })
      return true
    },
    async redirect({ url, baseUrl }) {
      console.log("Redirect attempt:", { url, baseUrl })
      return url.startsWith(baseUrl) ? url : baseUrl
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
