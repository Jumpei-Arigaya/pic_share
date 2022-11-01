
const PostList = () => {
    return (
        <div>
            <div className="w-80 m-2">
                <div className="flex flex-col bg-white border rounded-lg overflow-hidden">
                    <a href="#" className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
                        <img src="https://source.unsplash.com/random" loading="lazy" alt="Photo by Minh Pham" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
                    </a>
                    <div className="flex flex-col flex-1 p-4 sm:p-6">
                        <p className="text-gray-500 mb-8">content</p>
                        <div className="flex justify-between items-end mt-auto">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64" loading="lazy" alt="Photo by Brock Wegner" className="w-full h-full object-cover object-center" />
                                </div>
                                <div>
                                    <span className="block text-indigo-500">Mike Lane</span>
                                    <span className="block text-gray-400 text-sm">July 19, 2021</span>
                                </div>
                            </div>
                            <span className="text-gray-500 text-sm border rounded px-2 py-1">Article</span>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default PostList;