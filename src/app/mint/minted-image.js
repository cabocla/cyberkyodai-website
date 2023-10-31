import { useEffect, useState } from "react";
import { kyodaiApi, methods } from "../api/contracts/methods";
import { decodeBase64, toUtf8String } from "ethers";
import Image from "next/image";
import openseaLogo from "../../../public/opensea-logo.svg";
import blurLogo from "../../../public/blur-logo.jpg";

export default function MintedTokenImage(props) {
  const contract = props.contract;
  const address = props.address;
  const [eventLog, setEventLog] = useState(null);
  const [metadatas, setMetadatas] = useState([]);
  const [kyodaiId, setKyodaiId] = useState(null);

  const getEvents = async () => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_URL +
        kyodaiApi +
        methods.eventsMint +
        "?address=" +
        address
    );
    const data = await res.json();
    const tokenIds = data.data.events.map((e) => e.returnValues.tokenId);
    setEventLog(tokenIds);
    return tokenIds;
  };
  const getImage = async () => {
    const tokenIds = await getEvents();
    let tokenURIs = [];
    console.log(tokenIds);
    const amount = tokenIds.length > 1 ? 2 : 1;
    for (let i = 0; i < amount; i++) {
      const index = tokenIds.length - (1 + i);
      // const index = i;
      setKyodaiId(tokenIds[index]);
      const res = await fetch(
        kyodaiApi + methods.tokenURI + "?id=" + tokenIds[index]
      );
      const tokenURI = await res.json();
      const encodedMetadata = tokenURI.data.tokenURI;
      const metadata = decodeBase64(encodedMetadata.split("base64,")[1]);
      const text = toUtf8String(metadata);
      tokenURIs.push(JSON.parse(text));
    }
    setMetadatas(tokenURIs);
  };

  useEffect(() => {
    window.localStorage.removeItem("mint_tx_hash");
    window.localStorage.removeItem("is_loading");

    if (eventLog === null && address !== null) {
      getImage();
    }
  }, [address, eventLog]);

  const marketplaceButtons = () => {
    const marketplaces = [
      {
        title: "View on OpenSea",
        url: "https://testnets.opensea.io/assets/goerli/0xff519d31bfc1b0908e36047b16b3dd9c5c521e7c/",
        bgColor: "bg-blue-500",
        textColor: "text-white",
        logo: openseaLogo,
      },
      {
        title: "View on Blur",
        url: "https://testnets.opensea.io/assets/goerli/0xff519d31bfc1b0908e36047b16b3dd9c5c521e7c/",
        bgColor: "bg-black",
        textColor: "text-orange-500",
        logo: blurLogo,
      },
    ];
    return marketplaces.map((market) => {
      return (
        <div
          key={market.title}
          data-augmented-ui="tr-clip  bl-clip "
          className={`${market.bgColor} ${market.textColor}   ${
            !props.show ? "hidden" : ""
          }  m-2  w-1/2  md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 `}
        >
          <a
            href={market.url + (kyodaiId ?? "")}
            target="blank"
            className="flex h-full w-full flex-row items-center justify-center p-2"
          >
            <Image
              src={market.logo}
              alt={market.title}
              height={50}
              width={50}
              style={{ borderRadius: "50%" }}
            />
            <div className=" px-5">{market.title}</div>
          </a>
        </div>
      );
    });
  };
  return (
    <div
      className={`${props.show ? "opacity-100" : "opacity-0"} ${
        props.show ? "z-10" : "z-0"
      } duration-2000  absolute h-[90vh] w-full items-center bg-slate-600 bg-opacity-50 transition-all`}
    >
      <div className=" absolute  flex h-full w-full flex-col bg-blue-400 md:top-20 md:h-4/5  ">
        <div className="flex h-20 w-full items-center justify-center bg-fuchsia-300 md:h-1/5">
          <h2>Welcome to the family, kozo...</h2>
        </div>
        <div className="relative flex h-[80vh] w-full flex-col items-center justify-evenly bg-red-300 md:h-3/5 md:flex-row">
          <div></div>

          {metadatas.map((metadata) => {
            return (
              <div
                key={metadata.name}
                data-augmented-ui="tr-clip tl-clip br-clip bl-clip "
                className={`${metadatas.length !== 0 ? "" : hidden}`}
              >
                <div className="relative flex h-[30vh] w-[30vh] p-2 lg:h-[40vh] lg:w-[40vh] ">
                  <Image
                    src={metadata.image_data}
                    alt={metadata.name}
                    // width={100}
                    // height={100}
                    fill={true}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            );
          })}
          <div
            className={`flex h-[30vh] w-[30vh] items-center justify-center p-2 lg:h-[40vh] lg:w-[40vh] ${
              metadatas.length !== 0 ? "hidden" : ""
            }`}
          >
            Loading...
          </div>

          <div></div>
        </div>
        <div className="flex h-20 flex-row items-center justify-center md:h-1/5">
          {marketplaceButtons()}
        </div>
      </div>
    </div>
  );
}
