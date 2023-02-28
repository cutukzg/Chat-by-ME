import { MyAvatar } from "./MyAvatar"

export const Header = ({ nickname }) => {

    return (
        <><div className="bg-blue fl w-60 f3" style={{ height: "50px", textAlign: "center", padding: "10px" }}>
            Have a nice chat
        </div>
            <div className="bg-light-blue fl w-40 " style={{ height: "50px", textAlign: "center", padding: "10px" }}>
                <MyAvatar text={nickname} />
            </div>



        </>
    )
}