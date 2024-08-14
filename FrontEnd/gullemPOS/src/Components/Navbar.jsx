import profilePicture from '../Images/sziasLogo.png';

const Navbar = () => {
    return (
        <>
            <div className="navbar_container flex justify-between gap-2">
                <div className="navbar_search flex m-2 flex-1 relative ml-3">
                    <input
                        type="text"
                        className="search_input w-[53%] rounded-full border-2 border-gray-400 focus:outline-none focus:border-blue-600"
                        placeholder="Search..."
                    />
                    <i className="fa fa-search absolute text-[#a2a2a2] text-2xl left-3 top-1/2 transform -translate-y-1/2"></i>
                </div>


                <div className="navbar_userProfile flex items-center">
                    <i className="fa-regular fa-bell active:scale-90 text-3xl mr-6"></i>
                    <img className="w-16 h-16 rounded-full border" src={profilePicture} alt="User" />
                    <div className="ml-2 flex flex-col justify-center">
                        <span className="text-xl font-medium cursor-pointer select-none">Cy Gullem</span>
                        <span className="text-xs font-regular cursor-pointer">Front Cashier</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;