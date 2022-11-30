import { useContext, useEffect } from "react";
import { useGetAllUsers } from "../../hooks/api/useGetAllUsers";
import { useGetIsFollow } from "../../hooks/api/useGetIsFollow";
import { useCheckAuth } from "../../hooks/useCheckAuth";
import { LoginUserContext } from "../../providers/LoginUserProviders";
import { ProfileUserContext } from "../../providers/ProfileUserProviders";
import FollowButtons from "../molecules/FollowButtons";
import ProfileData from "../molecules/ProfileData";

type Props = {
    profileUserId?: number;
    profileUsername?: string;
    profileUserImage?: string;
}

const Profile = ({ profileUserId, profileUsername, profileUserImage }: Props) => {
    const { getAllUsers, users } = useGetAllUsers();
    const { getIsFollow, isFollow } = useGetIsFollow();
    const { loginUser } = useContext(LoginUserContext);
    const { profileUser, setProfileUser } = useContext(ProfileUserContext);
    const { checkAuth } = useCheckAuth();

    useEffect(() => {
        getAllUsers();
    }, [])

    useEffect(() => {
        checkAuth(users)
        getIsFollow(loginUser?.id!, profileUser?.id!);
    }, [users])

    return (
        <div className="shadow-lg p-1 w-96 h-96 bg-white">
            <div>
                <div className="m-5 flex justify-between">
                    <ProfileData />
                    {loginUser?.id !== profileUser?.id && (
                        <FollowButtons />
                    )}
                </div>
                <hr className="m-1" />
                <p className="m-5">{profileUser?.introduction}</p>
            </div>
        </div>
    );
}

export default Profile;