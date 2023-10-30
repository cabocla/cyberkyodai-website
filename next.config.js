/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    KYODAI_GOERLI: process.env.KYODAI_GOERLI,
    INFURA_RPC: process.env.INFURA_RPC,
    INFURA_KEY: process.env.INFURA_KEY,
    WALLET_CONNECT_ID: process.env.WALLET_CONNECT_ID,
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
  },
};

module.exports = nextConfig;
