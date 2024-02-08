import React, { useContext, useEffect } from "react";
import { BetContext } from "../ContextApi/BetContext";
import Home from "../components/Home";
import HomeLowerPart from "../components/HomeLowerPart";
import Header from "../components/Shared/Header";
import echo from "../utils/socket";
// import globalStateUpdate from "../utils/GlobalStateUpdate";

import axios from "axios";
import { Toaster } from "react-hot-toast";
import InitialLoading from "../components/Modal/InitialLoadingModal";
import History from "../components/Shared/History";
import AudioPlayer from "../components/Shared/MusicPlayer";
import globalStateUpdate from "../utils/GlobalStateUpdate";

const HomePage = () => {
  const {
    setHistory,
    setCurrentTime,
    setLuckyNumber,
    setUserBalance,
    setMusicStart,
    isSpin,
    setIsDataFetch,
    isDataFetch,
    luckyNumber,
    showInitialModal,
    setShowInitialModal,
    setIsSpin,
    setIsTimerStart,
    setTotalDuration,
    setIsBetAble,
    setInitialWaitingTime,
    setWinningNumber2,
    setSelectedColorButton,
    setIsBetDone,setWinRatio,
    setIsTimesUp,setTotalPlay,setTotalWin,winRatio
  } = useContext(BetContext);



  let screenSize;
  if (window.innerWidth < 1024) {
    screenSize = "small";
  } else {
    screenSize = "big";
  }

  const url = "https://1ten365.online/init-render-data";

  
  
  
  useEffect(() => {
    const presentTime = new Date();
    const minutes = presentTime.getMinutes();
    const seconds = presentTime.getSeconds();
    const p = minutes * 60 + seconds;

    setHistory(window.initialBettingHistory);
    setCurrentTime(window.initialBettingTime);
    axios({
      url: url,
      method: "POST",
      headers: {
        Accept: "Application/json",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: `Bearer ${window.TOKEN}`,
      },
    }).then((res) => {

      setTimeout(() => {
        setMusicStart(true);
      }, 500);

         
      const nTime = new Date(res.data.nextEventAt);
      const minutes = nTime.getMinutes();
      const seconds = nTime.getSeconds();
      const q = minutes * 60 + seconds;     
      const diff = q - p;
      
      //set user balance
      setUserBalance(res.data.balance);
      // set game win ratio
      setWinRatio(res.data.win_ratio)
      //set total play amounts
      setTotalPlay(res.data.total_play)
      
      
      setTotalWin(res.data.total_win)
      
      if(res.data.bets.length>0){
        setShowInitialModal(false)
        // setIsSpin(true)
        // setIsTimerStart(false)
        res.data.bets.map(bet=>{
          setSelectedColorButton((prev)=>[...prev,{id:bet.number,value:true, bet:bet.amount}])
        })

        setIsBetDone(true)
        setIsTimesUp(true)
        if (diff >= 20) {
          setIsSpin(false);
          setIsTimerStart(true);
          setTotalDuration(10);
          setIsBetAble(true);
        } else {
          setInitialWaitingTime(diff);
          setIsSpin(true);
          // setShowInitialModal(true);
        }

        return
      }
    
  

      if (diff >= 20) {
        setIsSpin(false);
        setIsTimerStart(true);
        setTotalDuration(10);
        setIsBetAble(true);
      } else {
        setInitialWaitingTime(diff);
        setIsSpin(true);
        setShowInitialModal(true);
      }
    })
    // .catch(err=>{
    //   console.log('error',err)
    //   throw err
      
    // })
  }, []);



  useEffect(() => {
    echo
      .private(`UPDATE_USER_STATE_${window.user.id}`)
      .listen("UpdateUserStateEvent", (event) => {
      
        
        setUserBalance(event.balance);
        setTotalWin(event.total_win)
      });
    //public channel subscribed
    echo.channel("GLOBAL_STATE_CHANNEL").listen("SpinEvent", (event) => {
      globalStateUpdate(
        event,
        setIsDataFetch,
        setLuckyNumber,
        setShowInitialModal,
        isDataFetch,
        setHistory,
        luckyNumber,
        setWinningNumber2
      );

      // set History and time
      if (event.spinHistory) {
        setHistory([]);
        setCurrentTime([]);

        const slicedCurrentTime = event.spinHistory.slice(0, 7);
        const slicedHistory = event.spinHistory.slice(0, 7);

        const luckyNumber = [];
        const tempCurrentTime = [];

        slicedHistory.map((s) => {
          return luckyNumber.push(s.lucky_number);
        });
        setHistory(luckyNumber.reverse());

        slicedCurrentTime.map((t) => {
          const managedTime = new Date(t.created_at);

          const hours = managedTime.getHours();
          const minutes = managedTime.getMinutes();
          const formatedTime = `${hours}:${minutes}`;

          return tempCurrentTime.push(formatedTime);
        });
        setCurrentTime(tempCurrentTime.reverse());
      }
      
    });
  }, []);

  return (
    <div className={`${isSpin && "!cursor-not-allowed"} content-body w-full`}>
      {showInitialModal && <InitialLoading />}
      <Header />
      <div className="block mt-12 md:hidden w-[100%] mx-auto">
          <History/>
        </div>
      <AudioPlayer />
      <Home />
      <HomeLowerPart />
      <Toaster />     
    </div>
  );
};

export default HomePage;
