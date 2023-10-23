"use client";

import kyodai1 from "../../../public/assets/kyodai-img/1.png";
import kyodai2 from "../../../public/assets/kyodai-img/2.png";
import kyodai3 from "../../../public/assets/kyodai-img/3.png";
import { useState } from "react";
import Image from "next/image";
import { useGlitch } from "react-powerglitch";
import GlitchImage from "./GlitchImage";

function GlitchPage() {
  const [index, setIndex] = useState(0);
  const glitch1 = useGlitch({
    playMode: "click",
    timing: {
      duration: 1000,
      iterations: 1,
    },
  });
  const glitch2 = useGlitch({
    playMode: "click",
    timing: {
      duration: 1000,
      iterations: 1,
    },
  });
  const glitch3 = useGlitch({
    playMode: "click",
    timing: {
      duration: 1000,
      iterations: 1,
    },
  });

  const handleButtonClick = () => {
    const glitches = [glitch1, glitch2, glitch3];
    const nextIndex = index === 2 ? 0 : index + 1;
    glitches[index].startGlitch();
    glitches[nextIndex].startGlitch();

    // const interval = setInterval(() => {
    //   console.log("start count");
    //   console.log(index);
    //   //   glitch.startGlitch();
    //   glitch1.stopGlitch();
    //   glitch2.stopGlitch();
    // }, 3000);

    if (index === 2) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    console.log(index);
    // return () => clearInterval(interval);
  };

  return (
    <div className="flex flex-col bg-slate-200">
      <button className=" bg-slate-500" onClick={handleButtonClick}>
        Change Image
      </button>
      <div className=" relative flex h-[20vw] w-[20vw]">
        <GlitchImage
          ref={glitch1.ref}
          src={kyodai1}
          alt="cyberkydoai1"
          toggle={index === 0}
        />
        <GlitchImage
          ref={glitch2.ref}
          src={kyodai2}
          alt="cyberkydoai2"
          toggle={index === 1}
        />
        <GlitchImage
          ref={glitch3.ref}
          src={kyodai3}
          alt="cyberkydoai3"
          toggle={index === 2}
        />
      </div>
      <div className="relative  flex h-[20vw] w-[20vw] bg-green-200">
        <GlitchImage
          ref={glitch1.ref}
          src={kyodai2}
          alt="cyberkydoai1"
          toggle={index === 0}
        />
        <GlitchImage
          ref={glitch2.ref}
          src={kyodai3}
          alt="cyberkydoai2"
          toggle={index === 1}
        />
        <GlitchImage
          ref={glitch3.ref}
          src={kyodai1}
          alt="cyberkydoai3"
          toggle={index === 2}
        />
      </div>
      {/* <div
        className={`fixed ${
          index ? " opacity-100" : "opacity-0"
        } transition-opacity ${!index ? "duration-500" : "duration-800"}   ${
          !index ? "ease-in" : "ease-out"
        }`}
      >
        <Image ref={glitch1.ref} src={kyodai1} alt="cyberkyodai1" />
      </div>
      <div
        className={`fixed ${
          !index ? " opacity-100" : "opacity-0"
        } transition-opacity   ${index ? "duration-500" : "duration-800"}  ${
          index ? "ease-in" : "ease-out"
        } `}
      >
        <Image ref={glitch2.ref} src={kyodai2} alt="cyberkyodai2" />
      </div> */}
    </div>
  );
}

export default GlitchPage;
