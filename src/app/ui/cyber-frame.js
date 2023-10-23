import classes from "./cyber-frame.module.css";

function CyberFrame(props) {
  return (
    <div className="  flex h-full w-full flex-col items-center justify-start bg-green-200 sm:w-3/4 md:w-4/5 lg:mx-10 lg:w-full  lg:justify-end  ">
      <div
        className={`flex flex-col items-center justify-end ${
          props.reverse ? classes.cyberFrameRev : classes.cyberFrame
        } ${props.frameColor ?? "bg-yellow-200"}`}
      >
        <div
          className={`  flex h-5/6 w-11/12 flex-col ${
            props.bodyColor ?? "bg-orange-400"
          }`}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default CyberFrame;
