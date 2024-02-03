import React, { useContext, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { BetContext } from "../../ContextApi/BetContext";
import "../../styles/ProgressBar.css";

// import countDown from "../../assets/audio/countdown.mp3";

const CountDown = () => {
  const audioRef = useRef(null);
  const {
    setIsSpin,
    isTimerStart,
    setIsTimerStart,
    totalDuration,
    setTotalDuration,
    setIsBetAble,
    isBetDone,
    setIsTimesUp,
    setShowWinningNumberModal,
    setSelectedColorButton
  } = useContext(BetContext);

  const totalTime = 30;

  // useEffect(() => {
  //   // Create a new Howl instance and store it in the audioRef
  //   audioRef.current = new Howl({
  //     src: [countdownSound],
  //   });

  //   // Cleanup function to stop and unload the audio when component unmounts
  //   return () => {
  //     if (audioRef.current) {
  //       audioRef.current.stop();
  //       audioRef.current.unload();
  //     }
  //   };
  // }, [isTimerStart]);
  // useEffect(() => {
  //   // Check if the timer is started
  //   if (isTimerStart) {
  //     // Check if the audioRef is available
  //     if (audioRef.current) {
  //       // If the audio is already playing, stop it before playing again
  //       audioRef.current.stop();
  //       // Play the audio
  //       audioRef.current.play();
  //     }
  //   } else {
  //     // If the timer is not started, stop the audio
  //     if (audioRef.current) {
  //       audioRef.current.stop();
  //     }
  //   }
  // }, [isTimerStart]);

  // useEffect(() => {
  //   const playBtn = document.getElementById("sound-play");
  //   // if (isTimerStart) {
  //   playBtn.addEventListener("click", () => {
  //     const sound = new Howl({
  //       src: [countDown],
  //     });

  //     sound.play();
  //   });
  //   // }
  // }, [isTimerStart]);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTotalDuration((prevDuration) => {
        if (prevDuration > 0) {
          return prevDuration - 0.5;
        } else {
          clearInterval(timerInterval);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [totalDuration, setTotalDuration, isTimerStart]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);

    if (totalDuration < 6 ) {
      toast.remove();
      setIsBetAble(false);
    }
    if (totalDuration < 6) {
      setIsTimesUp(true);
    }

    // if (!isBetDone) {
      if (totalDuration <= 30 && totalDuration > 5) {
        toast(`Remain ${Math.floor(totalDuration - 5)}s to bet`, {
          id: "anik",
          duration: 20000,

          style: {
            backgroundColor: "#FF9200",
            opacity:".3",
            color: "black",
            fontWeight:"700",
            boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
            marginTop:"70px",
            marginLeft:"50px"
          },
        });
      }
    // }

    if (totalDuration === 0) {
      
      setIsSpin(true);
      setIsTimerStart(false);
      setShowWinningNumberModal(false);
      return `00:00:00`;
    }

    if (seconds < 10) {
      return `-0${hours}:0${minutes}:0${seconds}`;
    }

    return `-0${hours}:0${minutes}:${seconds}`;
  };
  return (
    <div
      style={{
        boxShadow: " 0px 5px 4px 0px rgba(0, 0, 0, 0.55)",
        textShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
      className="w-[190px] lg:w-[300px]  h-[72px]   pb-3  rounded-[9px] border-[3px]  border-[#8c3030] bg-[#fc1212]  flex flex-col justify-center items-center gap-2  z-0">
      <div className="w-[142px] lg:w-[200px] xl:w-[300px]  h-[38px]  text-center">
        <span
          style={{ fontFamily: " Mochiy Pop One" }}
          className="text-white font-bold text-[20px] ">
          {isTimerStart ? formatTime(totalDuration) : "00:00:00"}
        </span>
      </div>
      {isTimerStart ? (
        <progress
        // className="bg-red-900"
          id="file"
          value={totalTime - totalDuration}
          max={totalTime}></progress>
      ) : (
        <progress
          id="file"
          // value={totalTime - totalDuration}
          // max={totalTime}
        ></progress>
      )}
    </div>
  );
};

export default CountDown;
