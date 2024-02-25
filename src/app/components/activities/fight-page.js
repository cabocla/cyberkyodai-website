import CyberFrame from "../../ui/cyber-frame-copy";
import PageContent from "../page-content";
import fightImage from "../../../../public/assets/images/FACE 2 FACE.png";
import Image from "next/image";
import classes from "../../ui/cyber-frame-copy.module.css";

function FightingPage() {
  return (
    <PageContent id="fight">
      <div className=" flex h-full w-full flex-col items-center  lg:flex-row">
        <div className="flex  w-full flex-col ">
          <div className="-100 m-10 mb-0">
            <h1>Fight</h1>
          </div>
          <div className="m-10 flex h-full  flex-col ">
            <p>
              Protect your honor, fight the enemies and rise through the ranks.
            </p>
            <br />
            <p>Retrieve their pinkies and present them to Oyabun.</p>
          </div>
        </div>
        <div className="flex h-3/4 w-full flex-col items-center  pb-20 lg:h-full lg:px-10  lg:py-36">
          <CyberFrame>
            <Image
              className="h-full w-full "
              src={fightImage}
              alt="Yakuza Fight"
              // fill
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
          </CyberFrame>
        </div>
      </div>
    </PageContent>
  );
}

export default FightingPage;
