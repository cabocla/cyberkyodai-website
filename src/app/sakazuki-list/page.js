"use client";
import { useEffect, useState } from "react";
import classes from "../mint/mint-dialog.module.css";
import "/node_modules/augmented-ui/augmented-ui.min.css";
import WhitelistedDialog from "./whitelisted-dialog";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function WalletChecker() {
  const [address, setAddress] = useState(null);
  const [whitelisted, setWhitelisted] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const connectHandler = async () => {
    // web3.JS to connect wallet
    setIsLoading(true);

    if (window.ethereum) {
      try {
        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(account);
        setAddress(account[0]);
        if (address !== null) {
          window.setTimeout(function () {
            getWhitelistStatus();
          }, 2000);
        }
      } catch (e) {
        console.error(e);
        if (e.code === 4001) {
          // setModalOpen(true);
          // toast
        }
      }
    } else {
      window.open("https://metamask.io/download/", "blank");
    }
    setIsLoading(false);
  };

  // useEffect(() => {
  //   if (address && whitelisted === null) {
  //     // check whitelist
  //     setIsLoading(false);
  //   }
  // }, [address, whitelisted]);

  const handleSubmit = async (event) => {
    console.log("checking whitelist");
    event.preventDefault();
    if (
      address === "" ||
      address === null ||
      address.length !== 42 ||
      address.substring(0, 2) !== "0x"
    ) {
      toast.error("Invalid wallet address!", {
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    } else {
      getWhitelistStatus();
    }
  };

  const getWhitelistStatus = async () => {
    setIsLoading(true);

    const res = await fetch(
      "api/whitelist/check?address=" + address.toLowerCase()
    );
    const data = await res.json();
    const whitelisted = data.data;
    console.log(whitelisted);
    setWhitelisted(whitelisted);
    setIsLoading(false);
  };

  const handleReset = () => {
    setWhitelisted(null);
    setAddress(null);
    setIsLoading(false);
  };

  return (
    <main>
      <div className=" flex h-[90vh] flex-col items-center justify-evenly">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          rtl={false}
          theme="light"
          hideProgressBar={true}
        />
        <div
          data-augmented-ui="border b-clip tr-clip tl-clip"
          className={`${classes.mintDialog} flex h-4/6 w-11/12 flex-col items-center justify-evenly bg-slate-500 lg:w-3/5`}
        >
          <div className=" flex flex-col items-center justify-center bg-red-400 align-middle">
            <h1 className=" text-xl sm:text-3xl  xl:text-4xl">Sakazuki List</h1>
          </div>

          {address && whitelisted !== null ? (
            <WhitelistedDialog
              handleReset={handleReset}
              whitelisted={whitelisted}
            />
          ) : (
            <div className="flex h-96  w-full flex-col items-center justify-center bg-red-400">
              <div className="flex h-16 w-7/12 flex-row p-2">
                <div className="flex w-full flex-row justify-between ">
                  <form
                    className="flex w-full flex-row"
                    onSubmit={(e) => handleSubmit(e)}
                  >
                    <div className=" ml-5 flex  w-28 items-center justify-center opacity-0">
                      <button>Check</button>
                    </div>
                    <div
                      data-augmented-ui="br-clip tl-clip"
                      className="flex w-full bg-white p-1"
                    >
                      <input
                        className="flex w-full px-5 focus:outline-none"
                        placeholder=" Enter Wallet Address (0x....)"
                        type="text"
                        value={address ?? ""}
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                      />
                    </div>
                    <div>
                      <button
                        data-augmented-ui="tr-clip bl-clip"
                        className=" ml-5 flex  w-28 items-center justify-center bg-blue-300"
                        type="submit"
                      >
                        Check
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="p-2">or</div>
              <div
                className={`${
                  address && whitelisted !== null ? "hidden" : ""
                } flex  h-[12vh] w-[35vw] flex-col justify-between  md:w-[20vw] lg:w-[15vw]`}
              >
                <button
                  // disabled={modalOpen ? true : false}
                  // ref={connectButtonGlitch.ref}
                  className={`${
                    address && whitelisted !== null ? "hidden" : ""
                  } flex h-[5vh] w-[35vw] flex-col items-center justify-center bg-red-500 ${
                    isLoading ? "" : "hover:bg-red-700"
                  } md:w-[20vw] lg:w-[15vw]`}
                  data-augmented-ui=" tr-clip tl-clip"
                  disabled={isLoading}
                  onClick={connectHandler}
                >
                  {isLoading ? "Loading..." : "Connect wallet"}
                </button>
              </div>
            </div>
          )}

          <div></div>
        </div>
      </div>
    </main>
  );
}

export default WalletChecker;
