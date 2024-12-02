import type { NextConfig } from "next";
import { createCivicAuthPlugin } from "@civic/auth/nextjs"

const nextConfig: NextConfig = {
  /* config options here */
};
const withCivicAuth = createCivicAuthPlugin({
  clientId: `${process.env.NEXT_PUBLIC_CIVIC_CLIENT_ID}`,
});

export default withCivicAuth(nextConfig);
