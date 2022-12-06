import { Post } from './../../types/api/Post';
import { LoadingContext } from '../../providers/LoadingProviders';
import { useCallback, useMemo, useState, useContext } from 'react';
import axios from 'axios';
import { FollowUsers } from '../../types/api/FollowUsers';
import { ProfileContext } from '../../providers/ProfileProviders';

// Django APIサーバーURL

export const useGetPosts = () => {
    const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL
    const [posts, setPosts] = useState<Array<Post>>([]);
    const [followPostsData, setFollowPostsData] = useState<Array<Post>>([]);
    const { setIsLoading } = useContext(LoadingContext);
    let followList: Array<FollowUsers> = []
    let followUserPosts: Array<Post> = []

    const getAllPostsData = useCallback(() => {
        // const res = await fetch(`${SERVERURL}api/posts/`);
        // const posts = await res.json();
        // return posts;

        setIsLoading(true);
        axios.get<Array<Post>>(`${SERVER_URL}api/posts/`)
            .then(res => {
                if (res.data) {
                    setPosts(res.data);
                }
            })
            .catch(() => console.log('データ取得に失敗しました')
            )
            .finally(() => setIsLoading(false)
            )
    }, [])

    const getFollowPostsData = useCallback(async (loginUserId: number) => {

        setIsLoading(true);
        await axios.get<Array<FollowUsers>>(`${SERVER_URL}api/follow_users`)
            .then(res => {
                followList = res.data
            })
            .catch(() => console.log('データ取得に失敗しました'))
        await axios.get<Array<Post>>(`${SERVER_URL}api/posts/`)
            .then(res => {
                res.data.map(post => {
                    for (let i = 0; i < followList.length; i++) {
                        if (followList[i].follower_user == loginUserId && followList[i].followered_user == post.users?.id) {
                            console.log('フォロー', followList[i].follower_user)
                            console.log('ログインユーザ', loginUserId)
                            console.log('フォローユーザー', followList[i].followered_user)
                            console.log('投稿', post.users?.id)
                            console.log('-------------------------------')
                            followUserPosts.push(post)
                            setPosts(followUserPosts)
                            break;
                        }
                    }
                })
            })
            .catch(() => console.log('データ取得に失敗しました')
            )
            .finally(() => setIsLoading(false)
            )
    }, [])

    return { getAllPostsData, getFollowPostsData, followUserPosts, posts }
}

