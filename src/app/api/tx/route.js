import Web3 from "web3";
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_RPC));

export async function GET(req) {
  const hash = req.nextUrl.searchParams.get("hash");
  let receipt = await web3.eth.getTransactionReceipt(
    hash,
    function (e, receipt) {
      if (e) {
        return new Response(
          JSON.stringify({
            e,
          }),
          {
            status: 500,
          }
        );
      }
      if (receipt) {
        return receipt;
      } else {
        return null;
      }
    }
  );
  return new Response(
    JSON.stringify({
      receipt,
    }),
    {
      status: 200,
    }
  );
}
