import Image from "next/image";
import twitterLogo from "../../../public/twitter-logo.svg";
import discordLogo from "../../../public/discord-logo.svg";

function Footer() {
  return (
    <footer className=" mx-10 h-[50vh] lg:mx-20 ">
      <div className=" flex h-full flex-col  items-center justify-evenly bg-green-200 sm:items-start   ">
        <div className="flex  bg-slate-500">
          <div className="m-2 flex flex-row justify-end">
            <div className=" flex">
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
          </div>
          <div className="m-2 flex flex-row justify-end">
            <div className=" flex">
              <div>
                <Image
                  src={discordLogo}
                  alt="discord.svg"
                  height={25}
                  width={25}
                />
              </div>
              <h2 className="ml-2 ">DISCORD</h2>
            </div>
          </div>
        </div>
        <div className="flex  bg-slate-400">
          <h1>Cyber Kyodai</h1>
        </div>

        <div className="flex  bg-slate-500">
          <p>© 2023 Cyber Kyodai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
