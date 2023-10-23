"use client";
import { useState, useEffect } from "react";
import cyberKyodai from "../../../public/contracts/contracts/mainnet/CyberKyodai.sol/CyberKyodai.json";
import CyberFrame from "../ui/cyber-frame-copy.js";
import CyberButton from "../ui/cyber-button.js";
import { useGlitch } from "react-powerglitch";
import Image from "next/image.js";
import metamaskLogo from "../../../public/metamask-logo.svg";
import GameScreen from "./underworld.js";

let Web3 = require("web3");

function MintPage() {
  const [clan, setClan] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [address, setAddress] = useState(null);
  const glitchConfig = {
    playMode: "always",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 4000,
    },
    glitchTimeSpan: {
      start: 0.5,
      end: 0.8,
    },
    shake: {
      velocity: 10,
      amplitudeX: 0,
      amplitudeY: 0,
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
  const connectButtonGlitch = useGlitch(glitchConfig);
  const mintButtonGlitch = useGlitch(glitchConfig);

  // const [walletAddy, setWalletAddy] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (address) {
      connectButtonGlitch.stopGlitch();
      mintButtonGlitch.startGlitch();
    }
    if (!address) {
      mintButtonGlitch.stopGlitch();
      connectButtonGlitch.startGlitch();
    }
  }, [address, connectButtonGlitch, mintButtonGlitch]);
  useEffect(() => {
    if (window.ethereum) {
      // window.ethereum.on("chainChanged", (chain) => {
      //   console.log(`chain changed to: ${chain}`);
      //   console.log(chain);
      //   if (chain !== 0x5) {
      //     console.log("not goerli chain");
      //   }
      // });

      if (address) {
        window.ethereum.on("accountsChanged", (accounts) => {
          console.log("account changed");
          setAddress(accounts[0]);

          // window.location.reload();
          // ethereum
          //   .request({ method: "eth_requestAccounts" })
          //   .then((accounts) => {
          //     setAddress(accounts[0]);
          //   })
          //   .catch((err) => console.log(err));
        });
      }
    }

    let w3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_RPC));
    setWeb3(w3);
    let c = new w3.eth.Contract(cyberKyodai.abi, process.env.KYODAI_GOERLI);
    setContract(c);

    window.ethereum
      ? ethereum
          .request({ method: "eth_requestAccounts" })
          .then((accounts) => {
            setAddress(accounts[0]);
          })
          .catch((err) => console.log(err))
      : console.log("Please install MetaMask");
  }, [address]);

  const connectHandler = async () => {
    // web3.JS to connect wallet
    if (window.ethereum) {
      if (
        window.ethereum.networkVersion !== "5" // TODO change to 1 for mainnet
      ) {
        // TODO modal open to ask for change network
        setModalOpen(true);
        console.log("not ethereum network please change");
      } else {
        try {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });
          console.log(account);
          setAddress(account[0]);
          // setWalletAddy(account);

          // console.log(process.env.KYODAI_GOERLI);
          // let c = new w3.eth.Contract(
          //   cyberKyodai.abi,
          //   process.env.KYODAI_GOERLI
          // );
          // setContract(c);
        } catch (e) {
          console.error(e);
          if (e.code === 4001) {
            // setModalOpen(true);
          }
        }
      }
    } else {
      console.log("no wallet exist");
      setModalOpen(true);
    }
  };
  const switchNetworkHandler = async () => {
    console.log("switch network");
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x5" }], // TODO chainId must be in hexadecimal numbers. 0x1 for eth mainnet. 0x5 for goerli.
      });
    } catch (error) {
      console.error(error);
    }
    setModalOpen(false);
  };

  const mintHandler = (walletAddress) => {
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
    } else {
      contract.methods
        .totalSupply()
        .call()
        .then((_supply) => {
          console.log(_supply);
        })
        .catch((err) => console.log(err));
      console.log(address);
      // let _price = web3.utils.toWei("0.033");
      // let encoded = contract.methods.publicMint(clan).encodeABI();

      // let tx = {
      //   from: address,
      //   to: process.env.KYODAI_GOERLI,
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
    }
  };

  return (
    <main>
      <div className="flex h-[90vh] flex-col items-center justify-center bg-fuchsia-400">
        <GameScreen
          address={address}
          hidden={address ? false : true}
          contract={contract}
          web3={web3}
        />
        <button
          disabled={modalOpen ? true : false}
          ref={connectButtonGlitch.ref}
          className={`${
            address ? "hidden" : ""
          } flex h-[5vh] w-[35vw] flex-col items-center justify-center bg-red-500 hover:bg-red-700 md:w-[20vw] lg:w-[15vw]`}
          data-augmented-ui=" tr-clip tl-clip"
          onClick={() => {
            connectHandler();
          }}
        >
          Connect wallet
        </button>
        {modalOpen ? (
          <div className="absolute h-[90vh] w-full bg-slate-600 bg-opacity-50">
            <div className=" absolute right-1/4 top-1/4  flex h-1/2 w-1/2 flex-col items-center justify-center lg:right-[37.5vw] lg:h-2/6  lg:w-1/4 ">
              <CyberFrame
                reverse="true"
                frameColor=" bg-yellow-500"
                // bodyColor="bg-yellow-500"
              >
                <div className=" z-10 mx-4 flex h-full flex-1 flex-col">
                  <div className="flex flex-1 flex-col">
                    <div>
                      <button
                        onClick={() => {
                          setModalOpen(false);
                        }}
                      >
                        X
                      </button>
                    </div>
                    <div className=" flex h-full flex-col items-center justify-evenly">
                      {window.ethereum ? (
                        <>
                          <div>Please switch to Mainnet</div>
                          <CyberButton
                            onClick={switchNetworkHandler}
                            title="SWITCH"
                          />
                          {/* <button onClick={switchNetworkHandler}>SWITCH</button> */}
                        </>
                      ) : (
                        <>
                          <div className="relative h-1/2 w-1/2 lg:w-1/4">
                            <Image
                              src={metamaskLogo}
                              alt="metamask.svg"
                              fill={true}
                              style={{ objectFit: "contain" }}
                            />
                          </div>
                          <div>
                            Metamask not installed. <br /> Please install{" "}
                            {
                              <a
                                className=" underline"
                                target="_blank"
                                href="https://metamask.io/download/"
                              >
                                here
                              </a>
                            }
                            .
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => {
                    setModalOpen(false);
                  }}
                  className="absolute z-0 h-full w-full "
                ></div>
              </CyberFrame>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </main>
  );
}

export default MintPage;
