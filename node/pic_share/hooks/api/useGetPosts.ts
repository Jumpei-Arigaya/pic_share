import { LoadingContext } from '../../providers/LoadingProviders';
import { useCallback, useMemo, useState, useContext } from 'react';
import fetch from "node-fetch";
import axios from 'axios';
import { Post } from '../../types/api/Post';

// Django APIサーバーURL

export const useGetPosts = () => {
    const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL
    const [posts, setPosts] = useState<Array<Post>>([]);
    const { setIsLoading } = useContext(LoadingContext);

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
    return { getAllPostsData, posts }
}


