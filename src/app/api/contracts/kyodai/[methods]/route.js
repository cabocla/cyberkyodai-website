import Web3 from "web3";
import cyberKyodai from "../../../../../../public/contracts/contracts/mainnet/CyberKyodai.sol/CyberKyodai.json";

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_RPC));
const contract = new web3.eth.Contract(
  cyberKyodai.abi,
  process.env.KYODAI_GOERLI
);
export async function GET(req) {
  const method = req.url.split("contracts/kyodai/")[1];
  // let web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_RPC));
  // let contract = new web3.eth.Contract(
  //   cyberKyodai.abi,
  //   process.env.KYODAI_GOERLI
  // );

  let data;
  try {
    switch (method) {
      case "alliance-supply":
        data = await allianceSupply(contract);
        break;
      case "name":
        data = { name: await contract.methods.name().call() };
        break;
      // case "public-mint":
      //   data = await mint(req);
      //   break;
      case "total-supply":
        data = {
          totalSupply: String(await contract.methods.totalSupply().call()),
        };
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

async function allianceSupply(contract) {
  console.log("called alliance supply method");
  let ryu;
  let tora;
  let nobu;
  try {
    ryu = await contract.methods.allianceSupply(0).call();
    tora = await contract.methods.allianceSupply(1).call();
    nobu = await contract.methods.allianceSupply(2).call();
  } catch (e) {
    console.log(e);
  }
  return {
    allianceSupply: {
      ryuSupply: String(ryu),
      toraSupply: String(tora),
      nobuSupply: String(nobu),
    },
  };
}

// async function mint(req) {
//   const clan = req.nextUrl.searchParams.get("clan");
//   const address = req.nextUrl.searchParams.get("address");
//   let _price = web3.utils.toWei("0.033");
//   let encoded = contract.methods.publicMint(clan).encodeABI();

//   let tx = {
//     from: address,
//     to: process.env.KYODAI_GOERLI,
//     data: encoded,
//     nonce: "0x00",
//     value: web3.utils.numberToHex(_price),
//   };
//   if (ethereum) {
//     let txHash = ethereum
//       .request({
//         method: "eth_sendTransaction",
//         params: [tx],
//       })
//       .then((hash) => {
//         alert("You can now view your transaction with hash: " + hash);
//       })
//       .catch((err) => console.log(err));

//     return txHash;
//   } else {
//     console.log("ethereum not exist");
//   }
// }
