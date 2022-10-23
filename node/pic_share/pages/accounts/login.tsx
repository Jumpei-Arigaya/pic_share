import { SwipeableDrawer } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import BasicButtons from "../../components/atoms/BasicButtons";
import BasicTextFields from "../../components/atoms/BasicTextFields";
import SwipeableTextMobileStepper from "../../components/templates/ SwipeableTextMobileStepper";

const login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="py-6 sm:py-8 lg:py-12">
            <div className="bg-white max-w-lg border rounded-lg mx-auto">
                <div className="flex justify-center">
                    <SwipeableTextMobileStepper />
                </div>
                <h1 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mt-10 mb-4 md:mb-8">PIC SHARE</h1>
                <div className="flex justify-center">
                    <BasicTextFields value={email} onChange={setEmail}>メールアドレス</BasicTextFields>
                </div>
                <div className="flex justify-center">
                    <BasicTextFields value={password} onChange={setPassword}>パスワード</BasicTextFields>
                </div>
                <div className="flex justify-center m-4">
                    <BasicButtons link={"/"}>ログイン</BasicButtons>
                </div>
                <div className="flex justify-end m-4">
                    <span>アカウントをお持ちでないですか？</span>
                    <div className="text-blue-600">
                        <Link href="/">登録する</Link>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default login;