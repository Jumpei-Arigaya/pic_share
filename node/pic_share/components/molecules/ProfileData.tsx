import { useContext, useState } from "react";
import { ProfileContext } from "../../providers/ProfileProviders";
import { ProfileUserContext } from "../../providers/ProfileUserProviders";
import { FollowUsers } from "../../types/api/FollowUsers";

const ProfileData = () => {
    const { profileUser } = useContext(ProfileUserContext);
    const { followUsersCount } = useContext(ProfileContext);
    return (
        <div className="flex">
            <div className="w-20 h-20 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                <img src={profileUser?.profile_image} className="w-full h-full object-cover object-center" />
            </div>
            <div className="ml-8">
                <span className="block text-indigo-500">{profileUser?.username}</span>
                <div className="mt-2">
                    <span className="block text-gray-400 text-sm">{`フォロー ${followUsersCount}`}</span>
                    <span className="block text-gray-400 text-sm">{`フォロワー 3`}</span>
                </div>
            </div>
        </div>

    );
}

export default ProfileData;