import { useEffect, useState } from "react";


export const Nickname = ({ onChange }) => {
    const [text, setText] = useState("");

    useEffect(() => {
        onChange && onChange(text)
    }, [onChange, text])
    return (
        <input type="text" placeholder="Write your nickname" value={text} style={{ height: "50px" }} className="f4 dark-red b--dark-blue bw3 bg-light-blue" onChange={(e) => setText(e.target.value)} />




    )
}