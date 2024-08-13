const SideDishMenu = () => {
    return (
        <>
            <div className="menu_container h-full overflow-auto">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-semibold">SideDish Menu</h1>
                    <button className="flex items-center p-2 gap-3 text-sm rounded-lg bg-white active:scale-95 group">
                        <i class="fa-solid fa-utensils text-xl group-hover:text-blue-700"></i>
                        Add Menu
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

export default SideDishMenu;


