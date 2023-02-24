import "./App.css"
import { Signin } from './components/Signin';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Chat } from "./components/Chat";

export const App = () => {
  return (
    <Router>
      <div className="App" > 
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>

    </Router>

      
    

  )
}
