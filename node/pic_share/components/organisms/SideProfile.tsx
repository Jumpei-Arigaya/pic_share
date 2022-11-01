import Link from "next/link";

const SideProfile = () => {
    return (
        <div className="max-h-screen bg-white shadow-lg m-2 p-1 w-50 min-w-min">
            <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64" loading="lazy" alt="Photo by Brock Wegner" className="w-full h-full object-cover object-center" />
            </div>
            <div>
                <span className="block text-indigo-500">有ケ谷</span>
                <span className="block text-gray-400 text-sm">July 19, 2021</span>
            </div>
        </div>
    );
}

export default SideProfile;