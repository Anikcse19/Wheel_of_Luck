import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import { BetContext, BetContextProvider } from "./ContextApi/BetContext";
import "./utils/socket";
import { useContext, useEffect, useRef } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BetContextProvider>
      <HomePage />
    </BetContextProvider>
  );
}

export default App;
