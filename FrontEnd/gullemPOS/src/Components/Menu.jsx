import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddMenuModal from "./AddMenuModal";

const Menu = ({ category }) => {
    const [showAddMenuModal, setShowAddMenuModal] = useState(false);
    const [menuItems, setMenuItems] = useState([]);
    const [product, setProduct] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [viewList, setViewList] = useState(false);
    const [backButtonVisible, setBackButtonVisible] = useState(false);
    const [quantity, setQuantity] = useState(1); // Default quantity

    useEffect(() => {
        if (!category) return;

        // Reset view list and selected item on category change
        setViewList(false);
        setSelectedItem(null);
        setBackButtonVisible(false);

        const fetchMenuItems = async () => {
            try {
                const response = await axios.get(`http://localhost/PHPPOST-main/getProductByCategory.php?category=${category}`);
                const items = response.data;
                const consolidatedItems = items.reduce((acc, item) => {
                    const existingItem = acc.find(i => i.name === item.name);
                    if (existingItem) {
                        existingItem.price += item.price;
                    } else {
                        acc.push({ ...item });
                    }
                    return acc;
                }, []);
                setMenuItems(consolidatedItems);
            } catch (error) {
                console.error("Error fetching menu items:", error);
            }
        };

        fetchMenuItems();
    }, [category]);

    const fetchData = async (name) => {
        try {
            const res = await axios.get(`http://localhost/PHPPOST-main/productBy.php?name=${name}`);
            const newItems = res.data;
            setProduct(newItems);
            setViewList(true);
            setBackButtonVisible(true); // Show the back button
        } catch (error) {
            console.error("Error fetching data for selected item:", error);
        }
    };

    const handleItemClick = async (item) => {
        setSelectedItem(item.name);
        setViewList(true);

        console.log(item);

        // Send POST request with selected item data and quantity
        try {
            const response = await axios.post('http://localhost/PHPPOST-main/checkout.php', {
                name: item.name,
                sku: item.sku,
                category: item.category,
                price: item.price,
                quantity: 1,
                total: quantity * item.price
            });

            if (response.data.res === 'success') {
                alert('Item added to the order');
            } else {
                console.error("Failed to add item to order:", response.data.message);
            }
        } catch (error) {
            console.error("Error adding item to order:", error);
        }

        fetchData(item.name);
    };

    const handleBackButtonClick = () => {
        setViewList(false); // Reset to the initial view
        setSelectedItem(null); // Reset the selected item
        setBackButtonVisible(false); // Hide the back button
    };

    return (
        <>
            <div className="menu_container h-full overflow-auto">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-semibold">Menu</h1>
                    <button
                        className="flex items-center p-3 gap-3 text-sm rounded-lg bg-blue-700 active:scale-95 active:opacity-70 group transition duration-200 ease-in-out"
                        onClick={() => setShowAddMenuModal(true)}
                    >
                        <i className="fa-solid fa-utensils text-xl text-white group-hover:rotate-[360deg] transition duration-300 ease-in-out"></i>
                        <span className="text-white select-none">Add Menu</span>
                    </button>
                </div>

                {backButtonVisible && (
                    <button
                        className="flex items-center p-3 gap-3 text-sm rounded-lg bg-gray-700 text-white mt-4"
                        onClick={handleBackButtonClick}
                    >
                        <i className="fa-solid fa-arrow-left text-xl"></i>
                        <span className="select-none">Back</span>
                    </button>
                )}

                <div className="menu_items_container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-4 gap-4">
                    {!viewList ? (
                        menuItems.length > 0 ? (
                            menuItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="menu_items p-4 bg-white rounded-lg shadow-md cursor-pointer active:scale-95"
                                    onClick={() => fetchData(item.name)}
                                >
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <p className="text-gray-500">{item.category}</p>
                                    <p className="text-sm text-gray-700">{item.sku}</p>
                                    <p className="font-semibold">${item.price}</p>
                                </div>
                            ))
                        ) : (
                            <p>No menu items available for this category</p>
                        )
                    ) : (
                        product.length > 0 ? (
                            product.map((item) => (
                                <div
                                    key={item.id}
                                    className="menu_items p-4 bg-white rounded-lg shadow-md cursor-pointer active:scale-95"
                                    onClick={() => handleItemClick(item)}
                                >
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <p className="text-gray-500">{item.category}</p>
                                    <p className="text-sm text-gray-700">{item.sku}</p>
                                    <p className="font-semibold">${item.price}</p>
                                </div>
                            ))
                        ) : (
                            <p>No menu items available for this name</p>
                        )
                    )}
                </div>
            </div>

            {showAddMenuModal && <AddMenuModal isOpen={showAddMenuModal} closeModal={() => setShowAddMenuModal(false)} />}
        </>
    );
};

export default Menu;
