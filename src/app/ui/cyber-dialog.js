import Image from "next/image";
import CyberButton from "./cyber-button";
import CyberFrame from "./cyber-frame-copy";

function CyberDialog(props) {
  const { isOpen, setOpen } = useState(false);
  const openHandler = (_open) => {
    setOpen(_open);
  };
  return (
    <div className="absolute h-[90vh] w-full bg-slate-600 bg-opacity-50">
      <div className=" absolute right-1/4 top-1/4  flex h-1/2 w-1/2 flex-col items-center justify-center lg:right-[37.5vw] lg:h-2/6  lg:w-1/4 ">
        <CyberFrame
          reverse="true"
          frameColor=" bg-yellow-500"
          // bodyColor="bg-yellow-500"
        >
          <div className=" z-10 mx-4 flex h-full flex-1 flex-col">
            <div className="flex flex-1 flex-col">
              <div>
                <button
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  X
                </button>
              </div>
              <div className=" flex h-full flex-col items-center justify-evenly">
                {props.children}
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              props.closeOnOverlayClick ?? setOpen(false);
            }}
            className="absolute z-0 h-full w-full "
          ></div>
        </CyberFrame>
      </div>
    </div>
  );
}

export default CyberDialog;
