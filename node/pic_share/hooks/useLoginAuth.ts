import { useGetAllUsers } from './api/useGetAllUsers';
import { useContext, useCallback } from 'react';
import { LoginUserContext } from '../providers/LoginUserProviders';
import { useRouter } from 'next/router';

type Props = {
    email: string;
    password: string;
}

export const useLoginAuth = ({ email, password }: Props) => {
    const router = useRouter();
    const { id, setId } = useContext(LoginUserContext);
    const { users, getAllUsers } = useGetAllUsers();

    const loginAuth = useCallback(() => {
        getAllUsers();
        // const newId = users.find((user) => user.email === email)
        setId(2);
        router.push('/')
    }, [])
    return { loginAuth, id }
}