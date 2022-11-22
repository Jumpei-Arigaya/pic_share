import { LoginUserContext } from './../providers/LoginUserProviders';
import { useContext } from 'react';
import router from 'next/router';
import { useCallback } from 'react';

export const useCheckAuth = () => {
    const { id, setId } = useContext(LoginUserContext);
    const checkAuth = useCallback(() => {
        const defaultAuthInfo: number = JSON.parse(localStorage.getItem("loginUser") as string)
        if (!id) {
            if (defaultAuthInfo) {
                setId(defaultAuthInfo)
                console.log(`ローカルストレージIDは${defaultAuthInfo}`)
            } else {
                router.replace('/accounts/login')
            }
        }
    }, [])
    return { checkAuth }
}