import Image from "next/image";
import { useGlitch } from "react-powerglitch";

function GlitchImage(src, alt) {
  const glitch = useGlitch({
    // playMode: "always",
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
    <div>
      <Image src={src} alt={alt} />
    </div>
  );
}

export default GlitchImage;
