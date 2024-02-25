import PageContent from "./page-content";
// import classes from "../ui/cyber-frame-copy.module.css";
import Image from "next/image";
import sakazukiImage from "../../../public/assets/images/SAKAZUKI.png";
import classes from "./outro.module.css";
function Outro() {
  return (
    <PageContent id="sakazuki">
      <div className="flex h-full w-full flex-col lg:flex-row ">
        <div className="flex h-2/6 w-full flex-col items-center justify-center  px-10 lg:h-full">
          <h2>Pledge your allegiance</h2>
          <br />
          <p>Join the community to be eligible for Sakazuki list</p>
          <br />
          <h2>Oyabun is waiting for you</h2>
        </div>
        <div className="flex h-4/6 w-full items-center justify-start  p-5 lg:h-full lg:p-16">
          <div
            className={`${classes.outroFrame} flex h-full w-full  `}
            data-augmented-ui="br-clip bl-clip tr-clip tl-clip both "
          >
            <div className=" flex   " data-augmented-ui-inlay>
              <Image
                className="h-full w-full "
                src={sakazukiImage}
                alt="Sakazuki Ceremony"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          </div>
          {/* <div
            data-augmented-ui={`
      border
      br-clip
      bl-clip
       tl-clip 
       tr-clip 
       t-clip-x
       `}
            className={`${classes.outroFrame} flex h-full w-full flex-col items-center  justify-start bg-green-200  lg:mx-10  lg:w-full  `}
          >
            <div
              className={`flex flex-col items-center justify-end ${classes.cyberFrame} bg-yellow-200`}
            ></div>
            <div
              className={` relative flex h-full w-full flex-col justify-center `}
            >
              <Image
                className="p-5 lg:p-10"
                src={sakazukiImage}
                alt="Sakazuki Ceremony"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div> */}
        </div>
      </div>
    </PageContent>
  );
}

export default Outro;
