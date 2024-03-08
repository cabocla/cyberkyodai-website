import Image from "next/image";
import CyberFrame from "../../ui/cyber-frame-copy";
import PageContent from "../page-content";
import trainingImage from "../../../../public/assets/images/VR TRAINING.png";

function TrainingPage() {
  return (
    <PageContent id="train">
      <div className=" flex h-full w-full flex-col items-center  lg:flex-row">
        <div className="flex  w-full flex-col items-center px-10">
          <div className="m-10 mb-0 ">
            <h2 className="text-5xl">Train</h2>
          </div>
          <div className="m-10 flex h-full flex-col ">
            <p>
              Unlock the full potential of your Kyodais. Train your Kyodai to
              gain experience and level up.
            </p>
            <br />
            <p>
              Fight stronger enemies. Acquire more $NEOYEN when you run gigs.
            </p>
            <br />
          </div>
        </div>
        <div className="flex h-3/4 w-full flex-col items-center  px-5  pb-20 lg:h-full lg:px-10  lg:py-36">
          <CyberFrame>
            <Image
              className=" h-full w-full "
              src={trainingImage}
              alt="VR Training"
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
          </CyberFrame>
        </div>
      </div>
    </PageContent>
  );
}

export default TrainingPage;
