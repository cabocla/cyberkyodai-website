import CyberFrame from "../../ui/cyber-frame";
import PageContent from "../page-content";

function FightingPage() {
  return (
    <PageContent id="fight">
      <div className=" flex h-full w-full flex-col items-center bg-gray-200 lg:flex-row">
        <div className="flex h-full w-full flex-col">
          <div className="m-10 bg-orange-100">
            <h1>Fight</h1>
          </div>
          <div className="m-10 flex h-full  flex-col bg-red-300">
            <p>
              Protect your honor, fight the enemies and rise through the ranks.
            </p>
            <br />
            <p>Retrieve their pinkies and present them to Oyabun.</p>
          </div>
        </div>
        <CyberFrame />
      </div>
    </PageContent>
  );
}

export default FightingPage;
