"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import nobu from "../../../public/assets/images/nobu84.webp";
import tora from "../../../public/assets/images/tora84.webp";
import ryuichi from "../../../public/assets/images/ryuichi84.webp";
import classes from "./mint-dialog.module.css";
import "/node_modules/augmented-ui/augmented-ui.min.css";
import { useGlitch } from "react-powerglitch";
import { kyodaiApi, methods } from "../api/contracts/methods";

const mintHandler = (web3, contract, address, clan) => {
  // const address = walletAddress[0];
  // // request proof for wallet address

  // const presale = process.env.WHITELIST_MINT_TIME;
  // // const publicSale = process.env.PUBLIC_MINT_TIME;
  // console.log(presale);

  // if (checkWhitelist(address)) {
  //   const proof = getMerkleProof(address);
  //   console.log(proof);
  // }

  // // if (presale) {
  // //   if (checkWhitelist(address)) {
  // //     const proof = getMerkleProof(address);
  // //     console.log(proof);
  // //   } else {
  // //   }
  // //   } else if (publicSale) {
  // // } else {
  // //   // mint not started
  // // }
  if (
    window.ethereum.networkVersion !== "5" // TODO change to 1 for mainnet
  ) {
    // TODO modal open to ask for change network
    setModalOpen(true);
    console.log("not ethereum network please change");
  }
  console.log(clan);
  if (!clan) {
    console.log("set random clan?");
  }
  contract.methods
    .totalSupply()
    .call()
    .then((_supply) => {
      console.log(_supply);
    })
    .catch((err) => console.log(err));

  // let _price = web3.utils.toWei("0.033");
  // let encoded = contract.methods.publicMint(clan).encodeABI();

  // let tx = {
  //   from: address,
  //   to: process.env.NEXT_PUBLIC_KYODAI_GOERLI,
  //   data: encoded,
  //   nonce: "0x00",
  //   value: web3.utils.numberToHex(_price),
  // };

  // let txHash = ethereum
  //   .request({
  //     method: "eth_sendTransaction",
  //     params: [tx],
  //   })
  //   .then((hash) => {
  //     alert("You can now view your transaction with hash: " + hash);
  //   })
  //   .catch((err) => console.log(err));

  // return txHash;
};
function MintDialog(props) {
  const [ryuichiSupply, setRyuichiSupply] = useState(null);
  const [toraSupply, setToraSupply] = useState(null);
  const [nobuSupply, setNobuSupply] = useState(null);
  const [clanHover, setClanHover] = useState(null);
  const glitchConfig = {
    playMode: "hover",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 1000,
    },
    glitchTimeSpan: {
      start: 0,
      end: 0.8,
    },
    shake: {
      velocity: 15,
      amplitudeX: 0.05,
      amplitudeY: 0.05,
    },
    slice: {
      count: 5,
      velocity: 15,
      minHeight: 0.02,
      maxHeight: 0.05,
      hueRotate: true,
    },
    pulse: false,
  };
  const ryuGlitch = useGlitch(glitchConfig);
  const toraGlitch = useGlitch(glitchConfig);
  const nobuGlitch = useGlitch(glitchConfig);
  const getSupply = async () => {
    console.log("getting alliance supply");
    const res = await fetch(kyodaiApi + methods.allianceSupply);
    const data = await res.json();
    // const data = JSON.parse(res);
    // console.log(JSON.parse(res.data));
    let supply = data.data.allianceSupply;
    setRyuichiSupply(1111 - supply.ryuSupply);
    setToraSupply(1111 - supply.toraSupply);
    setNobuSupply(1111 - supply.nobuSupply);
  };
  useEffect(() => {
    getSupply();
  }, [ryuichiSupply, toraSupply, nobuSupply]);

  const clans = [
    {
      name: "Ryuichi - kai",
      index: 0,
      logo: ryuichi,
      glitchRef: ryuGlitch.ref,
      supply: ryuichiSupply,
    },
    {
      name: "Torahide - gumi",
      index: 1,
      logo: tora,
      glitchRef: toraGlitch.ref,
      supply: toraSupply,
    },
    {
      name: "Nobu - rengo",
      index: 2,
      logo: nobu,
      glitchRef: nobuGlitch.ref,
      supply: nobuSupply,
    },
  ];
  return (
    <div
      data-augmented-ui="border b-clip tr-clip tl-clip"
      className={`${classes.mintDialog} flex h-4/6 w-11/12 flex-col items-center justify-evenly bg-slate-500 lg:w-3/5`}
    >
      <div className=" flex flex-col items-center justify-center bg-red-400 align-middle">
        <h1 className=" text-xl sm:text-3xl  xl:text-4xl">
          Pledge your Allegiance
        </h1>
      </div>

      <div className="flex h-96  w-full flex-row justify-evenly">
        {clans.map((clan) => (
          <div
            key={clan.name}
            className={`flex w-1/4  flex-col items-center justify-center  `}
          >
            <div
              data-augmented-ui={`tr-clip tl-clip br-clip bl-clip ${
                clanHover === clan.index ? "inlay" : ""
              } ${props.clan === clan.index ? "border" : ""}`}
              className={`
                  ${classes.mintDialog}
                  m-2
                  flex flex-col justify-evenly`}
              onMouseEnter={() => {
                setClanHover(clan.index);
              }}
              onMouseLeave={() => {
                setClanHover(null);
              }}
            >
              {/* ${props.clan === 0 ? shadowXL : ""} 
                ${hoverShadow(props.clan === 0)}  */}
              <button
                className={`
                  flex flex-col items-center justify-center 
                   p-3 text-base sm:text-lg md:text-xl
                    `}
                onClick={() => {
                  props.changeClan(clan.index);
                }}
              >
                <h2
                  className={
                    clanHover === clan.index || props.clan === clan.index
                      ? "text-base md:text-xl"
                      : "text-xs md:text-base"
                  }
                >
                  {clan.name}
                </h2>
                <div className="  relative h-28 w-28 md:h-40 md:w-40 lg:h-40 lg:w-40 xl:h-52 xl:w-52 ">
                  <Image
                    // width={200}
                    // height={200}
                    sizes="(max-width: 768px) 100vw"
                    fill={true}
                    style={{ objectFit: "contain" }}
                    ref={clan.glitchRef}
                    src={clan.logo}
                    alt={clan.name}
                  />
                </div>
                Available spots: {clan.supply ?? "n/a"}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
}

// export const getServerSideProps = async (context) => {
//   console.log("getting alliance supply");
//   const res = await fetch("/api/contracts/kyodai/alliance-supply");
//   const data = res.json();
//   // const data = JSON.parse(res);
//   console.log(JSON.parse(res.data));
//   let supply = data.data.allianceSupply;
// };
export default MintDialog;
