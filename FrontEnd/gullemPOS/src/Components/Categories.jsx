const Categories = ({ onCategorySelect }) => {
    const categories = [
        { name: 'Breakfast', icon: 'fa-bread-slice' },
        { name: 'Lunch', icon: 'fa-hamburger' },
        { name: 'Dinner', icon: 'fa-bowl-food' },
        { name: 'Soup', icon: 'fa-plate-wheat' },
        { name: 'Desserts', icon: 'fa-ice-cream' },
        { name: 'Side Dish', icon: 'fa-fish-fins' },
        { name: 'Appetizer', icon: 'fa-cheese' },
        { name: 'Beverages', icon: 'fa-champagne-glasses' },
    ];

    return (
        <div className="categories_container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            {categories.map((category) => (
                <div
                    key={category.name}
                    className="category_item flex items-center h-20 p-4 rounded-lg hover:bg-blue-700 hover:shadow-lg active:scale-95 group select-none"
                    onClick={() => onCategorySelect(category.name)} // Pass selected category name
                >
                    <div className="icon-container flex justify-center items-center w-12 h-12 bg-white rounded-lg">
                        <i className={`fa-solid ${category.icon} text-2xl transition duration-300 ease-in-out group-hover:text-blue-700 group-hover:rotate-[360deg]`}></i>
                    </div>
                    <div className="text-container ml-4">
                        <h3 className="text-lg font-semibold group-hover:text-white">{category.name}</h3>
                        <p className="text-sm group-hover:text-white">12 Menu In Stock</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Categories;
