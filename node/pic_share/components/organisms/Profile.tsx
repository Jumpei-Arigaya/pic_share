import { useContext } from "react";
import { ModalContext } from "../../providers/ModalProvider";
import ProfileData from "../molecules/ProfileData";

const Profile = () => {
    const content = "2022年10月にアカウント開設しました!日常のできごとや趣味の写真を投稿しています！https://github.com/"

    return (
        <div className="flex shadow-lg p-1 w-96 h-96  bg-white">

            <div className="">
                <div className="m-5">
                    <ProfileData />
                </div>
                <hr className="m-1" />
                <p className="m-5">{content}</p>
            </div>
        </div>
    );
}

export default Profile;