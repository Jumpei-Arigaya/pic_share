import { useCallback, useMemo, useState } from 'react';
import fetch from "node-fetch";
import axios from 'axios';
import { Post } from '../types/api/Post';

// Django APIサーバーURL

export const useGetPosts = () => {
    const SERVERURL: string = "http://127.0.0.1:8000/";
    const [posts, setPosts] = useState(<Array<Post>>[]);
    const getAllPostsData = useCallback(() => {
        // const res = await fetch(`${SERVERURL}api/posts/`);
        // const posts = await res.json();
        // return posts;

        axios.get<Array<Post>>(`${SERVERURL}api/posts/`)
            .then(res => {
                setPosts(res.data);
            })
            .catch(() => alert()
            )

    }, [])
    return { getAllPostsData, posts }
}


