/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_KYODAI_GOERLI: process.env.KYODAI_GOERLI,
    NEXT_PUBLIC_INFURA_RPC: process.env.INFURA_RPC,
    INFURA_KEY: process.env.INFURA_KEY,
    WALLET_CONNECT_ID: process.env.WALLET_CONNECT_ID,
  },
};

module.exports = nextConfig;
