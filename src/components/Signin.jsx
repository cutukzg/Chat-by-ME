import { useState } from "react";
import LOGO from "../images/chat-logo.png"
import { Link } from "react-router-dom";
import { Nickname } from "./Nickname";
import { MyAvatar } from "./MyAvatar";

export const Signin = () => {
    const stringArray = ["Hello!", "How are you ? ", "What are you doing ? ", "How old are you ? ", "Nice to meet you!", "Where do you live ? "]
    const [randomString, setRandomString] = useState("")
    const [nickname] = useState("")

    const setImage = (e) => {
        setRandomString(stringArray[Math.floor(Math.random() * stringArray.length)]);
    }
    return (
        <>
            <div style={{ textAlign: "center", width: "768px", maxWidth: "100%", margin: "0 auto", padding: "50px 0" }}>
                <h2 style={{ textAlign: "center" }} className="f1"> Welcome to Chat by ME</h2>
                <br />
                <br />
                <br />
                <img src={LOGO} style={{ height: "200px" }} alt="Chat LOGO" className="grow dim" onClick={setImage} />
                <br />
                <br />
                <br />
                <div className="b ">{randomString}</div>
                <br />
                <br />
                <Nickname />
                <MyAvatar text={nickname} />
                <br /><br /><br />
                <Link to="/chat">
                    <button className="b dark-red br4 bg-light-blue bw3 b--dark-blue grow" style={{ height: "40px", width: "100px" }} >Sign in</button>
                </Link>
            </div>
        </>
    )
}

