import attributeNames from "./attributes";

export async function GET(req) {
  const url = req.url.split("metadata/")[1];
  const params = url.split("?trait=");
  const id = params[0];
  const traitHash = params[1];
  const description =
    "Decades after oppresion from the government, a new era dawns as the Kyodais resurges to seize control over the enigmatic Neo Tokyo underworld. Reach supremacy through competitive and strategic gameplay. All Kyodais are fully generated and encoded on-chain.";

  if (traitHash === "0") {
    return new Response(
      JSON.stringify({
        name: `CyberKyodai #${id}`,
        description: description,
        tokenId: id,
        image: `https://cyberkyodai.com/api/png/?trait=${traitHash}`,
        attributes: [{ trait_type: "Status", value: "Uninitiated" }],
      }),
      {
        status: 200,
      }
    );
  }

  // TODO retrieve trait hash from contract and build the metadata based on trait hash
  // if (does not exist) {
  //   return new Response(JSON.stringify({ message: "Kyodai not found" }), {
  //     status: 200,
  //   });
  // }
  // if (not revealed) {
  //   return new Response(
  //     JSON.stringify({
  //       name: `DNA #${id}`,
  //       description:
  //         "3,333 Genesis Kaiju Kingz created by Augminted Labs to protect the metaverse. The community is all about growth and providing a place for the future of web3 to learn, build, and conquer. Join the Kingz and live forever as a legend. 6666 babies to accompany them.",
  //       tokenId: id,
  //       image:
  //         "https://kaijukingz.mypinata.cloud/ipfs/QmXTgM2DBRGYunHvVz5Jn4AvKQLYiPcthwf5CN4KqcT9kM",
  //       external_url: "https://twitter.com/KaijuKingz",
  //       attributes: [{ trait_type: "origin", value: "DNA" }],
  //     }),
  //     {
  //       status: 200,
  //     }
  //   );
  // }

  for (let i = 0; i < 8; i++) {
    console.log(getLast8Bits(traitHash >> (i * 8)));
  }

  let attributes = new Array(7);
  function getLast8Bits(x) {
    // Example, last 3 bits
    // x        = 1101 = 13
    // mask     = 0111 = 7
    // x & mask = 0101 = 5
    let mask = (1 << 8) - 1;
    // console.log(x & mask);
    return x & mask;
  }
  attributes[0] = {
    trait_type: "Alliance",
    value: attributeNames[0][getLast8Bits(traitHash)],
  };
  attributes[1] = {
    trait_type: "Background",
    value: attributeNames[1][getLast8Bits(traitHash >> 8)],
  };
  attributes[2] = {
    trait_type: "Earring",
    value: attributeNames[2][getLast8Bits(traitHash >> 24)],
  };
  attributes[3] = {
    trait_type: "Attire",
    value: attributeNames[3][getLast8Bits(traitHash >> 32)],
  };
  attributes[4] = {
    trait_type: "Face",
    value: attributeNames[4][getLast8Bits(traitHash >> 40)],
  };
  attributes[5] = {
    trait_type: "Head",
    value: attributeNames[5][getLast8Bits(traitHash >> 48)],
  };
  attributes[6] = {
    trait_type: "Cyberware",
    value: attributeNames[6][getLast8Bits(traitHash >> 56)],
  };

  return new Response(
    JSON.stringify({
      name: `CyberKyodai #${id}`,
      description: description,
      tokenId: id,
      image: `https://cyberkyodai.com/api/png/?trait=${traitHash}`,
      attributes: attributes,
    }),
    {
      status: 200,
    }
  );
}
