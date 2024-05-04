import React, { useContext } from "react";
import { BetContext } from "../ContextApi/BetContext";
import LostModal from "./Modal/LostModal";
import WinModal from "./Modal/WinModal";
import WinningNumberModal from "./Modal/WinningNumberModal";
import BonusWinModal from "./Modal/bonusWinModal";
import PointAndButton from "./PointAndButton";
import NumberBoxs from "./Shared/NumberBoxs";
import PlayWinBox from "./Shared/PlayWinBox";
import Wheel from "./Shared/Wheel";

const Home = () => {
  const {
    gameLost,
    gameWin,
    showModal,
    showBonusModal,
    showWinningNumberModal,
  } = useContext(BetContext);

  return (
    <>
      <div className="h-[332px]  px-5 lg:px-12  flex flex-col gap-5 lg:gap-0 lg:flex-row lg:justify-between">
        {/* <Wheel1 /> */}
        <div className="relative lg:mt-12">
          <Wheel />
          {gameLost && showModal && <LostModal />}
          {gameWin && showModal && <WinModal />}
          {showBonusModal && <BonusWinModal />}
          {showWinningNumberModal && <WinningNumberModal />}
        </div>

        <div className="block lg:hidden">
          <PlayWinBox />
        </div>
        <div className="block lg:hidden">
          <NumberBoxs />
        </div>
        <div className="block lg:hidden">
          <PointAndButton />
        </div>
        {/* <div className="block lg:hidden w-[100%] mx-auto">
          <History />
        </div> */}
        {/* <WheelOfPrizes /> */}
        <div className="  hidden lg:block ">
          <NumberBoxs />
        </div>
      </div>
    </>
  );
};

export default Home;
