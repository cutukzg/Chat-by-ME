import { Header } from "./Header"
import { Messages } from "./Messagecentar"
import { Writecentar } from "./Writecentar"
import { useState, useEffect, useContext } from "react"
import { NicknameContext } from "../App";

export const Chat = () => {
  const [messages, setMessages] = useState([]);
  const { text } = useContext(NicknameContext)
  const [member, setMember] = useState({
    username: { text }
  });

  const [drone] = useState(() => new window.Scaledrone("CIz5u7gVJDZzwXlH", {
    data: member
  }))

  useEffect(() => {
    drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      const updatedMember = { ...member };
      updatedMember.id = drone.clientId;
      setMember(updatedMember);
    });

    const room = drone.subscribe("observable-room");
    room.on('data', (data, member) => {
      setMessages(prevMessages => [...prevMessages, { member, text: data }]);
    });

  }, [drone, member]);

  const onSendMessage = (message) => {
    drone.publish({
      room: "observable-room",
      message
    });
  }
  return (
    <>
      <Header />
      <Messages messages={messages}
        currentMember={member} />
      <Writecentar onSendMessage={onSendMessage} />
    </>
  )
}