import { useContext, useEffect, useState } from "react";
import { useGetAllUsers } from "../../hooks/api/useGetAllUsers";
import { LoginUserContext } from "../../providers/LoginUserProviders";
import { Users } from "../../types/api/Users";

const ProfileData = () => {
    const { id } = useContext(LoginUserContext);
    const { getAllUsers, users } = useGetAllUsers();
    useEffect(() => {
        getAllUsers()
    }, [])
    const loginUser: Users | undefined = users.find(user => user.id === id)

    return (
        <div className="flex">
            <div className="w-20 h-20 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                <img src={loginUser?.profile_image} className="w-full h-full object-cover object-center" />
            </div>
            <div className="ml-8">
                <span className="block text-indigo-500">{loginUser?.username}</span>
                <div className="mt-2">
                    <span className="block text-gray-400 text-sm">フォロー 12,321</span>
                    <span className="block text-gray-400 text-sm">フォロワー 14,242</span>
                </div>
            </div>
        </div>

    );
}

export default ProfileData;