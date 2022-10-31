import { useCallback, useMemo, useState } from 'react';
import fetch from "node-fetch";
import axios from 'axios';

// Django APIサーバーURL

type Posts = {
    id?: number;
    users_id?: number;
    content?: string;
}

export const useGetPosts = () => {
    const SERVERURL: string = "http://0.0.0.0:8000/";
    const [posts, setPosts] = useState(<Array<Posts>>[]);
    const getAllPostsData = useCallback(async () => {
        // const res = await fetch(`${SERVERURL}api/posts/`);
        // const posts = await res.json();
        // return posts;

        axios.get<Array<Posts>>("http://localhost:8000/api/posts/")
            .then(res => {
                setPosts(res.data);
            })
            .catch(() => alert()
            )

    }, [])
    return { getAllPostsData, posts }
}


