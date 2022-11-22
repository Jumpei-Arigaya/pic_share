import { Post } from "../../types/api/Post";
import GoodIcon from "../atoms/icon/GoodIcon";

const Post = ({ users_id, created_at, content }: Post) => {
    return (
        <div className="w-[350px] h-[550px] shadow-2xl bg-white">
            <div className="flex flex-col overflow-hidden">
                <div className="flex items-center gap-2 m-4">
                    <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64" loading="lazy" alt="Photo by Brock Wegner" className="w-full h-full object-cover object-center" />
                    </div>
                    <div>
                        <span className="block text-indigo-500">{users_id}</span>
                    </div>
                </div>
                <div className="flex justify-center">
                    <a className="group w-[300px] h-[370px] block bg-gray-100 overflow-hidden relative mt-1">
                        <img src="https://source.unsplash.com/random/" loading="lazy" alt="Photo by Minh Pham" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
                    </a>
                </div>
                <div className="flex flex-col flex-1 p-4 sm:p-6">
                    <p className="text-gray-500 mb-4">{content}</p>
                    <div className="flex justify-end items-end mt-auto">
                        <GoodIcon />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Post;