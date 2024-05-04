import React, { useContext, useState } from "react";
import { IoMdRefresh } from "react-icons/io";

import axios from "axios";
import toast from "react-hot-toast";
import { ColorRing } from "react-loader-spinner";
import { BetContext } from "../../ContextApi/BetContext";
import CountDown from "./CountDown";
import History from "./History";


const url = "https://1ten365.online/api/check-balance";
const token=localStorage.getItem('token')

const Header = () => {
  const { userBalance,setUserBalance } = useContext(BetContext);
  const [isLoading,setIsLoading]=useState(false)

  return (
    <div className="header  py-2 px-2">
      <div className="left-header">
        <span className="user-title flex items-center gap-2">
          <p>USER:</p>
          <p>{window.user.name}</p>
        </span>
        <h3 className="balance-tag text-base font-bold text-[#4a2700]">Balance</h3>
        <div className="balance-details  bg-[#4a2700] px-2 py-1 rounded-md">
          {userBalance === 0 && <span> PUB:0</span>}
          {userBalance !== 0 && <span className="flex items-center text-white"> PUB:{userBalance} 
          {
            isLoading ? (<ColorRing
              visible={true}
              height="26"
              width="26"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
              />) :(
              <IoMdRefresh onClick={()=>{
                setIsLoading(true)
                axios({
                  url: url,
                  method: "POST",
                  headers: {
                    Accept: "Application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    Authorization: `Bearer ${window.TOKEN}`,
                  }
                }).then(res=>{
                 if(res?.data?.msg==='success'){
                  setUserBalance(res?.data?.balance)
                  toast.success('Balance Updated',{
                    id:'balance',
                    position:"top-left"
                  })
                  setIsLoading(false)
                 }
                }
                )
              }} className="text-2xl mx-2 text-gray-300 font-bold cursor-pointer hover:text-gray-400 focus:text-red-400"/>
            )
          }
          
          </span>}
        </div>
      </div>
      <div className="hidden md:block lg:hidden w-[100%] mx-auto">
          <History/>
        </div>
      <div className="hidden lg:block">
        <CountDown />
      </div>

      <div className="hidden lg:block">
        <History />
      </div>
      <div className="block lg:hidden">
        <CountDown />
      </div>
    </div>
  );
};

export default Header;
