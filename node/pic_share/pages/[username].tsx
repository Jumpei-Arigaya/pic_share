import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BackButton from "../components/atoms/icon/BackButton";
import Profile from "../components/organisms/Profile";
import Share from "../components/organisms/Share";
import SideMenu from "../components/organisms/SideMenu";
import { useGetPosts } from "../hooks/useGetPosts";


const UserProfile = () => {
    const router = useRouter();
    const { getAllPostsData, posts } = useGetPosts();
    useEffect(() => {
        getAllPostsData();
    }, [])
    const [modalIsOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Share modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
            <div className='grid grid-cols-3'>
                <div className='col-span-1 flex ml-1 sticky top-2'>
                    <SideMenu modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
                    <div className="m-4" onClick={() => router.back()}>
                        <BackButton />
                    </div>
                </div>
                <div className='col-span-1 flex justify-center mt-7'>
                    <Profile />
                </div>
            </div >
        </div>

    );
}

export default UserProfile;

