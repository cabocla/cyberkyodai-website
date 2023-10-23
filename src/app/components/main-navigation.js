"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import twitterLogo from "../../../public/twitter-logo.svg";
import discordLogo from "../../../public/discord-logo.svg";

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
      <nav className="  w-vw flex h-[8vh] flex-row items-center justify-between bg-slate-300">
        <div className="ml-5 flex  bg-purple-200 ">
          <Link href="/">
            <h1 className="mx-5 ">Cyber Kyodai</h1>
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
          <div className="  flex flex-row items-center bg-green-200">
            <div className="mx-2 flex">
              <div>
                <Image
                  src={twitterLogo}
                  alt="twitter.svg"
                  height={25}
                  width={25}
                />
              </div>
              <h2 className="ml-2 hidden sm:flex ">TWITTER</h2>
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
              <h2 className="ml-2  hidden sm:flex">DISCORD</h2>
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
          <div className="fixed right-0 top-[8vh] w-full flex-wrap   bg-gray-400  ">
            <ul>
              {menuItems.map((item) => (
                <li key={item.title}>
                  <div className="flex justify-end">
                    <button
                      onClick={() => {
                        setNavbar(false);
                        scrollHandler(item.url);
                      }}
                      className="m-2 flex flex-row justify-end"
                    >
                      {item.title}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default MainNavigation;
