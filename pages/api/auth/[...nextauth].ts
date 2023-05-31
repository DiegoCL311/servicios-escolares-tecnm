import NextAuth, { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import prismadb from "@/lib/prismadb";

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      id: "Credentials",
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid email or password");
        }

        const cuenta = await prismadb.cuenta.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        if (!cuenta?.hashedPassword) {
          throw new Error("Invalid email");
        }

        const isValid = await bcrypt.compare(credentials.password, cuenta.hashedPassword);

        if (!isValid) {
          throw new Error("Invalid password");
        }

        return cuenta;
      },
    }),
  ],
  adapter: PrismaAdapter(prismadb),
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
