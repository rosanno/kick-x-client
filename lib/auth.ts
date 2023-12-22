import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions } from "next-auth";
import { compare } from "bcrypt";
import axios from "axios";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/sign-in",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env
        .GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@email.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        let customer;

        try {
          customer = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/customers/sign-in`,
            credentials
          );
        } catch (error) {
          console.log("AUTH ERROR", error);
        }

        if (
          !customer ||
          !(await compare(
            credentials.password,
            customer?.data.password
          ))
        ) {
          return null;
        }

        return {
          id: customer?.data.id,
          name: customer?.data.name,
          email: customer?.data.email,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      };
    },
    async signIn({ profile }) {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/customers/sign-up`,
          {
            name: profile?.name,
            email: profile?.email,
            picture: profile?.picture,
          }
        );

        console.log("Response:", response.data);
      } catch (error: any) {
        if (
          axios.isAxiosError(error) &&
          error.response?.status === 409
        ) {
          return true;
        } else {
          console.error("Error:", error);
        }
      }

      return true;
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
        };
      }
      return token;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
};
