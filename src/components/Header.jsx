import { useContext } from "react"
import { useNavigate } from "react-router"
import { NicknameContext } from "../App"
import { MyAvatar } from "./MyAvatar"

export const Header = () => {
    const { text } = useContext(NicknameContext)
    const navigate = useNavigate()
    const button = text ? undefined : <button className="br-pill f3 b fl ph2 grow-large" onClick={() => navigate("/")}>Login</button>

    return (
        <>
            <div className="bg-blue fl w-60 f2" style={{ height: "70px", textAlign: "center", padding: "10px" }}>
                {button}    Have a nice chat
            </div>
            <div className="bg-light-blue fl w-40 " style={{ height: "70px", padding: "10px" }}>
                <MyAvatar text={text} />
            </div>
        </>
    )
}