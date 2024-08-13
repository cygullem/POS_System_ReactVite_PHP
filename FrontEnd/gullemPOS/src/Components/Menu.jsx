const Menu = () => {
    return (
        <>
            <div className="menu_container h-full overflow-auto">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-semibold">Breakfast Menu</h1>
                    <button className="text-2xl font-medium btn btn-success active:scale-95">Add Menu</button>
                </div>
                <div className="menu_items_container grid grid-cols-3 mt-4 gap-4">
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

export default Menu;