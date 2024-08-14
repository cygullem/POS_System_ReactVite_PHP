const DinnerMenu = () => {
    return (
        <>
            <div className="menu_container h-full overflow-auto">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-semibold">Dinner Menu</h1>
                    <button className="flex items-center p-3 gap-3 text-sm rounded-lg bg-blue-700 active:scale-95 active:opacity-70 group transition duration-200 ease-in-out">
                        <i class="fa-solid fa-utensils text-xl text-white group-hover:rotate-[360deg] transition duration-300 ease-in-out"></i>
                        <span className="text-white select-none">
                            Add Menu
                        </span>
                    </button>
                </div>
                <div className="menu_items_container grid grid-cols-3 mt-4 gap-4">
                    <div className="menu_items rounded-lg cursor-pointer active:scale-95"></div>
                    <div className="menu_items rounded-lg cursor-pointer active:scale-95"></div>
                    <div className="menu_items rounded-lg cursor-pointer active:scale-95"></div>
                    <div className="menu_items rounded-lg cursor-pointer active:scale-95"></div>
                    <div className="menu_items rounded-lg cursor-pointer active:scale-95"></div>
                    <div className="menu_items rounded-lg cursor-pointer active:scale-95"></div>
                    <div className="menu_items rounded-lg cursor-pointer active:scale-95"></div>
                    <div className="menu_items rounded-lg cursor-pointer active:scale-95"></div>
                    <div className="menu_items rounded-lg cursor-pointer active:scale-95"></div>
                </div>
            </div>
        </>
    );
}

export default DinnerMenu;