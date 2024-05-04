import React, { useContext } from "react";
import { BetContext } from "../../ContextApi/BetContext";

const WinningNumberModal = () => {
  const { winningNumber2 } = useContext(BetContext);

  // useEffect(() => {
  //   const audio = new Audio(bonusWInSound);
  //   audio.play();
  // }, []);
  return (
    <div
      style={{
        boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
      }}
      className="flex flex-col justify-center w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-full items-center absolute top-0 right-0 md:top-0  md:bottom-0 md:-right-0 xl:-right-5 ">
      <div
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        className="w-full h-full bg-blue-600 flex justify-center items-center text-center text-white font-bold  rounded-full">
        <span
          style={{ textShadow: "#FC0 1px 0 10px" }}
          className="text-xl lg:text-6xl font-extrabold ">
          {winningNumber2}
        </span>
      </div>
    </div>
  );
};

export default WinningNumberModal;
