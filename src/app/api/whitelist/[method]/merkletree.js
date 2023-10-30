import { whitelist } from "./whitelist-addresses";

const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");

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
