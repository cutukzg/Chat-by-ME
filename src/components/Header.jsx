import { useContext } from "react"
import { NicknameContext } from "../App"
import { MyAvatar } from "./MyAvatar"


export const Header = () => {
    const {text} = useContext(NicknameContext)

    return (
        <>
        <div className="bg-blue fl w-60 f2" style={{ height: "70px", textAlign: "center", padding: "10px" }}>
            Have a nice chat
        </div>
            <div className="bg-light-blue fl w-40 " style={{ height: "70px", padding: "10px" }}>
                <MyAvatar text={text} />
            </div>



        </>
    )
}