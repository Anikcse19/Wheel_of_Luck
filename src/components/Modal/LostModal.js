import { Howl } from "howler";
import React, { useContext, useEffect } from "react";
import { BetContext } from "../../ContextApi/BetContext";
import coinLostSound from "../../assets/audio/coin_lost.mp3";

const LostModal = () => {
  const { setGameLost, newBalance } = useContext(BetContext);

  useEffect(() => {
    const audio = new Howl({
      src: [coinLostSound],
    });
    audio.play();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center absolute left-6  top-20 md:bottom-0 md:left-24 lg:right-0 ">
      <div
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        className="bg-blue-600 text-white text-2xl px-24 py-8 rounded">
        Alas!!! You Lost...
        <div
          onClick={() => {
            setGameLost(false);
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

export default LostModal;
