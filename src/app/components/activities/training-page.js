import CyberFrame from "../../ui/cyber-frame";
import PageContent from "../page-content";

function TrainingPage() {
  return (
    <PageContent id="train">
      <div className=" flex h-full w-full flex-col items-center bg-gray-200 lg:flex-row">
        <div className="flex h-full w-full flex-col">
          <div className="m-10 bg-orange-100">
            <h1>Train</h1>
          </div>
          <div className="m-10 flex h-full flex-col bg-red-300">
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
        <CyberFrame />
      </div>
    </PageContent>
  );
}

export default TrainingPage;
