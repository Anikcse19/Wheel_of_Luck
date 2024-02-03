import React from "react";
import BettingPoint from "./Shared/BettingPoint";

const PointAndButton = () => {
  return (
    <div className="bg-[#db802b] flex justify-center lg:bg-transparent p-3 lg:p-0 rounded-md lg:rounded-none shadow-2xl lg:shadow-none pb-5 mb-10">
      <BettingPoint />
    </div>
  );
};

export default PointAndButton;
