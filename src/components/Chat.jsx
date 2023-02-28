import { Header } from "./Header"
import { Messagecentar } from "./Messagecentar"
import { ServerMesagecentar } from "./Servermessagecentar"
import { Writecentar } from "./Writecentar"


export const Chat = () => {
  return (
    <>
      <Header />
      <Messagecentar />
      <ServerMesagecentar />
      <Writecentar />
    </>
  )
}