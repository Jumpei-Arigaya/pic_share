import { useContext, useEffect, useState } from "react";
import { useGetAllUsers } from "../../hooks/api/useGetAllUsers";
import { useGetIsFollow } from "../../hooks/api/useGetIsFollow";
import { useCheckAuth } from "../../hooks/useCheckAuth";
import { LoginUserContext } from "../../providers/LoginUserProviders";
import { ProfileContext } from "../../providers/ProfileProviders";
import { ProfileUserContext } from "../../providers/ProfileUserProviders";
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
    const { getIsFollow, getFollowList } = useGetIsFollow();
    const { loginUser } = useContext(LoginUserContext);
    const { profileUser, setProfileUser } = useContext(ProfileUserContext);
    const { isFollow, setIsFollow } = useContext(ProfileContext);
    const { checkAuth } = useCheckAuth();

    useEffect(() => {
        getAllUsers();
        getIsFollow(loginUser!, profileUser!);
        getFollowList(profileUser!);
    }, [])

    useEffect(() => {
        checkAuth(users)
    }, [users])

    return (
        <div className="shadow-lg p-1 w-96 h-96 bg-white">
            <div>
                <div className="m-5 flex justify-between">
                    <ProfileData />
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