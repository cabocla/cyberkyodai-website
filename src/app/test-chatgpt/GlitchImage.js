import Image from "next/image";
import { forwardRef } from "react";

const GlitchImage = forwardRef((props, ref) => {
  const toggle = props.toggle;
  return (
    <div
      className={`absolute  ${
        toggle ? " opacity-100" : "opacity-0"
      } transition-opacity ${
        !toggle ? "duration-1000" : "duration-500"
      } ease-in `}
    >
      <Image ref={ref} src={props.src} alt={props.alt} />
    </div>
  );
});

GlitchImage.displayName = "GlitchImage";
export default GlitchImage;
