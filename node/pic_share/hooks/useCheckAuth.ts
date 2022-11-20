import { useState } from 'react';
import { useEffect } from 'react';
import { LoginUserContext } from './../providers/LoginUserProviders';
import { useContext } from 'react';
import router from 'next/router';
import { useCallback } from 'react';
import { Users } from '../types/api/Users';

export const useCheckAuth = () => {
    const { id, localStrageId, setLocalStrageId } = useContext(LoginUserContext);

    const checkAuth = useCallback(() => {
        const defaultAuthInfo: number = JSON.parse(localStorage.getItem("loginUser") as string)
        // 以下エラー？
        // setLocalStrageId(defaultAuthInfo);
        if (!id && !localStrageId) {
            router.replace('/accounts/login')
        }
    }, [])
    return { checkAuth, localStrageId }
}