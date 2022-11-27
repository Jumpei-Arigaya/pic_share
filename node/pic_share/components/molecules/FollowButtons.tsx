import { useContext } from "react";
import { ProfileContext } from "../../providers/ProfileProviders";
import FollowUserIcon from "../atoms/icon/FollowUserIcon";
import UnFollowUserIcon from "../atoms/icon/UnFollowUserIcon";

const FollowButtons = () => {
    const { isFollow, setIsFollow } = useContext(ProfileContext);
    return (
        <div>
            {isFollow ? (
                <div onClick={() => setIsFollow(!isFollow)}>
                    <UnFollowUserIcon />
                </div>
            ) : (
                <div onClick={() => setIsFollow(!isFollow)}>
                    <FollowUserIcon />
                </div>
            )}
        </div>
    );
}

export default FollowButtons;