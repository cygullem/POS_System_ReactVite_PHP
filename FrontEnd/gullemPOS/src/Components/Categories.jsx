const Categories = () => {
    return (
        <>
            <div className="categories_container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">

                <div className="category_item flex items-center h-20 p-4 rounded-lg hover:bg-blue-700 hover:shadow-lg active:scale-95 group select-none">
                    <div className="icon-container flex justify-center items-center w-12 h-12 bg-white rounded-lg">
                        <i className="fa-solid fa-bread-slice text-2xl transition duration-300 ease-in-out group-hover:text-blue-700 group-hover:rotate-[360deg]"></i>
                    </div>
                    <div className="text-container ml-4">
                        <h3 className="text-lg font-semibold group-hover:text-white">Breakfast</h3>
                        <p className="text-sm group-hover:text-white">12 Menu In Stock</p>
                    </div>
                </div>

                <div className="category_item flex items-center h-20 p-4 rounded-lg hover:bg-blue-700 hover:shadow-lg active:scale-95 group select-none">
                    <div className="icon-container flex justify-center items-center w-12 h-12 bg-white rounded-lg">
                        <i className="fas fa-hamburger text-2xl transition duration-300 ease-in-out group-hover:text-blue-700 group-hover:rotate-[360deg]"></i>
                    </div>
                    <div className="text-container ml-4">
                        <h3 className="text-lg font-semibold group-hover:text-white">Lunch</h3>
                        <p className="text-sm group-hover:text-white">12 Menu In Stock</p>
                    </div>
                </div>

                <div className="category_item flex items-center h-20 p-4 rounded-lg hover:bg-blue-700 hover:shadow-lg active:scale-95 group select-none">
                    <div className="icon-container flex justify-center items-center w-12 h-12 bg-white rounded-lg">
                        <i className="fa-solid fa-bowl-food text-2xl transition duration-300 ease-in-out group-hover:text-blue-700 group-hover:rotate-[360deg]"></i>
                    </div>
                    <div className="text-container ml-4">
                        <h3 className="text-lg font-semibold group-hover:text-white">Dinner</h3>
                        <p className="text-sm group-hover:text-white">12 Menu In Stock</p>
                    </div>
                </div>

                <div className="category_item flex items-center h-20 p-4 rounded-lg hover:bg-blue-700 hover:shadow-lg active:scale-95 group select-none">
                    <div className="icon-container flex justify-center items-center w-12 h-12 bg-white rounded-lg">
                        <i className="fa-solid fa-plate-wheat text-2xl transition duration-300 ease-in-out group-hover:text-blue-700 group-hover:rotate-[360deg]"></i>
                    </div>
                    <div className="text-container ml-4">
                        <h3 className="text-lg font-semibold group-hover:text-white">Soup</h3>
                        <p className="text-sm group-hover:text-white">12 Menu In Stock</p>
                    </div>
                </div>

                <div className="category_item flex items-center h-20 p-4 rounded-lg hover:bg-blue-700 hover:shadow-lg active:scale-95 group select-none">
                    <div className="icon-container flex justify-center items-center w-12 h-12 bg-white rounded-lg">
                        <i className="fa-solid fa-ice-cream text-2xl transition duration-300 ease-in-out group-hover:text-blue-700 group-hover:rotate-[360deg]"></i>
                    </div>
                    <div className="text-container ml-4">
                        <h3 className="text-lg font-semibold group-hover:text-white">Desserts</h3>
                        <p className="text-sm group-hover:text-white">12 Menu In Stock</p>
                    </div>
                </div>

                <div className="category_item flex items-center h-20 p-4 rounded-lg hover:bg-blue-700 hover:shadow-lg active:scale-95 group select-none">
                    <div className="icon-container flex justify-center items-center w-12 h-12 bg-white rounded-lg">
                        <i className="fa-solid fa-fish-fins text-2xl transition duration-300 ease-in-out group-hover:text-blue-700 group-hover:rotate-[360deg]"></i>
                    </div>
                    <div className="text-container ml-4">
                        <h3 className="text-lg font-semibold group-hover:text-white">Side  Dish</h3>
                        <p className="text-sm group-hover:text-white">12 Menu In Stock</p>
                    </div>
                </div>

                <div className="category_item flex items-center h-20 p-4 rounded-lg hover:bg-blue-700 hover:shadow-lg active:scale-95 group select-none">
                    <div className="icon-container flex justify-center items-center w-12 h-12 bg-white rounded-lg">
                        <i className="fa-solid fa-cheese text-2xl transition duration-300 ease-in-out group-hover:text-blue-700 group-hover:rotate-[360deg]"></i>
                    </div>
                    <div className="text-container ml-4">
                        <h3 className="text-lg font-semibold group-hover:text-white">Appetizer</h3>
                        <p className="text-sm group-hover:text-white">12 Menu In Stock</p>
                    </div>
                </div>

                <div className="category_item flex items-center h-20 p-4 rounded-lg hover:bg-blue-700 hover:shadow-lg active:scale-95 group select-none">
                    <div className="icon-container flex justify-center items-center w-12 h-12 bg-white rounded-lg">
                        <i className="fa-solid fa-champagne-glasses text-2xl transition duration-300 ease-in-out group-hover:text-blue-700 group-hover:rotate-[360deg]"></i>
                    </div>
                    <div className="text-container ml-4">
                        <h3 className="text-lg font-semibold group-hover:text-white">Beverages</h3>
                        <p className="text-sm group-hover:text-white">12 Menu In Stock</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Categories;