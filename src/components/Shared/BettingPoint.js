import React, { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { BiSolidError } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import bg1 from "../../../src/assets/image/coinBg1.png";
import bg2 from "../../../src/assets/image/coinBg2.png";
import bg3 from "../../../src/assets/image/coinBg3.png";
import bg4 from "../../../src/assets/image/coinBg4.png";
import { BetContext } from "../../ContextApi/BetContext";
import bettingDone from "../../utils/BettingDone";
import CustomizeAmounts from "../Modal/CustomizeAmounts";

const BettingPoint = () => {
  const {
    betAmount,
    setBetAmount,
    isSpin,
    isSelected,
    isBetAble,
    isBetDone,
    setIsBetDone,
    draggedItem,
    setDraggedItem,
    gameWin,
    isTimerStart,
    gameLost,
    userBalance,
    betButtonCliked,
    setBetButtonClicked,
    error,
    setError,
    setUserBalance,
    isSelectAmount,
    setIsSelectAmount,
    showCustomizeAmountsModal,
    setShowCustomizeAmountsModal,
    betPoints,
    setBetPoints,
  } = useContext(BetContext);

  // const points = [50, 100, 200, 400];

  const pointsString = JSON.stringify(betPoints);

  if (localStorage.getItem("betPoints") === null) {
    localStorage.setItem("betPoints", pointsString);
  }
  useEffect(() => {
    setBetPoints(JSON.parse(localStorage.getItem("betPoints")));
  }, [localStorage.getItem("betPoints")]);

  const handleDragStart = (event) => {
    //
    console.log('event',event);
    console.log('event target',event.target);
    
    if (userBalance >= Number(event.target.innerText)) {
      setDraggedItem(event.target.innerText);
    } else {
      setError(true);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    // Get the input field reference
    const inputField = document.getElementById("myInput");

    //
    // Set the value of the input field with the dragged item
    if (inputField && userBalance >= draggedItem) {
      inputField.value = draggedItem;
    } else {
      setError(true);
    }

    // Reset draggedItem state
    setDraggedItem("");
  };

  const handleAmountClick = (event) => {
    if (!isSpin && isBetAble) {
      // playSound();

      console.log('evnet from click',event);
      console.log('evnet from click',event.currentTarget?.innerText);
      
      const clickedDiv = event.currentTarget;
      const clickedPoint = clickedDiv?.innerText;
      //
      if (clickedPoint <= userBalance) {
        setError(false);
        setBetAmount(clickedPoint);
        setDraggedItem(clickedPoint);
        toast.success(`Amount Selected ${clickedPoint}`, {
          position: "bottom-right",
          id: "bet_amount",
        });
      } else {
        setError(true);
        toast.error("unsufficient Balance", {
          id: "unsufficient",
          duration: 1000,
          position: "bottom-right",
        });
      }
    } else {
      toast.error("Unable to select money.Please Wait", {
        id: "unable select",
        position: "bottom-right",
      });
    }
  };

  const handlePlaceBet = () => {
    if (error) {
      setDraggedItem("");
    }
    if (
      betAmount > 0 &&
      isSelected.id !== null &&
      isSelected.id >= 0 &&
      isBetAble
    ) {
      if (userBalance >= betAmount) {
        setError(false);
        //
        //function for ajax call
        setBetButtonClicked(true);
        bettingDone(
          betAmount,
          isSelected.id,
          setIsBetDone,
          setBetButtonClicked,
          setUserBalance
        );
      } else {
        setError(true);
      }
    }
  };

  return (
    <>
      <div className="flex flex-col lg:w-[400px] xl:w-[702px]  gap-5">
        <div className="w-[100%]  justify-center flex flex-wrap items-center gap-5 relative">

          {/* coin 1 start */}
          <div className="flex flex-col gap-3 items-center">
            <div
            draggable={true}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={handleAmountClick}
              style={{
               
                  backgroundImage: `url(${bg1})`,
                  backgroundSize: 'cover',
              }}
              className="w-[70px] h-[70px] xl:w-[150px]  xl:h-[150px]  rounded-full   flex justify-center items-center cursor-pointer"
            >
              <div
                   
                    id="bet-point"
                    className="bet-point text-base font-bold lg:text-2xl "
                  >
                    {betPoints[0]}
                  </div>
              
            </div>

            <span
              onClick={() => setShowCustomizeAmountsModal(true)}
              className="text-white cursor-pointer flex justify-center items-center bg-slate-700 p-3 rounded-full"
            >
              <FaEdit />
            </span>
          </div>
          {/* coin1 end */}

          {/* coin2 start */}
          <div className="flex flex-col gap-3 items-center">
            <div
            
              style={{
               
                  backgroundImage: `url(${bg2})`,
                  backgroundSize: 'cover',
              }}
              className="w-[70px] h-[70px] xl:w-[150px]  xl:h-[150px]  rounded-full   flex justify-center items-center cursor-pointer p-3"
            >
              <div
                   draggable={true}
                   onDragStart={handleDragStart}
                   onDragOver={handleDragOver}
                   onDrop={handleDrop}
                   onClick={handleAmountClick}
                    id="bet-point"
                    className="bet-point text-base font-bold lg:text-2xl"
                  >
                    {betPoints[1]}
                  </div>
              
            </div>

            <span
              onClick={() => setShowCustomizeAmountsModal(true)}
              className="text-white cursor-pointer flex justify-center items-center bg-slate-700 p-3 rounded-full"
            >
              <FaEdit />
            </span>
          </div>
          {/* coin2 end */}

          {/* coin 3 start */}
          <div className="flex flex-col gap-3 items-center">
            <div
            
              style={{
               
                  backgroundImage: `url(${bg3})`,
                  backgroundSize: 'cover',
              }}
              className="w-[70px] h-[70px] xl:w-[150px]  xl:h-[150px]  rounded-full   flex justify-center items-center cursor-pointer p-3"
            >
              <div
                   draggable={true}
                   onDragStart={handleDragStart}
                   onDragOver={handleDragOver}
                   onDrop={handleDrop}
                   onClick={handleAmountClick}
                    id="bet-point"
                    className="bet-point text-base font-bold lg:text-2xl"
                  >
                    {betPoints[2]}
                  </div>
              
            </div>

            <span
              onClick={() => setShowCustomizeAmountsModal(true)}
              className="text-white cursor-pointer flex justify-center items-center bg-slate-700 p-3 rounded-full"
            >
              <FaEdit />
            </span>
          </div>
          {/* coin 3 end */}

          {/* coin 4 start */}
          <div className="flex flex-col gap-3 items-center">
            <div
            
              style={{
               
                  backgroundImage: `url(${bg4})`,
                  backgroundSize: 'cover',
              }}
              className="w-[70px] h-[70px] xl:w-[150px]  xl:h-[150px]  rounded-full   flex justify-center items-center cursor-pointer p-3"
            >
              <div
                   draggable={true}
                   onDragStart={handleDragStart}
                   onDragOver={handleDragOver}
                   onDrop={handleDrop}
                   onClick={handleAmountClick}
                    id="bet-point"
                    className="bet-point text-base font-bold lg:text-2xl"
                  >
                    {betPoints[3]}
                  </div>
              
            </div>

            <span
              onClick={() => setShowCustomizeAmountsModal(true)}
              className="text-white cursor-pointer flex justify-center items-center bg-slate-700 p-3 rounded-full"
            >
              <FaEdit />
            </span>
          </div>
          {/* coin 4 end */}

          {/* modal */}
          {showCustomizeAmountsModal && <CustomizeAmounts />}
        </div>

        {/* Input filed and button */}
        <div className="flex flex-row  justify-center my-2 lg:justify-center gap-1 lg:gap-5  items-center w-[100%] lg:w-[480px] xl:w-[702px]">
          <div className="flex flex-col relative">
            <h1
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.30)" }}
              className="text-[#fff] text-[10px] lg:text-[24px] font-light lg:font-extrabold self-center hidden lg:block"
            >
              Enter Betting Amount
            </h1>
            <input
              id="myInput"
              type="number"
              name="bet-amount"
              value={!isTimerStart ? "" : draggedItem}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  e.preventDefault();
                  handlePlaceBet();
                }
              }}
              onChange={(e) => {
                if (e.target.value <= userBalance) {
                  if (isBetAble) {
                    setDraggedItem(e.target.value);
                    setBetAmount(e.target.value);
                  }
                } else {
                  setError(true);
                }
              }}
              className="w-[138px] mb-0 lg:w-[235px] xl:w-[337px] h-[36px] lg:h-[64px] hidden lg:block outline-none px-3 font-bold rounded-[6px] border-1 border-black bg-[#c8a257] "
            />
            <input
              id="myInput"
              type="number"
              name="bet-amount"
              value={!isTimerStart ? "" : draggedItem}
              onChange={(e) => {
                if (e.target.value <= userBalance) {
                  if (isBetAble) {
                    setDraggedItem(e.target.value);
                    setBetAmount(e.target.value);
                  }
                } else {
                  setError(true);
                }
              }}
              placeholder="Enter Betting Amnount"
              className="w-[138px] block lg:hidden mb-0 lg:w-[337px] h-[36px] lg:h-[64px] outline-none px-3 font-bold rounded-[6px] border-1 border-black bg-[#c8a257] text-[#fff] text-[10px] placeholder-[#ffffff]  "
            />
            {error && (
              <div className="absolute top-8 md:top-24 -left-2 md:left-0 flex  items-center gap-3 font-bold md:font-extrabold shadow-2xl px-3 py-1 my-2 rounded-md w-[150px] md:w-full">
                <BiSolidError className="text-red-900 text-[10px] md:text-3xl" />
                <p
                  style={{ textShadow: "#FC0 1px 0 10px" }}
                  className="text-red-900 text-[10px] md:text-[22px]"
                >
                  Unsufficient Balance!!
                </p>
              </div>
            )}
          </div>


          {/* <div
            onClick={handlePlaceBet}
            style={{ boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.45)" }}
            className={
              isBetAble
                ? "cursor-pointer w-[138px] lg:w-[180px] xl:w-[281px] h-[36px] lg:h-[64px] rounded-[6px] border-1 self-center lg:self-end border-black bg-[#fb9a09] flex justify-center items-center mb-2"
                : "cursor-not-allowed w-[138px] lg:w-[200px] xl:w-[281px] h-[36px] lg:h-[64px] rounded-[6px] border-1 self-center lg:self-end border-black bg-[#fb9a09] flex justify-center items-center mb-2 "
            }>
            <span
              style={{ textShadow: " 0px 4px 4px rgba(0, 0, 0, 0.30)" }}
              className="text-[16px] lg:text-[20px] xl:text-[32px] font-extrabold text-white">
              {isBetDone ? (
                <div className="flex items-center">
                  <span>BET DONE</span>
                  <span>
                    <IoCheckmarkDoneCircle className="text-green-600" />
                  </span>
                </div>
              ) : betButtonCliked ? (
                <ScaleLoader color="#fff" />
              ) : (
                <span>PLACE BET</span>
              )}
            </span>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default BettingPoint;
