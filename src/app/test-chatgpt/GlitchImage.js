import Image from "next/image";
import { forwardRef } from "react";
import classes from "./GlitchImage.module.css";
const GlitchImage = forwardRef((props, ref) => {
  const toggle = props.toggle;
  return (
    <div
      // data-augmented-ui="all-hex-alt border "
      // data-augmented-ui="tr-clip tl-clip bl-clip br-clip"
      className={`${classes.GlitchImage} ${
        toggle ? " opacity-100" : "opacity-0"
      } transition-opacity ${
        !toggle ? "duration-1000" : "duration-500"
      }  flex flex-col ease-in`}
    >
      <Image
        ref={ref}
        src={props.src}
        alt={props.alt}
        // style={{ objectFit: "cover" }}
      />
    </div>
  );
});

GlitchImage.displayName = "GlitchImage";
export default GlitchImage;
