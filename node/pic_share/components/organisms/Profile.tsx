import { useContext, useEffect, useState } from "react";
import { useGetAllUsers } from "../../hooks/api/useGetAllUsers";
import { useGetIsFollow } from "../../hooks/api/useGetIsFollow";
import { useCheckAuth } from "../../hooks/useCheckAuth";
import { LoginUserContext } from "../../providers/LoginUserProviders";
import { Users } from "../../types/api/Users";
import FollowUserIcon from "../atoms/icon/FollowUserIcon";
import UnFollowUserIcon from "../atoms/icon/UnFollowUserIcon";
import ProfileData from "../molecules/ProfileData";

type Props = {
    profileUserId?: number;
    profileUsername?: string;
    profileUserImage?: string;
}

const Profile = ({ profileUserId, profileUsername, profileUserImage }: Props) => {
    const { getAllUsers, users } = useGetAllUsers();
    const { getIsFollow, isFollow, setIsFollow, getFollowList, followUsers, followerUsers } = useGetIsFollow();
    const { loginUser } = useContext(LoginUserContext);
    const [profileUser, setProfileUser] = useState<Users | null>();
    const { checkAuth } = useCheckAuth();

    useEffect(() => {
        getAllUsers();
        getIsFollow(loginUser!, profileUserId!);
        getFollowList(loginUser!);
    }, [])

    useEffect(() => {
        checkAuth(users)
        setProfileUser(users.find(user => user.id === loginUser?.id))
    }, [users])

    return (
        <div className="shadow-lg p-1 w-96 h-96 bg-white">
            <div>
                <div className="m-5 flex justify-between">
                    <ProfileData profileUsername={profileUser?.username} profileUserImage={profileUser?.profile_image} />
                    {isFollow ? (
                        <div onClick={() => setIsFollow(!isFollow)}>
                            <UnFollowUserIcon />
                        </div>
                    ) : (
                        <div onClick={() => setIsFollow(!isFollow)}>
                            <FollowUserIcon />
                        </div>
                    )}
                </div>
                <hr className="m-1" />
                <p className="m-5">{profileUser?.introduction}</p>
            </div>
        </div>
    );
}

export default Profile;