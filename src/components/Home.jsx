import React, { useContext } from "react";
import { BetContext } from "../ContextApi/BetContext";
import WinningNumberModal from "./Modal/WinningNumberModal";
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
      <div 
      
      // className="h-[332px]  px-5 lg:px-12  flex flex-col gap-5 lg:gap-0 lg:flex-row lg:justify-between"

      className="px-2"
      >
        

       <div className="flex items-center gap-2">
       <div className="block lg:hidden w-[50%]">
          <PlayWinBox />
        </div>
        <div className="w-[50%]">
          <WinningNumberModal/>
        </div>
       </div>

       <div>
        
        <div className="relative lg:mt-12">
          <Wheel />
          {/* {gameLost && showModal && <LostModal />}
          {gameWin && showModal && <WinModal />}
          {showBonusModal && <BonusWinModal />}
          {showWinningNumberModal && <WinningNumberModal />} */}
        </div>
       </div>
        <div className="block lg:hidden my-4">
          <NumberBoxs />
        </div>
        <div className="block lg:hidden">
          <PointAndButton />
        </div>
       
        {/* <div className="  hidden lg:block ">
          <NumberBoxs />
        </div> */}
      </div>
    </>
  );
};

export default Home;
