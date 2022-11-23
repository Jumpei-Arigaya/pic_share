import { useContext, useEffect } from "react";
import { useGetAllUsers } from "../../hooks/api/useGetAllUsers";
import { useCheckAuth } from "../../hooks/useCheckAuth";
import { LoginUserContext } from "../../providers/LoginUserProviders";
import { Users } from "../../types/api/Users";
import FollowUserIcon from "../atoms/icon/FollowUserIcon";
import UnFollowUserIcon from "../atoms/icon/UnFollowUserIcon";
import ProfileData from "../molecules/ProfileData";

const Profile = () => {
    const { getAllUsers, users } = useGetAllUsers();
    const { checkAuth } = useCheckAuth();
    const { id } = useContext(LoginUserContext)

    useEffect(() => {
        checkAuth();
        getAllUsers();
    }, [])

    const loginUser: Users | undefined = users.find(user => user.id === id)
    const isFollow = true;

    return (
        <div className="shadow-lg p-1 w-96 h-96 bg-white">
            <div>
                <div className="m-5 flex justify-between">
                    <ProfileData />
                    {isFollow ? (
                        <FollowUserIcon />
                    ) : (
                        <UnFollowUserIcon />
                    )}
                </div>
                <hr className="m-1" />
                <p className="m-5">{loginUser?.introduction}</p>
            </div>
        </div>
    );
}

export default Profile;