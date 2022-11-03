import { useRouter } from "next/router";
import { useEffect } from "react";
import BackButton from "../components/atoms/icon/BackButton";
import Profile from "../components/organisms/Profile";
import SideMenu from "../components/organisms/SideMenu";
import { useGetPosts } from "../hooks/useGetPosts";

const UserProfile = () => {
    const router = useRouter();
    const { getAllPostsData, posts } = useGetPosts();
    useEffect(() => {
        getAllPostsData();
    }, [])
    console.log(posts)

    return (
        <div className='grid grid-cols-3'>
            <div className='col-span-1 flex ml-1 sticky top-2'>
                <SideMenu />
                <div className="m-3" onClick={() => router.back()}>
                    <BackButton />
                </div>
            </div>
            <div className='col-span-1 flex justify-center'>
                <Profile />
            </div>
        </div >

    );
}

export default UserProfile;

