import { useGlitch } from "react-powerglitch";
import { useEffect, useState } from "react";

import GlitchImage from "../test-chatgpt/GlitchImage";
import GlitchImageWrapper from "../test-chatgpt/GlitchImageWrapper";

function CarouselTest(props) {
  const images = props.images;
  const glitchConfig = {
    playMode: "click",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 1000,
    },

    shake: {
      velocity: 15,
      amplitudeX: 0.2,
      amplitudeY: 0.2,
    },
    slice: {
      count: 20,
      velocity: 15,
      minHeight: 0.02,
      maxHeight: 0.15,
      hueRotate: true,
    },
    pulse: false,
  };

  const glitch1 = useGlitch(glitchConfig);
  const glitch2 = useGlitch(glitchConfig);
  const glitch3 = useGlitch(glitchConfig);

  const glitch4 = useGlitch(glitchConfig);
  const glitch5 = useGlitch(glitchConfig);
  const glitch6 = useGlitch(glitchConfig);

  const glitch7 = useGlitch(glitchConfig);
  const glitch8 = useGlitch(glitchConfig);
  const glitch9 = useGlitch(glitchConfig);

  const glitch10 = useGlitch(glitchConfig);
  const glitch11 = useGlitch(glitchConfig);
  const glitch12 = useGlitch(glitchConfig);

  const glitch13 = useGlitch(glitchConfig);
  const glitch14 = useGlitch(glitchConfig);
  const glitch15 = useGlitch(glitchConfig);

  const glitch16 = useGlitch(glitchConfig);
  const glitch17 = useGlitch(glitchConfig);
  const glitch18 = useGlitch(glitchConfig);

  const glitch19 = useGlitch(glitchConfig);
  const glitch20 = useGlitch(glitchConfig);
  const glitch21 = useGlitch(glitchConfig);

  const [index, setIndex] = useState(0); // 0 - 6
  const [lapIndex, setlapIndex] = useState(0); // 0 - 2
  const [toggleIndex, setToggleIndex] = useState([
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
  ]);

  useEffect(() => {
    const glitches = [
      glitch1,
      glitch2,
      glitch3,
      glitch4,
      glitch5,
      glitch6,
      glitch7,
      glitch8,
      glitch9,
      glitch10,
      glitch11,
      glitch12,
      glitch13,
      glitch14,
      glitch15,
      glitch16,
      glitch17,
      glitch18,
      glitch19,
      glitch20,
      glitch21,
    ];

    const interval = setInterval(() => {
      const currentIndex = index * 3 + lapIndex;
      const nextIndex = lapIndex === 2 ? currentIndex - 2 : currentIndex + 1;

      glitches[currentIndex].startGlitch();
      glitches[nextIndex].startGlitch();
      setToggleIndex(
        toggleIndex.map((val, i) => {
          if (i === currentIndex || i === nextIndex) {
            return !val;
          } else {
            return val;
          }
        })
      );
      if (index === 6) {
        if (lapIndex === 2) {
          setlapIndex(0);
        } else {
          setlapIndex(lapIndex + 1);
        }
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [
    index,
    lapIndex,
    toggleIndex,
    glitch1,
    glitch2,
    glitch3,
    glitch4,
    glitch5,
    glitch6,
    glitch7,
    glitch8,
    glitch9,
    glitch10,
    glitch11,
    glitch12,
    glitch13,
    glitch14,
    glitch15,
    glitch16,
    glitch17,
    glitch18,
    glitch19,
    glitch20,
    glitch21,
  ]);

  return (
    <div className=" flex flex-row items-center justify-center bg-orange-300 lg:m-10 ">
      <div className="  flex flex-col items-center justify-center bg-green-200">
        <GlitchImageWrapper>
          <GlitchImage
            ref={glitch1.ref}
            src={images[0]}
            alt="cyber kyodai 1"
            toggle={toggleIndex[0]}
          />
          <GlitchImage
            ref={glitch2.ref}
            src={images[1]}
            alt="cyber kyodai 2"
            toggle={toggleIndex[1]}
          />
          <GlitchImage
            ref={glitch3.ref}
            src={images[2]}
            alt="cyber kyodai 3"
            toggle={toggleIndex[2]}
          />
        </GlitchImageWrapper>
        <GlitchImageWrapper>
          <GlitchImage
            ref={glitch13.ref}
            src={images[8]}
            alt="cyber kyodai 1"
            toggle={toggleIndex[12]}
          />
          <GlitchImage
            ref={glitch14.ref}
            src={images[7]}
            alt="cyber kyodai 2"
            toggle={toggleIndex[13]}
          />
          <GlitchImage
            ref={glitch15.ref}
            src={images[6]}
            alt="cyber kyodai 3"
            toggle={toggleIndex[14]}
          />
        </GlitchImageWrapper>
      </div>
      <div className="flex flex-col items-center justify-end bg-green-300">
        <GlitchImageWrapper>
          <GlitchImage
            ref={glitch16.ref}
            src={images[5]}
            alt="cyber kyodai 1"
            toggle={toggleIndex[15]}
          />
          <GlitchImage
            ref={glitch17.ref}
            src={images[4]}
            alt="cyber kyodai 2"
            toggle={toggleIndex[16]}
          />
          <GlitchImage
            ref={glitch18.ref}
            src={images[3]}
            alt="cyber kyodai 3"
            toggle={toggleIndex[17]}
          />
        </GlitchImageWrapper>
        <GlitchImageWrapper>
          <GlitchImage
            ref={glitch4.ref}
            src={images[15]}
            alt="cyber kyodai 1"
            toggle={toggleIndex[3]}
          />
          <GlitchImage
            ref={glitch5.ref}
            src={images[16]}
            alt="cyber kyodai 2"
            toggle={toggleIndex[4]}
          />
          <GlitchImage
            ref={glitch6.ref}
            src={images[17]}
            alt="cyber kyodai 3"
            toggle={toggleIndex[5]}
          />
        </GlitchImageWrapper>
        <GlitchImageWrapper>
          <GlitchImage
            ref={glitch7.ref}
            src={images[18]}
            alt="cyber kyodai 1"
            toggle={toggleIndex[6]}
          />
          <GlitchImage
            ref={glitch8.ref}
            src={images[19]}
            alt="cyber kyodai 2"
            toggle={toggleIndex[7]}
          />
          <GlitchImage
            ref={glitch9.ref}
            src={images[20]}
            alt="cyber kyodai 3"
            toggle={toggleIndex[8]}
          />
        </GlitchImageWrapper>
      </div>
      <div className="  flex  flex-col items-center bg-green-400">
        <GlitchImageWrapper>
          <GlitchImage
            ref={glitch10.ref}
            src={images[9]}
            alt="cyber kyodai 1"
            toggle={toggleIndex[9]}
          />
          <GlitchImage
            ref={glitch11.ref}
            src={images[10]}
            alt="cyber kyodai 2"
            toggle={toggleIndex[10]}
          />
          <GlitchImage
            ref={glitch12.ref}
            src={images[11]}
            alt="cyber kyodai 3"
            toggle={toggleIndex[11]}
          />
        </GlitchImageWrapper>
        <GlitchImageWrapper>
          <GlitchImage
            ref={glitch19.ref}
            src={images[14]}
            alt="cyber kyodai 1"
            toggle={toggleIndex[18]}
          />
          <GlitchImage
            ref={glitch20.ref}
            src={images[13]}
            alt="cyber kyodai 2"
            toggle={toggleIndex[19]}
          />
          <GlitchImage
            ref={glitch21.ref}
            src={images[12]}
            alt="cyber kyodai 3"
            toggle={toggleIndex[20]}
          />
        </GlitchImageWrapper>
      </div>
    </div>
  );
}

export default CarouselTest;
