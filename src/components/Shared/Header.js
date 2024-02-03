import React, { useContext } from "react";
import { BetContext } from "../../ContextApi/BetContext";
import CountDown from "./CountDown";
import History from "./History";

const Header = () => {
  const { userBalance } = useContext(BetContext);

  return (
    <div className="header">
      <div className="left-header">
        <span className="user-title">
          USER:<p>{window.user.name}</p>
        </span>
        <h3 className="balance-tag">Balance</h3>
        <div className="balance-details">
          {userBalance === 0 && <span> PUB:0</span>}
          {userBalance !== 0 && <span> PUB:{userBalance}</span>}
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
