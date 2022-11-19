import axios from 'axios';
import { useState, useCallback } from 'react';


export const useGetAllUsers = () => {
    const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL
    const [users, setUsers] = useState();

    const getAllUsers = useCallback(() => {
        axios.get(`${SERVER_URL}api/users`)
            .then(res => setUsers(res.data))
            .catch(() => console.log('データ取得に失敗しました'))
    }, [])
    return { users, getAllUsers }

}