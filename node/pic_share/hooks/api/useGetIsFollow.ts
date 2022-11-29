import { FollowUsers } from './../../types/api/FollowUsers';
import { ProfileContext, ProfileUserContext } from '../../providers/ProfileProviders';
import { useContext, useState } from 'react';
import axios from "axios"
import { Users } from '../../types/api/Users';

export const useGetIsFollow = () => {
    const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL
    const { isFollow, setIsFollow } = useContext(ProfileContext);

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

    const userFollow = (followerUser: number, followeredUser: number) => {
        axios.post(`${SERVER_URL}api/follow_users/`, {
            follower_user: followerUser,
            followered_user: followeredUser
        })
            .then(res => console.log(res.data))
            .catch(() => console.log('postエラー'))
    }

    const userUnFollow = (followId: number) => {
        axios.delete(`${SERVER_URL}api/follow_users/${followId}`, {
        })
            .then(res => console.log(res.data))
            .catch(() => console.log('deleteエラー'))
    }
    return { getIsFollow, userFollow, userUnFollow }

}