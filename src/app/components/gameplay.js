import FightingPage from "./activities/fight-page";
import RecruitPage from "./activities/recruit-page";
import TrainingPage from "./activities/training-page";
import WorkingPage from "./activities/working-page";
import PageContent from "./page-content";

function Gameplay() {
  return (
    // <PageContent>
    //   {/* <div className=" my-10 flex h-full w-full flex-wrap content-start items-center justify-center bg-white align-middle md:flex-row "> */}
    //   <div className="grid h-full w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
    //     <GameplayDiv>
    //       <h1>Train</h1>
    //       <p>Level up your kyodai</p>
    //     </GameplayDiv>
    //     <GameplayDiv>
    //       <h1>Run gigs</h1>
    //       <p>Earn $NEOYEN</p>
    //     </GameplayDiv>
    //     <GameplayDiv>
    //       <h1>Fight</h1>
    //       <p>Protect your honor</p>
    //     </GameplayDiv>
    //     <GameplayDiv>
    //       <h1>Recruit</h1>
    //       <p>Recruit Shatei</p>
    //     </GameplayDiv>
    //   </div>
    // </PageContent>
    <>
      <TrainingPage />
      <WorkingPage />
      <FightingPage />
      <RecruitPage />
    </>
  );
}

function GameplayDiv(props) {
  return (
    <div className=" flex h-full w-full  items-center justify-evenly  bg-red-600 lg:flex-col">
      {props.children}
    </div>
  );
}
export default Gameplay;
