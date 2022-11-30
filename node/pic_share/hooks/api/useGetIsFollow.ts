import { LoadingContext } from './../../providers/LoadingProviders';
import { FollowUsers } from './../../types/api/FollowUsers';
import { ProfileContext, ProfileUserContext } from '../../providers/ProfileProviders';
import { useContext, useState } from 'react';
import axios from "axios"
import { Users } from '../../types/api/Users';

export const useGetIsFollow = () => {
    const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL
    const { isFollow, setIsFollow } = useContext(ProfileContext);
    const [followList, setFollowList] = useState<Array<FollowUsers>>();
    const [deleteUser, setDeleteUser] = useState<FollowUsers>();
    const { isLoading, setIsLoading } = useContext(LoadingContext);

    const getIsFollow = (loginUserId: number, profileUserId: number) => {
        axios.get<Array<FollowUsers>>(`${SERVER_URL}api/follow_users`)
            .then(res => {
                setFollowList(res.data);
                if (followList) {
                    (followList.find(dt => dt.follower_user === loginUserId && dt.followered_user === profileUserId)) ?
                        (setIsFollow(true)) : (setIsFollow(false))
                }
            })
            .catch(() => console.log('データ取得に失敗しました'))
    }

    const userFollow = (followerUser: number, followeredUser: number) => {
        setIsLoading(true)
        axios.post(`${SERVER_URL}api/follow_users/`, {
            follower_user: followerUser,
            followered_user: followeredUser
        })
            .then(res => {
                console.log(res.data)
                setIsFollow(true)
            })
            .catch(() => console.log('postエラー'))
            .finally(() => setIsLoading(false))
    }

    const userUnFollow = async (followerUser: number, followeredUser: number) => {
        getIsFollow(followerUser, followeredUser)
        await setDeleteUser(followList?.find(list => list.follower_user === followerUser && list.followered_user === followeredUser))
        await console.log(deleteUser)
        await axios.delete(`${SERVER_URL}api/follow_users/${deleteUser?.id}`, {
        })
            .then(res => {
                console.log(res.data)
                setIsFollow(false)
            })
            .catch(() => console.log('deleteエラー'))
    }
    return { isFollow, getIsFollow, userFollow, userUnFollow }

}