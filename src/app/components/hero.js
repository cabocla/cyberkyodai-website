import Image from "next/image";
import CyberButton from "../ui/cyber-button";
import PageContent from "./page-content";
import arrowDown from "../../../public/double-arrow-down.svg";
import { useGlitch } from "react-powerglitch";

function Hero() {
  const glitchConfig = {
    playMode: "always",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 3000,
    },
    glitchTimeSpan: {
      start: 0,
      end: 0.5,
    },
    shake: {
      velocity: 10,
      amplitudeX: 0.1,
      amplitudeY: 0.7,
    },
    slice: {
      count: 10,
      velocity: 15,
      minHeight: 0.02,
      maxHeight: 0.1,
      hueRotate: true,
    },
    pulse: false,
  };

  const glitch = useGlitch(glitchConfig);

  function scrollHandler() {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <PageContent id="home">
      <div className=" flex h-full w-full flex-col items-center justify-evenly">
        <div className="flex w-full flex-col items-center">
          <h1>Cyber Kyodai</h1>
          <h2>DUTY AND HONOR</h2>
        </div>
        <div className="flex h-1/4 w-full flex-col items-center justify-evenly bg-slate-400">
          <div className="flex  w-1/2 flex-col items-center justify-evenly lg:flex-row ">
            {/* <div className="m-1">
              <CyberButton title="MINT" /> 
            </div> */}
            <div className="m-1">
              <CyberButton title="Twitter" />
            </div>
            <div className="m-1">
              <CyberButton title="Litepaper" />
            </div>
          </div>
          <div ref={glitch.ref}>
            <button onClick={scrollHandler}>
              <Image
                src={arrowDown}
                alt="arrow-down.svg"
                height={30}
                width={30}
              />
            </button>
          </div>
        </div>
      </div>
    </PageContent>
  );
}

export default Hero;
