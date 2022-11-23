import { Users } from "../../types/api/Users";
import ProfileData from "../molecules/ProfileData";

const SideProfile = () => {
    return (
        <div className="flex justify-center items-center bg-slate-50 shadow-lg p-1 w-64 h-64 sticky top-4 rounded-xl">
            <ProfileData />
        </div >
    );
}

export default SideProfile;