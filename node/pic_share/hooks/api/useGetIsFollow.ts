import { FollowUsers } from './../../types/api/FollowUsers';
import { ProfileContext, ProfileUserContext } from '../../providers/ProfileProviders';
import { useContext, useState } from 'react';
import axios from "axios"
import { FollowUsers } from "../../types/api/FollowUsers"
import { Users } from '../../types/api/Users';

export const useGetIsFollow = () => {
    const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL
    const { isFollow, setIsFollow } = useContext(ProfileContext);
    const { followUsers, setFollowUsers } = useContext(ProfileContext);
    const { followerUsers, setFollowerUsers } = useContext(ProfileContext);
    const { followUsersCount, setFollowUsersCount } = useContext(ProfileContext);

    const getIsFollow = (loginUser: Users, profileUser: Users) => {
        axios.get<Array<FollowUsers>>(`${SERVER_URL}api/follow_users`)
            .then(res => {
                if (res.data) {
                    (res.data.find(dt => dt.follower_user === loginUser?.id && dt.followered_user === profileUser.id)) ?
                        (setIsFollow(true)) : (setIsFollow(false))
                }
            })
            .catch(() => console.log('データ取得に失敗しました'))
    }

    const getFollowList = (profileUser: Users) => {
        axios.get<Array<FollowUsers>>(`${SERVER_URL}api/follow_users`)
            .then(res => {
                if (res.data) {
                    const a = (res.data.filter((dt) => dt.follower_user === 1) as FollowUsers)
                    setFollowUsers(a)
                    // setFollowerUsers(res.data.filter((dt) => dt.followered_user === 1))
                    console.log(followUsers)
                }
            })
            .catch(() => console.log('データ取得に失敗しました'))
    }

    return { getIsFollow, getFollowList }

}