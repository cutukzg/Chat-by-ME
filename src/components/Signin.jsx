import Avatar from "react-avatar"
import { useState } from "react";
import LOGO from "../images/chat-logo.png"




export const Signin = () => {
    const [inputNickname, setInputNickname] = useState("");
    const [setMyArray] = useState([" ", "Hello!", "How are you ? ", "What are you doing ? ", "How old are you ? ", "Nice to meet you!", "Where do you live ? "])
    const chatText = setMyArray[Math.floor(Math.random() * setMyArray.length)]
    const [newText, setNewText] = useState(setMyArray[Math.floor(Math.random() * setMyArray.length)])
    console.log(chatText)
    return (
        <>

            <div style={{ textAlign: "center", width: "768px", maxWidth: "100%", margin: "0 auto", padding: "50px 0" }}>
                <h2 style={{ textAlign: "center" }} className="f1"> Welcome to Chat by ME</h2>
                <br />
                <br />
                <br />

                <img src={LOGO} style={{ height: "200px" }} alt="Chat LOGO" className="grow dim" onClick={() => setNewText(newText + 1)} />

                <br />
                <br />
                <br />
                <div className="b ">{setMyArray[newText]}</div>
                <br />
                <br />
                <input type="text" placeholder="Write your nickname" style={{ height: "50px", placeholder: { color: "#ffb700" } }} className="f4 dark-red b--dark-blue bw3 bg-light-blue" onChange={(e) => setInputNickname(e.target.value)} />
                <br /><br /><br />

                <Avatar name={inputNickname} size="50" className="br-100 b " />
                <br /><br /><br />

                <button className="b dark-red br4 bg-light-blue bw3 b--dark-blue grow" style={{ height: "40px", width: "100px" }}>Submit</button>
            </div>

        </>
    )
}