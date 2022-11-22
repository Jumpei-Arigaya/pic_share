import { useState } from 'react';
import { useContext, useCallback } from 'react';
import { LoginUserContext } from '../providers/LoginUserProviders';
import { useRouter } from 'next/router';
import { Users } from '../types/api/Users';
import axios from 'axios';

export const useLoginAuth = () => {
    const { id, setId } = useContext(LoginUserContext);
    const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL
    const [users, setUsers] = useState<Array<Users>>([]);
    const router = useRouter();

    const loginAuth = useCallback((email: string, password: string) => {
        axios.get<Array<Users>>(`${SERVER_URL}api/users`)
            .then(res => {
                if (res.data) {
                    const usersData = res.data
                    const loginUser = usersData.find(user => user.email === email && user.password === password)
                    if (loginUser?.id) {
                        setId(loginUser.id)
                        localStorage.clear()
                        const loginUserStringfy = JSON.stringify(loginUser.id);
                        window.localStorage.setItem("loginUser", loginUserStringfy)
                        router.push('/')
                    } else {
                        alert('ユーザー情報なし')
                    }
                }
            })
            .catch(() => alert('ログイン失敗'))
    }, [])
    return { loginAuth, id }
}