const Navbar = () => {
    return (
        <>
            <div className="navbar_container flex justify-between gap-2">
                <div className="navbar_search border flex-1 p-4"></div>
                <div className="navbar_userProfile border p-4"></div>
            </div>
        </>
    );
}

export default Navbar;