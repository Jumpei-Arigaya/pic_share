import { createContext, Dispatch, SetStateAction, useState } from "react";
import { FollowUsers } from "../types/api/FollowUsers";

export type ProfileUserContextType = {
    isFollow: boolean | null,
    setIsFollow: Dispatch<SetStateAction<boolean | null>>,
    followUsers: FollowUsers | null,
    setFollowUsers: Dispatch<SetStateAction<FollowUsers | null>>,
    followerUsers: FollowUsers | null,
    setFollowerUsers: Dispatch<SetStateAction<FollowUsers | null>>,
    followUsersCount: number | null,
    setFollowUsersCount: Dispatch<SetStateAction<number | null>>,
}

type Props = {
    children: React.ReactNode;
}

export const ProfileContext = createContext<ProfileUserContextType>({} as ProfileUserContextType);
export const ProfileProvider = ({ children }: Props) => {
    const [isFollow, setIsFollow] = useState<boolean | null>(false);
    const [followUsers, setFollowUsers] = useState<FollowUsers | null>(null);
    const [followerUsers, setFollowerUsers] = useState<FollowUsers | null>(null);
    const [followUsersCount, setFollowUsersCount] = useState<number | null>(null);

    return (
        <ProfileContext.Provider value={{ isFollow, setIsFollow, followUsers, setFollowUsers, followerUsers, setFollowerUsers, followUsersCount, setFollowUsersCount }}>
            {children}
        </ProfileContext.Provider>
    )
}

