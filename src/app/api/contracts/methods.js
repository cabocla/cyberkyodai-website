const url = process.env.NEXT_PUBLIC_URL;
const contractApi = url + "api/contracts/";
export const kyodaiApi = contractApi + "kyodai/";
export const shateiApi = contractApi + "shatei/";
export const underworldApi = contractApi + "underworld/";

export const methods = {
  totalSupply: "total-supply",
  allianceSupply: "alliance-supply",
  name: "name",
  tokenURI: "token-uri",
  eventsMint: "events-mint",
  //   publicMint: "public-mint",
};
