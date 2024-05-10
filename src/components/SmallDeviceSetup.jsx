import React, { useContext } from "react";
import { BetContext } from "../ContextApi/BetContext";
import WinningNumberModal from "./Modal/WinningNumberModal";
import PointAndButton from "./PointAndButton";
import Header from "./Shared/Header";
import NumberBoxs from "./Shared/NumberBoxs";
import PlayWinBox from "./Shared/PlayWinBox";
import Wheel from "./Shared/Wheel";

const SmallDeviceSetup = () => {
  const {
    gameLost,
    gameWin,
    showModal,
    showBonusModal,
    showWinningNumberModal,
  } = useContext(BetContext);

  return (
    <>
      <div
        // className="h-[332px]  px-5 lg:px-12  flex flex-col gap-5 lg:gap-0 lg:flex-row lg:justify-between"

        className="px-2"
      >
        <Header />
        <div className="flex items-center gap-2">
          <div className="block lg:hidden w-[50%]">
            <PlayWinBox />
          </div>
          <div className="w-[50%] block lg:hidden">
            <WinningNumberModal />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center  lg:mt-12">
          <div className="relative">
            <Wheel />
            {/* {gameLost && showModal && <LostModal />}
          {gameWin && showModal && <WinModal />}
          {showBonusModal && <BonusWinModal />}
          {showWinningNumberModal && <WinningNumberModal />} */}
          </div>
          <div className="flex flex-col gap-y-16">
            <div className=" lg:my-0 ">
              <NumberBoxs />
            </div>
            <div className="hidden lg:block">
              <PointAndButton />
            </div>
          </div>
        </div>
        <div className="block lg:hidden">
          <PointAndButton />
        </div>
        <div className="hidden lg:block w-[30%] mx-auto mt-5 mb-12">
            <PlayWinBox />
          </div>

        {/* <div className="  hidden lg:block ">
          <NumberBoxs />
        </div> */}
      </div>
    </>
  );
};

export default SmallDeviceSetup;
