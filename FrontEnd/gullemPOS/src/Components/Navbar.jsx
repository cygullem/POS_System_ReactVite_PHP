import profilePicture from '../Images/sziasLogo.png';

const Navbar = () => {
    return (
        <>
            <div className="navbar_container flex justify-between gap-2">
                <div className="navbar_search flex-1"></div>

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