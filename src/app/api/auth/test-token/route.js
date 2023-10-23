import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getCsrfToken } from "next-auth/react";
import { SiweMessage } from "siwe";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export async function GET(req, res) {
  const csrfToken = await getCsrfToken({ req });
  return new Response(
    JSON.stringify({
      token: csrfToken,
    }),
    {
      status: 200,
    }
  );
}
