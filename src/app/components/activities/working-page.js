import CyberFrame from "../../ui/cyber-frame";
import PageContent from "../page-content";

function WorkingPage() {
  return (
    <PageContent id="gigs">
      <div className=" flex h-full w-full flex-col items-center bg-gray-200 lg:flex-row-reverse">
        <div className="flex h-full w-full flex-col">
          <div className="m-10 bg-orange-100">
            <h1>Run Gigs</h1>
          </div>
          <div className="m-10 flex h-full  flex-col bg-red-300">
            <p>
              Fulfill your duties to the family. Run gigs and work for the
              benefits of the clan and earn $NEOYEN.
            </p>
            <br />

            <p>The higher level your Kyodais, the more $NEOYEN they acquire.</p>
            <br />
          </div>
        </div>

        <CyberFrame reverse={true} />
      </div>
    </PageContent>
  );
}

export default WorkingPage;
