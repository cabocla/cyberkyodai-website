"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import twitterLogo from "../../../public/twitter-logo.svg";
import discordLogo from "../../../public/discord-logo.svg";
import cyberKyodaiLogo from "../../../public/assets/images/CYBERKYODAI LOGO.png";

const menuItems = [
  // { title: "MINT", url: "/mint" },
  { title: "HOME", url: "home" },
  { title: "ABOUT", url: "about" },
  { title: "CLAN", url: "clans" },
  { title: "TRAIN", url: "train" },
  { title: "GIGS", url: "gigs" },
  { title: "FIGHT", url: "fight" },
  { title: "RECRUIT", url: "recruit" },
  { title: "SAKAZUKI", url: "sakazuki" },
];
function scrollHandler(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
function MainNavigation() {
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="sticky top-0 z-30 w-full">
      <nav className="  w-vw flex h-[8vh] flex-row items-center justify-between bg-black">
        <div className="ml-5 flex w-1/2  sm:w-1/4 md:w-1/6  xl:w-1/12">
          <Link href="/">
            <Image
              src={cyberKyodaiLogo}
              alt="Cyber Kyodai"
              style={{ objectFit: "cover" }}
            />
          </Link>
        </div>

        {/* <div className="  hidden flex-row justify-evenly bg-orange-100 sm:flex">
          {menuItems.map((item) => (
            <div key={item.title} className="mx-2">
              <Link scroll={false} href={item.url}>
                {item.title}
              </Link>
            </div>
          ))}
        </div> */}
        <div className="flex flex-row">
          <div className="  hidden flex-row  items-center sm:flex">
            <div className="mx-2 flex">
              <div>
                <Image
                  src={twitterLogo}
                  alt="twitter.svg"
                  height={25}
                  width={25}
                />
              </div>
              <h2 className="ml-2  ">TWITTER</h2>
            </div>
            <div className="mx-2 flex">
              <div>
                <Image
                  src={discordLogo}
                  alt="discord.svg"
                  height={25}
                  width={25}
                />
              </div>
              <h2 className="ml-2  ">DISCORD</h2>
            </div>
            {/* <h2 className="mx-5">twitter discord</h2> */}
          </div>
          <div className="mr-2 flex-col">
            <button
              className=" flex  rounded-lg p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {navbar && (
          <div className="fixed right-0 top-[8vh] w-full flex-wrap bg-slate-600 md:h-full   md:w-1/4  ">
            <ul>
              {menuItems.map((item) => (
                <li key={item.title}>
                  <div className="flex justify-end hover:bg-slate-400">
                    <button
                      onClick={() => {
                        setNavbar(false);
                        scrollHandler(item.url);
                      }}
                      className=" flex h-full w-full flex-row justify-end"
                    >
                      <div className="my-3 mr-10 ">{item.title}</div>
                    </button>
                  </div>
                </li>
              ))}
              <div className=" flex h-full w-full flex-col place-items-end justify-evenly  md:hidden">
                <div className="flex w-full justify-end hover:bg-slate-400">
                  <button
                    onClick={() => {
                      // open twitter
                    }}
                    className=" flex h-full w-full flex-row justify-end"
                  >
                    <div className="my-3 mr-5 flex flex-row">
                      <p className="mr-2 flex ">TWITTER</p>
                      <div>
                        <Image
                          src={twitterLogo}
                          alt="twitter.svg"
                          height={25}
                          width={25}
                        />
                      </div>
                    </div>
                  </button>
                </div>
                <div className=" flex w-full  justify-end hover:bg-slate-400">
                  <button
                    onClick={() => {
                      // open twitter
                    }}
                    className=" flex h-full w-full flex-row justify-end"
                  >
                    <div className=" my-3 mr-5 flex ">
                      <p className="mr-2 flex ">DISCORD</p>
                      <div>
                        <Image
                          src={discordLogo}
                          alt="discord.svg"
                          height={25}
                          width={25}
                        />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default MainNavigation;
