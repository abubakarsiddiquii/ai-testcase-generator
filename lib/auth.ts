import CredentialsProvider from "next-auth/providers/credentials"
import { NextAuthOptions } from "next-auth"
import bcrypt from "bcryptjs"
import { users } from "./data"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // Find user (replace with DB lookup later)
        const user = users.find((u) => u.email === credentials.email)
        if (!user) return null

        const isValid = await bcrypt.compare(credentials.password, user.password)
        if (!isValid) return null

        return {
          id: user.id,
          name: user.name,
          email: user.email,
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET ?? "dev-secret",
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        (token as any).id = (user as any).id ?? (token as any).sub
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = (token as any).id ?? (token as any).sub
      }
      return session
    },
  },
}
