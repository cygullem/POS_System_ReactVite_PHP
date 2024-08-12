const Menu = () => {
    return (
        <>
            <div className="menu_container h-full overflow-auto">
                <h1 className="text-3xl font-semibold">Breakfast Menu</h1>
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