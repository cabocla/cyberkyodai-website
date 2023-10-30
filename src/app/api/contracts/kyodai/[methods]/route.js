import Web3 from "web3";
import cyberKyodai from "../../../../../../public/contracts/contracts/mainnet/CyberKyodai.sol/CyberKyodai.json";

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_RPC));
const contract = new web3.eth.Contract(
  cyberKyodai.abi,
  process.env.KYODAI_GOERLI
);
const replacer = (key, value) =>
  typeof value === "bigint" ? value.toString() : value;

export async function GET(req) {
  const url = req.url.split("contracts/kyodai/")[1];
  // let web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_RPC));
  // let contract = new web3.eth.Contract(
  //   cyberKyodai.abi,
  //   process.env.KYODAI_GOERLI
  // );
  const method = url.split("?")[0];
  let params = req.nextUrl.searchParams;
  let data;
  try {
    switch (method) {
      case "alliance-supply":
        data = await allianceSupply();
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
      case "token-uri":
        data = {
          tokenURI: String(
            await contract.methods.tokenURI(params.get("id")).call()
          ),
        };
        break;
      case "events":
        data = await getEvents();
        break;
      case "events-mint":
        data = await getMints(params);
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

async function getMints(params) {
  const address = params.get("address");
  const res = await getEvents("Transfer", {
    filter: {
      from: "0x0000000000000000000000000000000000000000",
      to: address,
    }, // Using an array means OR: e.g. 20 or 23
    fromBlock: 0,
    toBlock: "latest",
  });
  return { events: res };
}

async function getEvents(eventName, config) {
  const res = await contract.getPastEvents(eventName, config);
  let data = res.map((e) => {
    return JSON.parse(JSON.stringify(e, replacer));
  });
  return data;
}

async function allianceSupply() {
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
