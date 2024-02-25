import { useGlitch } from "react-powerglitch";
import kyodaiImages from "./kyodai-images";

function Carousel() {
  const kyodais = kyodaiImages();

  const glitch1 = useGlitch({
    playMode: "always",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 2000,
    },
    glitchTimeSpan: {
      start: 0.5,
      end: 0.8,
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
  });
  return (
    <div className="relative  m-10 flex flex-row items-center  ">
      <div className=" flex  flex-col items-center">
        <div ref={glitch1.ref}>{kyodais[0]}</div>
        <div>{kyodais[1]}</div>
      </div>
      <div className="flex flex-col items-center justify-end ">
        {kyodais[2]}
        {kyodais[3]}
        {kyodais[4]}
      </div>
      <div className="  flex  flex-col items-center ">
        {kyodais[5]}
        {kyodais[6]}
      </div>
    </div>

    // <div className="flex  items-center justify-center">
    //   <div className=" top-10 bg-green-200">{kyodais[0]}</div>
    //   <div className="  bg-green-300">{kyodais[1]}</div>
    //   <div className="bg-green-200">{kyodais[2]}</div>
    //   <div className="bg-green-300">{kyodais[3]}</div>
    //   <div className="bg-green-200">{kyodais[4]}</div>
    //   <div className="bg-green-300">{kyodais[5]}</div>
    //   <div className="bg-green-200">{kyodais[6]}</div>
    // </div>
  );
}

export default Carousel;
