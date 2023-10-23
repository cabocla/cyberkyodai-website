import classes from "./cyber-frame-copy.module.css";
import "/node_modules/augmented-ui/augmented-ui.min.css";

function CyberFrame(props) {
  return (
    <div
      data-augmented-ui={`
      border
      ${props.reverse ? " bl-clip " : " br-clip "} 
      ${props.reverse ? " tr-clip" : " tl-clip "} 
       t-clip-x
       `}
      className={`${
        props.reverse ? classes.cyberFrameRev : classes.cyberFrame
      } flex h-full w-full flex-col items-center  justify-start bg-green-200  lg:mx-10  lg:w-full  `}
    >
      <div
        className={`flex flex-col items-center justify-end ${
          props.reverse ? classes.cyberFrameRev : classes.cyberFrame
        } ${props.frameColor ?? "bg-yellow-200"}`}
      ></div>
      <div className={` absolute my-1 flex h-full w-full flex-col `}>
        {props.children}
      </div>
    </div>
  );
}

export default CyberFrame;
