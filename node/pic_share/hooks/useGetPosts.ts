import { LoadingContext } from './../providers/LoadingProviders';
import { useCallback, useMemo, useState, useContext } from 'react';
import fetch from "node-fetch";
import axios from 'axios';
import { Post } from '../types/api/Post';

// Django APIサーバーURL

export const useGetPosts = () => {
    const SERVERURL: string = "http://127.0.0.1:8000/";
    const [posts, setPosts] = useState(<Array<Post>>[]);
    const { setIsLoading } = useContext(LoadingContext);

    const getAllPostsData = useCallback(() => {
        // const res = await fetch(`${SERVERURL}api/posts/`);
        // const posts = await res.json();
        // return posts;

        setIsLoading(true);
        axios.get<Array<Post>>(`${SERVERURL}api/posts/`)
            .then(res => {
                setPosts(res.data);
            })
            .catch(() => console.log('データ取得に失敗しました')
            )
            .finally(() => setIsLoading(false)
            )

    }, [])
    return { getAllPostsData, posts }
}


