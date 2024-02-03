import React, { useContext } from "react";
import { BetContext } from "../../ContextApi/BetContext";

const WinModal = () => {
  const { setGameWin, newBalance } = useContext(BetContext);

  // useEffect(() => {
  //   const audio = new Audio(coinWInSound);
  //   audio.play();
  // }, []);
  return (
    <div className="flex flex-col justify-center items-center absolute left-6  top-20 md:bottom-0 md:left-24 lg:right-0 ">
      <div
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        className="bg-green-600 text-white text-2xl px-24 py-8 rounded">
        Congrats!!! You Win
        <div
          onClick={() => {
            setGameWin(false);
            // setIsTimer(true);
          }}
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          className="bg-red-600 px-5 py-2 rounded mt-4 text-center cursor-pointer">
          Close
        </div>
      </div>
    </div>
  );
};

export default WinModal;
