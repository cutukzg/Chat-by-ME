
import { useContext } from "react";
import Avatar from "react-avatar";
import { NicknameContext } from "../App";


export const MyAvatar = () => {
    const {text} = useContext(NicknameContext)

    return (
        <>

            <Avatar name={text} size="50" className="br-100 b " />
        </>

    )
}