import FightingPage from "./activities/fight-page";
import RecruitPage from "./activities/recruit-page";
import TrainingPage from "./activities/training-page";
import WorkingPage from "./activities/working-page";

function Gameplay() {
  return (
    <>
      <TrainingPage />
      <WorkingPage />
      <FightingPage />
      {/* <RecruitPage /> */}
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
