import { useContext, useEffect, useState } from "react";
import { useGetAllUsers } from "../../hooks/api/useGetAllUsers";
import { LoginUserContext } from "../../providers/LoginUserProviders";
import { Users } from "../../types/api/Users";
import ProfileData from "../molecules/ProfileData";

const SideProfile = () => {
    const { loginUser } = useContext(LoginUserContext);
    const { getAllUsers, users } = useGetAllUsers();
    const [profileUser, setProfileUser] = useState<Users>();
    useEffect(() => {
        getAllUsers()
    }, [])

    useEffect(() => {
        setProfileUser(users.find(user => user.id === loginUser!.id))

    }, [users])


    return (
        <div className="flex justify-center items-center bg-slate-50 shadow-lg p-1 w-64 h-64 sticky top-4 rounded-xl">
            <ProfileData profileUsername={profileUser?.username} profileUserImage={profileUser?.profile_image} />
        </div >
    );
}

export default SideProfile;