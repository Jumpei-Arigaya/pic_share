import React, { useContext, useState } from "react";
import Modal from "react-modal";
import { usePostModal } from "../../hooks/usePostModal";
import BasicButtons from "../atoms/BasicButtons";
import BackButton from "../atoms/icon/BackButton";
import ProfileData from "../molecules/ProfileData";
import PostList from "./PostList";

Modal.setAppElement('body')

export default function App() {

    const { modalState, modalClose } = usePostModal();
    const [content, setContent] = useState('');

    return (
        <div className="App">
            {modalState && (
                <div>
                    <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center fixed top-0 right-0 bottom-0 left-0">
                        <div className="bg-white h-[650px] w-[900px] rounded-md">
                            <div className="flex justify-between items-center h-[50px] border-b p-3">
                                <div onClick={() => modalClose()}>
                                    <BackButton />
                                </div>
                                <h1 className="text-center text-xl">新規投稿を作成</h1>
                                <p>SHARE</p>
                            </div>
                            <div className="grid grid-cols-3 h-[600px]">
                                <div className="col-span-2 flex justify-center items-center h-ful border-r">
                                    <input type="file" />
                                </div>
                                <div className="col-span-1 h-full border-b m-2">
                                    <div className="border">
                                        <ProfileData />
                                        <div className="flex justify-center">
                                            <textarea className="border-gray-400 border mt-7 w-60 h-20" placeholder="20文字までのコメントを入力" maxLength={20} wrap='soft' value={content} onChange={(e) => setContent(e.target.value)} />
                                        </div>
                                        <p className="text-end mt-3 text-gray-600">{content.length}/20</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div >
            )
            }
        </div >
    );
}
