import { useState } from "react"

export const Writecentar = (props) => {
    const [writeText, setWriteText] = useState("")
    const onSubmit = (e) => {
        e.preventDefault()
        setWriteText("")
        props.onSendMessage(writeText)
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input className="fl w-90 b--solid bw1 b--black h3"
                    onChange={(e) => setWriteText(e.target.value)}
                    value={writeText}
                    type="text"
                    placeholder="Enter your message and press ENTER"
                    autoFocus
                />
                <button className="fl w-10 h3 b--solid bw1 b--black f3">SEND</button>
            </form>
        </div>
    )
}