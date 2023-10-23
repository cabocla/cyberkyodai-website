import { useGlitch } from "react-powerglitch";
import classes from "./cyber-button.module.css";

function CyberButton(props) {
  const glitch = useGlitch(
    props.glitchConfig
      ? props.glitchConfig
      : {
          playMode: "hover",
          createContainers: true,
          hideOverflow: false,
          timing: {
            duration: 1000,
          },
          glitchTimeSpan: {
            start: 0,
            end: 0.8,
          },
          shake: {
            velocity: 15,
            amplitudeX: 0.1,
            amplitudeY: 0.1,
          },
          slice: {
            count: 6,
            velocity: 15,
            minHeight: 0.02,
            maxHeight: 0.15,
            hueRotate: true,
          },
          pulse: false,
        }
  );
  return (
    <button
      ref={glitch.ref}
      onClick={props.onClick}
      className={classes.cyberButton}
    >
      {props.title}
    </button>
  );
}

export default CyberButton;
