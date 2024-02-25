import classes from "./cyber-frame-copy.module.css";
import "/node_modules/augmented-ui/augmented-ui.min.css";

function CyberFrame(props) {
  return (
    <div
      data-augmented-ui={`
      both
      delegated-inlay
      ${props.reverse ? " bl-clip " : " br-clip "} 
      ${props.reverse ? " tr-clip" : " tl-clip "} 
       `}
      className={`${
        props.reverse ? classes.cyberFrameRev : classes.cyberFrame
      } flex h-full  w-full flex-col items-center justify-start   px-5 lg:mx-10  `}
    >
      <div
        data-augmented-ui-inlay
        className={`  my-1 flex   flex-col items-center justify-center`}
      >
        {props.children}
      </div>
    </div>
  );
}

export default CyberFrame;
