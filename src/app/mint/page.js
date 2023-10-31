"use client";
import { useState, useEffect } from "react";
import cyberKyodai from "../../../public/contracts/contracts/mainnet/CyberKyodai.sol/CyberKyodai.json";
import CyberFrame from "../ui/cyber-frame-copy.js";
import "./mint-dialog.js";
import MintDialog from "./mint-dialog.js";
import CyberButton from "../ui/cyber-button.js";
import { useGlitch } from "react-powerglitch";
import Image from "next/image.js";
import metamaskLogo from "../../../public/metamask-logo.svg";
import { Web3 } from "web3";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MintedTokenImage from "./minted-image.js";

function MintPage() {
  const web3 = new Web3(
    new Web3.providers.HttpProvider(process.env.INFURA_RPC)
  );
  const contract = new web3.eth.Contract(
    cyberKyodai.abi,
    process.env.KYODAI_GOERLI
  );
  // let currentTxHash = window.localStorage.getItem("mint_tx_hash");
  // let isLoading = window.localStorage.getItem("is_loading");
  const [clan, setClan] = useState(null);
  const [address, setAddress] = useState(null);
  const [txComplete, setTxComplete] = useState(false);
  const [txReceipt, setTxReceipt] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingToast, setLoadingToast] = useState(null);
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
  const chooseClan = (_clan) => {
    setClan(_clan);
  };
  useEffect(() => {
    if (address) {
      connectButtonGlitch.stopGlitch();
      mintButtonGlitch.startGlitch();
    }
    if (!address) {
      mintButtonGlitch.stopGlitch();
      connectButtonGlitch.startGlitch();
    }
  }, [address]);

  // useEffect(() => {
  //   if (currentTxHash !== null && !isLoading) {
  //     getTxReceipt(currentTxHash);
  //   }
  // }, [currentTxHash, isLoading]);

  useEffect(() => {
    console.log("useEffect called in mint page");
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

    // let w3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_RPC));
    // setWeb3(w3);
    // let c = new w3.eth.Contract(cyberKyodai.abi, process.env.KYODAI_GOERLI);
    // setContract(c);

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
        setModalOpen(true);
        console.log("not ethereum network please change");
      } else {
        try {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });
          console.log(account);
          setAddress(account[0]);
        } catch (e) {
          console.error(e);
          if (e.code === 4001) {
            // setModalOpen(true);
            // toast
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

  const mintHandler = async (walletAddress) => {
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
      if (clan === null) {
        console.log(clan);
        toast.warn("Choose a clan to pledge your allegiance to!");
      } else {
        setIsLoading(true);
        let _price = web3.utils.toWei("0.033", "ether");
        console.log("converted ether to wei");
        let encoded = contract.methods.publicMint(clan).encodeABI();
        let tx = {
          from: address,
          to: process.env.KYODAI_GOERLI,
          data: encoded,
          nonce: "0x00",
          value: web3.utils.numberToHex(_price),
        };
        console.log("sending transaction");
        ethereum
          .request({
            method: "eth_sendTransaction",
            params: [tx],
          })
          .then((hash) => {
            // alert("You can now view your transaction with hash: " + hash);
            window.localStorage.setItem("mint_tx_hash", hash);
            getTxReceipt(hash);
          })
          .catch((err) => console.log(err));
      }
    }
  };

  const getTxReceipt = async (txHash) => {
    // TODO rotating sakazuki cup as loading indicator
    const _toast = toast.loading(
      <div>
        <div>Drinking from sakazuki cup...</div>
        <div>
          View on{" "}
          <a
            href={`https://goerli.etherscan.io/tx/${txHash}`}
            className=" text-blue-500 underline"
            target="_blank"
          >
            Etherscan
          </a>
        </div>
      </div>
    );
    setLoadingToast(_toast);
    window.localStorage.setItem("is_loading", true);
    awaitTx(txHash);
  };

  const awaitTx = async (txHash) => {
    let res = await fetch("/api/tx?hash=" + txHash);
    if (res && res.status === 200) {
      const data = await res.json();
      // Transaction went through
      const receipt = data.receipt;
      setTxReceipt(receipt);
    } else {
      // Try again in 3 second
      console.log("Try again in 3 second");
      window.setTimeout(function () {
        awaitTx(txHash);
      }, 3000);
    }
  };
  useEffect(() => {
    if (txReceipt) {
      if (txReceipt.status === "0x0") {
        toast.update(loadingToast, {
          render: "Transaction failed! Please try again...",
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
      } else {
        toast.update(loadingToast, {
          render: "All is good",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
      }
      // TODO display minted kyodai
      setTxComplete(true);
      setIsLoading(false);
      window.localStorage.removeItem("is_loading");
    }
  }, [txReceipt]);
  return (
    <main>
      <div className="flex h-[90vh] flex-col items-center justify-center bg-fuchsia-400">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          rtl={false}
          theme="light"
          hideProgressBar={true}
        />
        {/* modal to show the minted kyodai image */}
        <MintedTokenImage
          show={txComplete}
          // show={true}
          contract={contract}
          address={address}
          // address="0x7373F3D02eA3B4088d7f195d59FBF940d3757164"
        />
        <MintDialog changeClan={chooseClan} clan={clan} />
        <div
          className={`${
            address ? "" : "hidden"
          } flex  h-[12vh] w-[35vw] flex-col justify-between  md:w-[20vw] lg:w-[15vw]`}
        >
          <button
            ref={mintButtonGlitch.ref}
            disabled={modalOpen || isLoading ? true : false}
            data-augmented-ui=" tr-clip tl-clip"
            className=" flex  h-[5vh]  w-[35vw]  flex-col items-center justify-center bg-red-500 hover:bg-red-700 md:w-[20vw] lg:w-[15vw]"
            onClick={() => {
              mintHandler(address);
              // getTxReceipt(
              //   "0xff17afb6d1ad29747efb6ccb4b8ab1054def460963a898a0b4d2a9d19c50cc1e"
              // );
            }}
          >
            Mint
          </button>
          {address ? (
            <div className="flex h-[5vh] flex-row items-center justify-center bg-purple-400">
              <Image src={metamaskLogo} alt="metamask.svg" height={20} />
              <div className="mx-2">
                {`${address.substring(0, 6)}...${address.substring(38, 42)}`}
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div
          className={`${
            address ? "hidden" : ""
          } flex  h-[12vh] w-[35vw] flex-col justify-between  md:w-[20vw] lg:w-[15vw]`}
        >
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
          {address ? (
            <div className=" hidden h-[5vh] flex-row items-center justify-center ">
              <div className="mx-2">
                {`${address.substring(0, 6)}...${address.substring(38, 42)}`}
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
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
