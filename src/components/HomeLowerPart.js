import React from "react";
import bg1 from "../assets/image/bg1.svg";
import PointAndButton from "./PointAndButton";
import PlayWinBox from "./Shared/PlayWinBox";

const HomeLowerPart = () => {
  return (
    <>
      <div className="home-lower-part relative mt-[50px]">
        <img
          className="z-[1] w-[100%] hidden lg:block"
          src={bg1}
          alt="vector"
        />

        <div className="hidden lg:block absolute lg:-right-[20px] xl:right-[13px] lg:-top-10 xl:-top-16 ">
          <PointAndButton />
        </div>
        <div className="absolute xl:left-20 xl:top-60 lg:top-52 lg:left-12 hidden lg:block">
          <PlayWinBox />
        </div>

        {/* <div className="absolute BettingPoint right-[32.5px] lg:bottom-[10px] xl:bottom-[35px]  hidden lg:block ">
          <CountDown />
        </div> */}
      </div>
    </>
  );
};

export default HomeLowerPart;
