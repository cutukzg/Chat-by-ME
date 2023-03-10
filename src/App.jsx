import "./App.css"
import { Signin } from './components/Signin';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Chat } from "./components/Chat";
import { createContext, useState } from "react";

export const NicknameContext = createContext()
export const App = () => {
  const [text, setText] = useState("");
  return (
    <Router>
      <div className="App" >
        <NicknameContext.Provider value={{ text, setText }}>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </NicknameContext.Provider>
      </div>
    </Router>
  )
}
