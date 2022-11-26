import { useContext, useState } from 'react';
import axios from "axios"
import { FollowUsers } from "../../types/api/FollowUsers"
import { Users } from '../../types/api/Users';

export const useGetIsFollow = () => {
    const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL
    const [isFollow, setIsFollow] = useState<boolean>(false);
    const [followUsers, setFollowUsers] = useState<Array<FollowUsers>>();
    const [followerUsers, setFollowerUsers] = useState<Array<FollowUsers>>();

    const getIsFollow = (loginUser: Users, profileUserId: number) => {
        axios.get<Array<FollowUsers>>(`${SERVER_URL}api/follow_users`)
            .then(res => {
                if (res.data) {
                    (res.data.find(dt => dt.follower_user === loginUser?.id && dt.followered_user === profileUserId)) ?
                        (setIsFollow(true)) : (setIsFollow(false))
                }
            })
            .catch(() => console.log('データ取得に失敗しました'))
    }

    const getFollowList = (loginUser: Users) => {
        axios.get<Array<FollowUsers>>(`${SERVER_URL}api/follow_users`)
            .then(res => {
                if (res.data) {
                    setFollowUsers(res.data.filter((dt) => dt.follower_user === loginUser.id))
                    setFollowerUsers(res.data.filter((dt) => dt.followered_user === loginUser.id))
                }
            })
            .catch(() => console.log('データ取得に失敗しました'))
    }

    return { getIsFollow, isFollow, setIsFollow, getFollowList, followUsers, followerUsers }

}