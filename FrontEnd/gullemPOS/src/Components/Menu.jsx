import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddMenuModal from "./AddMenuModal";
import EditMenuModal from './EditMenuModal';
import DeleteMenuModal from './DeleteMenuModal';
import { toast, Toaster } from 'sonner';
import Meals from '../Images/meals.png';

const Menu = ({ category }) => {
    const [showAddMenuModal, setShowAddMenuModal] = useState(false);
    const [showEditMenuModal, setShowEditMenuModal] = useState(false);
    const [showDeleteMenuModal, setShowDeleteMenuModal] = useState(false);
    const [menuItems, setMenuItems] = useState([]);
    const [product, setProduct] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [viewList, setViewList] = useState(false);
    const [backButtonVisible, setBackButtonVisible] = useState(false);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (!category) return;

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
                toast.error("Error fetching menu items.");
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
            setBackButtonVisible(true);
        } catch (error) {
            toast.error("Error fetching data for selected item.");
        }
    };

    const handleItemClick = async (item) => {
        setSelectedItem(item.name);
        setViewList(true);

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
                toast.success('Item added to the order');
                setTimeout(() => {
                    location.reload();
                }, 2000);
            } else {
                toast.error("Failed to add item to order.");
            }
        } catch (error) {
            toast.error("Error adding item to order.");
        }

        fetchData(item.name);
    };

    const handleBackButtonClick = () => {
        setViewList(false);
        setSelectedItem(null);
        setBackButtonVisible(false);
    };

    const handleEditClick = (item) => {
        setSelectedItem(item);
        setShowEditMenuModal(true);
    };

    const handleDeleteClick = (item) => {
        setSelectedItem(item); 
        setShowDeleteMenuModal(true); 
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
                                    className="menu_items flex flex-col p-3 bg-white rounded-lg shadow-md cursor-pointer active:scale-95"
                                    onClick={() => fetchData(item.name)}
                                >
                                    <div className='flex gap-2 mb-1'>
                                        <img src={Meals} alt="Meals" className="w-[100px] h-[100px] rounded-xl" />
                                        <div>
                                            <h3 className="text-md font-medium">{item.name}</h3>
                                            <p className="text-gray-500">{item.category}</p>
                                            <p className='text-xs text-gray-400 text-wrap'>Delicious, satisfying, and perfectly seasoned, this meal was pure bliss!</p>
                                        </div>
                                    </div>
                                    <div className='flex items-end justify-between h-full mt-4'>
                                        <p className="text-gray-700">{item.sku}</p>
                                        <p className="text-3xl text-blue-700 font-semibold">${item.price.toFixed(2)}</p>
                                    </div>
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
                                    className="menu_items flex flex-col justify-between relative p-4 bg-white rounded-lg shadow-md"
                                >
                                    <i className="fa-regular fa-circle-check text-2xl font-medium absolute top-0 right-1 cursor-pointer active:scale-95 hover:text-green-500"
                                        onClick={() => handleItemClick(item)}>
                                    </i>
                                    <div className='flex gap-2 mb-1'>
                                        <img src={Meals} alt="Meals" className="w-[110px] h-[110px] rounded-xl" />
                                        <div>
                                            <h3 className="text-md font-medium">{item.name}</h3>
                                            <p className="text-gray-500">{item.sku}</p>
                                            <p className='text-xs text-gray-400 text-wrap'>Delicious, satisfying, and perfectly seasoned, this meal was pure bliss!</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between mt-2'>
                                        <p className="text-3xl text-blue-700 font-semibold">${item.price.toFixed(2)}</p>
                                        <div className='flex items-end justify-between gap-2'>
                                            <i
                                                className="fa-solid fa-pen-to-square text-xl text-yellow-500 cursor-pointer"
                                                onClick={() => handleEditClick(item)}
                                            ></i>
                                            <i
                                                className="fa-solid fa-trash-can text-xl text-red-500 cursor-pointer"
                                                onClick={() => handleDeleteClick(item)}
                                            ></i>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No menu items available for this name</p>
                        )
                    )}
                </div>

                <Toaster richColors expand={true} position="top-center" closeButton />
            </div>

            {showAddMenuModal && <AddMenuModal isOpen={showAddMenuModal} closeModal={() => setShowAddMenuModal(false)} />}
            {showEditMenuModal && <EditMenuModal isOpen={showEditMenuModal} closeModal={() => setShowEditMenuModal(false)} product={selectedItem} />}
            {showDeleteMenuModal && <DeleteMenuModal isOpen={showDeleteMenuModal} closeModal={() => setShowDeleteMenuModal(false)} item={selectedItem} />}  {/* Pass the selected item */}
        </>
    );
};

export default Menu;
