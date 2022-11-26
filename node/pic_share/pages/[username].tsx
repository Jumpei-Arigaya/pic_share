import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BackButton from "../components/atoms/icon/BackButton";
import Profile from "../components/organisms/Profile";
import Share from "../components/organisms/Share";
import SideMenu from "../components/organisms/SideMenu";
import { useGetAllUsers } from "../hooks/api/useGetAllUsers";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { Users } from "../types/api/Users";

const UserProfile = () => {
    const router = useRouter();
    const URL_PATH = router.query.username;
    const { getAllUsers, users } = useGetAllUsers();
    const { checkAuth } = useCheckAuth();

    useEffect(() => {
        getAllUsers()
    }, [])

    useEffect(() => {
        checkAuth(users)
    }, [users])

    const profileUser: Users | undefined = users.find(user => user.username === URL_PATH)

    return (
        <div>
            <div className='grid grid-cols-3'>
                <div className='col-span-1 flex ml-1 sticky top-2'>
                    <SideMenu />
                    <div className="m-4" onClick={() => router.back()}>
                        <BackButton />
                    </div>
                </div>
                <div className='col-span-1 flex justify-center mt-7'>
                    <Profile profileUserId={profileUser?.id} profileUsername={profileUser?.username} profileUserImage={profileUser?.profile_image} />
                </div>
                <Share />
            </div >
        </div >

    );
}

export default UserProfile;

