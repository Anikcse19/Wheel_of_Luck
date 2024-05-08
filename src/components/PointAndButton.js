import React from "react";
import BettingPoint from "./Shared/BettingPoint";

const PointAndButton = () => {
  return (
    <div className="bg-[#FF9900] flex justify-center lg:bg-transparent mx-3 py-2 lg:p-0 rounded-md lg:rounded-none shadow-2xl lg:shadow-none pb-5 mb-10">
      <BettingPoint />
    </div>
  );
};

export default PointAndButton;
