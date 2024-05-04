/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from "react";
import { BetContext } from "../../ContextApi/BetContext";

const playWinBox = () => {
  const {winRatio,totalPlay,totalWin } = useContext(BetContext);
  // const play=localStorage.getItem("totalPlay")
  // const win=localStorage.getItem("totalWin")*(winRatio/100)
  
  
  return (
    <div 
    style={{
      boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
    }}
    className=" rounded-[8px] border border-black bg-[#4B0000] shadow-md  flex justify-around gap-4 py-2 lg:py-[30px] xl:py-[42px] lg:px-[55px] xl:px-[73px] z-[20] mx-3">
      <div className="flex flex-col items-center">
        <span className="text-white font-bold text-base lg:text-[24px]"> PLAY</span>
        <div className="w-[99px] h-[34px] md:w-[158px] md:h-[55px]  rounded-[8px] border-[3px]  border-orange-500 bg-[#A67515] flex justify-center items-center">
          <span className="text-white font-extrabold text-[14px] md:text-[24px] ">
            {totalPlay}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-white font-bold text-base lg:text-[24px]"> WIN</span>
        <div className="w-[99px] h-[34px] md:w-[158px] md:h-[55px]  rounded-[8px] border-[3px]  border-orange-500 bg-[#A67515] flex justify-center items-center ">
          <span className="text-white font-extrabold text-[14px] md:text-[24px]">
          {totalWin}
          </span>
        </div>
      </div>
    </div>
  );
};

export default playWinBox;
