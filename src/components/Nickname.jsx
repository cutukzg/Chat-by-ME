import { useContext} from "react";
import { NicknameContext } from "../App";



export const Nickname = () => {
    
    const {setText} = useContext(NicknameContext)

   
    return (
        <input type="text" placeholder="Write your nickname"  style={{ height: "50px" }} className="f4 dark-red b--dark-blue bw3 bg-light-blue" onChange={(e) => setText(e.target.value)} />

    )
}