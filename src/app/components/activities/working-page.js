import CyberFrame from "../../ui/cyber-frame-copy";
import PageContent from "../page-content";
import gigsImage from "../../../../public/assets/images/RAID.png";
import Image from "next/image";

function WorkingPage() {
  return (
    <PageContent id="gigs">
      <div className=" flex h-full w-full flex-col items-center  lg:flex-row-reverse">
        <div className="flex  w-full flex-col">
          <div className="m-10 mb-0 ">
            <h1>Run Gigs</h1>
          </div>
          <div className="m-10  flex h-full  flex-col ">
            <p>
              Fulfill your duties to the family. Run gigs and work for the
              benefits of the clan and earn $NEOYEN.
            </p>
            <br />

            <p>The higher level your Kyodais, the more $NEOYEN they acquire.</p>
            <br />
          </div>
        </div>
        <div className="flex h-3/4 w-full flex-col items-center  pb-20 lg:h-full lg:px-10  lg:py-36">
          <CyberFrame reverse={true}>
            <Image
              className=" h-full w-full  items-center justify-center "
              src={gigsImage}
              alt="Run Gigs"
              style={{ objectFit: "cover", objectPosition: "top left" }}
            />
          </CyberFrame>
        </div>
      </div>
    </PageContent>
  );
}

export default WorkingPage;
