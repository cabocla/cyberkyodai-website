const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");

const whitelist = [
  // all must be lowercase
  // root --> 0x9141f53c50ffd154c642a166131bfc9c9621ae56727f40b009b1eb1eadb87cbe
  "0x29f7e931b7a3542c6a7cb19e946e9003b51acb96",
  "0x8c76a008110d7cedafcca1c69027c3e0318ce5fd",
  "0xfc4d76de4166f250f7fb4c55f827466e22805e15",
  "0x27494cccaeb49017d6ef73b41051586d356e1a5b",
  "0x29d07b6a08ecb7eba9bc0a517b2208aefeb06791",
  "0xd81b3991456991a016521f0bf429203926227c35",
  "0xfcd27b2eea1528480477a16a7a5a80f047a22801",
];

const leaves = whitelist.map((addr) => keccak256(addr));
const merkleTree = new MerkleTree(leaves, keccak256, { sortPairs: true });
// const rootHash = merkleTree.getRoot().toString("hex");
// console.log(`whitelist merkle root: 0x${rootHash}`);
// whitelist.forEach((address) => {
//   const proof = merkleTree.getHexProof(keccak256(address));
//   console.log(`address: ${address} Proof ${proof}`);
// });

function checkWhitelist(address) {
  return whitelist.includes(address);
}

function getMerkleRoot() {
  const rootHash = merkleTree.getRoot().toString("hex");
  return `whitelist merkle root: 0x${rootHash}`;
}

function getMerkleProof(address) {
  return merkleTree.getHexProof(keccak256(address));
}

export { getMerkleRoot, getMerkleProof, checkWhitelist };
