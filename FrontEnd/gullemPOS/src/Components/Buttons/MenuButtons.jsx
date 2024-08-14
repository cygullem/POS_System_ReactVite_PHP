const MenuButtons = () => {
    return (
        <>
            <button className="flex items-center p-3 gap-3 text-sm rounded-lg bg-blue-700 active:scale-95 active:opacity-70 group transition duration-200 ease-in-out">
                <i class="fa-solid fa-utensils text-xl text-white group-hover:rotate-[360deg] transition duration-300 ease-in-out"></i>
                <span className="text-white select-none">
                    Add Menu
                </span>
            </button>
        </>
    );
}

export default MenuButtons;