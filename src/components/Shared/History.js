import React, { useContext } from "react";
import { BetContext } from "../../ContextApi/BetContext";

const History = () => {
  const { history, currentTime } = useContext(BetContext);

  return (
    <div style={{
      gap:"10px"
    }} className="w-[100%] flex justify-center items-center  right-header    lg:mb-0 ">
      <h1 className="text-[#790707] text-[12px] lg:text-[30px] font-bold self-end">
        HISTORY
      </h1>
      <div className="history-time-details flex flex-col justify-center items-center">
        <div className="history-time-wrapper">
          <div className="history-time flex justify-around items-center w-[234px] lg:w-[340px]">
            {currentTime.map((t, index) => (
              <div
                className="w-[20px] lg:w-[24px] transition-all duration-500 ease-out"
                key={index}>
                <span className="text-[7px] lg:text-[10px] font-bold">{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.35) inset",
          }}
          className="history-details-wrapper bg-[#837979] w-[270px] lg:w-[384px] h-[32px] lg:h-[46px] rounded-lg border border-black flex justify-around items-center">
          <div className="history-details w-[234px] lg:w-[343px] h-[30px] lg:h-[39px] shrink-0 flex justify-around items-center ">
            {history.map((h, index) => (
              <div
                className="bg-red-600 w-[24px] lg:w-[35px] h-[24px] lg:h-[35px] rounded-lg shrink-0 p-[5px] flex justify-center items-center transition-all duration-500 ease-out"
                key={index}>
                <span className="w-[15px] lg:w-[21px] h-[30px] lg:h-[42px] text-white text-[20px] lg:text-[32px] font-bold ">
                  {h}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
