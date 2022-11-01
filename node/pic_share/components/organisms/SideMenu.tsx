import Link from "next/link";
import HomeIcon from "../atoms/icon/HomeIcon";
import LogoutIcon from "../atoms/icon/LogoutIcon";
import ProfileIcon from "../atoms/icon/ProfileIcon";

const SideMenu = () => {
    return (
        <div className="max-h-screen bg-white shadow-lg m-2 p-1 w-50 min-w-min">
            <ul>
                <a href="/">
                    < li className="m-3 p-2 cursor-pointer text-3xl font-extrabold" >
                        PIC SHARE
                    </li >
                </a >
                <a href='/'>
                    <li className="flex m-4 p-2 hover:bg-slate-200 cursor-pointer">
                        <HomeIcon />
                        ホーム
                    </li>
                </a>
                <Link href='*'>
                    <li className="flex m-4  p-2 hover:bg-slate-200 cursor-pointer">
                        <ProfileIcon />
                        プロフィール
                    </li>
                </Link>
                <Link href='/accounts/login'>
                    <a><li className="flex m-4  p-2 hover:bg-slate-200 cursor-pointer">
                        <LogoutIcon />
                        ログアウト
                    </li></a>
                </Link>
            </ul >
        </div >
    );
}

export default SideMenu;