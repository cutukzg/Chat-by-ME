import Avatar from "react-avatar";
import "../App.css"

export const Messages = (props) => {
    const { messages, currentMember } = props;
    const renderMessage = (message) => {
        const { member } = message;
        const messageFromMe = member.id === currentMember.id;
        const className = messageFromMe ? "Messages-message currentMember" : "Messages-message";
        return (
            <li className={className} >
                <div >
                    <div ><Avatar name={member.clientData.username.text} size="50" className="br-100 b " /></div>
                    <br />
                    <div style={{ backgroundColor: "red", display: "inline-block", position: "" }} >{message.text}</div>
                </div>
            </li>
        );
    }
    return (
        <>
            <div className="fl w-100 " style={{ height: "850px", borderRadius: "8px", backgroundColor: "lightcyan", display: "flex", flexDirection: "column-reverse", overflow: "auto" }}>
                <ul >
                    {messages.map((m) => renderMessage(m))}
                </ul>
            </div>
        </>
    )
}
