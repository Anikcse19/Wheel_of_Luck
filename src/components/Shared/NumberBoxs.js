import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { TiPin } from "react-icons/ti";
import { RingLoader } from "react-spinners";
import { BetContext } from "../../ContextApi/BetContext";
import bettingDone from "../../utils/BettingDone";

const NumberBoxs = () => {
  // const [isSelected, setIsSelected] = useState({ id: null, value: false });
  const {
    isSelected,
    setIsSelected,
    isSpin,
    setNewBalance,
    isBetDone,
    isBetAble,
    numberPicked,
    showInitialModal,
    isTimesUp,
    betAmount,
    setDraggedItem,
    draggedItem,
    userBalance,
    setBetButtonClicked,
    setIsBetDone,
    setUserBalance,
    error,
    setError,
    selectedColorButton,setSelectedColorButton,
    sel,setSel,setTotalPlay,totalPlay,
    isBetComplete,setIsBetComplete
  } = useContext(BetContext);

  const [isHoverOnShade,setIsHoverOnShade]=useState(false)


  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  const colors = [
    "#E100E2",
    "#40038D",
    "#00C9E8",
    "#FF7900",
    "#DA3734",
    "#7263CF",
    "#F4005C",
    "#00FD27",
    "#DEE207",
    "#4250E9",
  ];

  

  const handlePlaceBet = (id) => {
    if(error){
      setDraggedItem("")
    } 
    if (
      betAmount > 0 &&
      id !== null &&
      id >= 0 &&
      isBetAble
    ) {    
      setIsBetComplete({
        value:null,state:false
      })
      if (userBalance >= betAmount) {
        setError(false);
        
        //function for ajax call
        setBetButtonClicked(true);
        bettingDone(
          betAmount,
          id,
          setIsBetDone,
          setBetButtonClicked,setUserBalance,setIsBetComplete
        );
        setTotalPlay(Number(totalPlay)+Number(betAmount));   
        localStorage.setItem('totalPlay',Number(totalPlay)+Number(betAmount))
      } else {
        setError(true);
      }
    }
  };

  return (
    <div className="relative w-full h-full p-5 grid grid-cols-5 gap-2 md:gap-3 xl:gap-5 ">
      {isTimesUp && !showInitialModal && (
        <div onMouseEnter={()=>setIsHoverOnShade(true)} onMouseLeave={()=>setIsHoverOnShade(false)} className={`${isHoverOnShade && "bg-black"} opacity-[.7] w-full h-full py-4 rounded-md flex justify-center items-center absolute  overflow-hidden z-[10000]`}>
          {
            isHoverOnShade && (
              <div className=" my-2 px-3 py-2 lg:px-12 lg:py-6 xl:px-24 xl:py-12 flex flex-col justify-center items-center ">
              <span className="md:font-bold text-white">
                <span className="text-base md:text-2xl font-extrabold block text-center text-white">
                  {isBetDone ? "Bet Placed Successfully" : "Time Out!!!"}
                </span>{" "}
                {isBetDone
                  ? "Wait for the Result"
                  : "Cannot Bet Now. Wait for the Result"}
              </span>{" "}
              <RingLoader
                className="md:font-extrabold text-sm md:text-xl"
                color="black"
              />
            </div> 
            )
          }
          
        </div>
      )}
      {numbers.map((number, index) => (
        <div key={index} className="flex justify-center items-center ">
          <div
            onClick={() => {
              if(draggedItem===""){
                toast.error("Select Amount first",{
                  id:'anikkkk'
                })
                
              }
              else{
                if (!isSpin  && isBetAble) {
                  setIsBetDone(false)
                  setSelectedColorButton((prev)=>[...prev,{id:index,value:true}])
                  setIsSelected({ id: index, value: true })
                  setSel((prev)=>[...prev,index])
                  setTimeout(()=>{
                    localStorage.setItem("selectedNumber", sel);
                  },200)                  
                  handlePlaceBet(index)                 
                  numberPicked.current = true;
                }
                
              }
            }}
            style={{
              backgroundColor:
              selectedColorButton.find(btn=>{
               return btn.id===index && btn.value
              })
                  ? `${colors[index]}`
                  : "#fc1212",
                boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
            }}
            className={
              selectedColorButton.find(btn=>{
                return btn.id===index && btn.value
               })
                ? `w-10 h-10 md:w-[175px] md:h-[75px] xl:w-[111.905px] xl:h-[102.313px] rounded-[5px] border-1 border-black  text-center flex justify-center items-center  mr-0 cursor-pointer transition-all duration-300 shadow-2xl relative`
                : "w-10 h-10 md:w-[175px] md:h-[75px] lg:w-[111.905px] lg:h-[102.313px]  rounded-[5px] border-1 border-black  text-center flex justify-center items-center  mr-0 cursor-pointer relative "
            }>
            <span
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              className={
                selectedColorButton.find(btn=>{
                  return btn.id===index && btn.value
                 })
                  ? "text-[32px] md:text-[40px] w-[20px] h-[39px] md:w-[32px] md:h-[57px] font-[700] text-black md:mt-5"
                  : "text-[32px] md:text-[40px] w-[20px] h-[39px] md:w-[32px] md:h-[57px] font-[700] text-[#fff]  "
              }>
              {number}
            </span>
           {
            selectedColorButton.find(btn=>{
              return btn.id===index && btn.value
            }) &&  <div className="absolute -top-3 -right-2 lg:-top-6 lg:-right-5 text-xl md:text-2xl lg:text-5xl text-black font-extrabold">
            <TiPin/>
          </div>
           }
          </div>
        </div>
      ))}
    </div>
  );
};

export default NumberBoxs;