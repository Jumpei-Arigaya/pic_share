import { useState } from "react";
import { FollowUsers } from "../../types/api/FollowUsers";

type Props = {
    profileUsername?: string;
    profileUserImage?: string;
    followUsers?: FollowUsers;
    followerUsers?: FollowUsers;
}

const ProfileData = ({ profileUsername, profileUserImage, followUsers, followerUsers }: Props) => {

    return (
        <div className="flex">
            <div className="w-20 h-20 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                <img src={profileUserImage} className="w-full h-full object-cover object-center" />
            </div>
            <div className="ml-8">
                <span className="block text-indigo-500">{profileUsername}</span>
                <div className="mt-2">
                    <span className="block text-gray-400 text-sm">{`フォロー 1`}</span>
                    <span className="block text-gray-400 text-sm">{`フォロワー 3`}</span>
                </div>
            </div>
        </div>

    );
}

export default ProfileData;