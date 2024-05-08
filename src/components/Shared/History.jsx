import { useContext } from "react";
import { BetContext } from "../../ContextApi/BetContext";

const History = () => {
  const { history, currentTime } = useContext(BetContext);

  return (
   <div className="w-full flex justify-around gap-1">
    <div className="w-fit self-center">
      <p className="text-[#FF9900] font-bold">History:</p>
    </div>
    <div className="flex-grow bg-[#FF9900] flex justify-evenly items-center gap-1 px-1 py-1 rounded-md">
      {
        history?.map(h=>(
          <span
          style={{
            boxShadow: "rgba(0, 0, 0, .8) 0px 5px 15px",
            
          }}
          className="bg-red-600 px-2 rounded-md font-bold text-white">
           <p style={{
            textShadow: "#FC0 1px 0 10px"
           }}> {h}</p>
          </span>
        ))
      }

    </div>
   </div>
  );
};

export default History;
