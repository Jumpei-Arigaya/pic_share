const ProfileData = () => {
    return (
        <div className="flex">
            <div className="w-20 h-20 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64" loading="lazy" alt="Photo by Brock Wegner" className="w-full h-full object-cover object-center" />
            </div>
            <div className="ml-8">
                <span className="block text-indigo-500">有ケ谷 純平</span>
                <div className="mt-2">
                    <span className="block text-gray-400 text-sm">フォロー 12,321</span>
                    <span className="block text-gray-400 text-sm">フォロワー 14,242</span>
                </div>
            </div>
        </div>

    );
}

export default ProfileData;