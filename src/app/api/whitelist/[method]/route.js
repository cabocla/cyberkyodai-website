import { checkWhitelist, getMerkleProof, getMerkleRoot } from "./merkletree";

export async function GET(req) {
  const url = req.url.split("whitelist/")[1];
  const method = url.split("?")[0];
  let params = req.nextUrl.searchParams;
  let data;
  try {
    switch (method) {
      case "check":
        data = checkWhitelist(params.get("address"));
        break;
      case "proof":
        data = getMerkleProof(params.get("address"));
        break;
      case "root":
        data = getMerkleRoot();
        break;
    }
  } catch (e) {
    console.log(e);
  }

  return new Response(
    JSON.stringify({
      data,
    }),
    {
      status: 200,
    }
  );
}
