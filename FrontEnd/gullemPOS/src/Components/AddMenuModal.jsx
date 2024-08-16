import React, { useState } from 'react';
import axios from 'axios';
import { toast, Toaster } from 'sonner';

const AddMenuModal = ({ isOpen, closeModal }) => {
    if (!isOpen) return null;

    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [sku, setSku] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState('');

    const add = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post('http://localhost/PHPPOST-main/addProduct.php', {
                name,
                sku,
                category,
                price
            });

            console.log('Response:', response.data);

            if (response.data.res === 'success') {
                toast.success('Menu added successfully');
                setTimeout(() => {
                    location.reload();
                }, 2000);
                closeModal();
            } else {
                setError(`Failed to add menu: ${response.data.message}`);
            }
        } catch (error) {
            console.error('Error adding menu:', error);
            toast.error('Error adding menu:', error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-[35%] relative">
                <button
                    onClick={closeModal}
                    className="absolute flex items-center justify-center h-[40px] w-[40px] top-0 right-[-3rem] text-black p-2 rounded-[50%] bg-white group"
                >
                    <i className="fa-solid fa-xmark transition duration-300 ease-in-out group-hover:rotate-[360deg]"></i>
                </button>
                <h2 className="text-xl font-semibold mb-4">Add New Menu</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={add}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Category</label>
                        <select
                            className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">Select Category</option>
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner">Dinner</option>
                            <option value="soup">Soup</option>
                            <option value="desserts">Desserts</option>
                            <option value="sidedish">Sidedish</option>
                            <option value="appetizer">Appetizer</option>
                            <option value="beverages">Beverages</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Menu Name</label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Stock Keeping Unit</label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            value={sku}
                            onChange={(e) => setSku(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Price</label>
                        <input
                            type="number"
                            className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg active:scale-95">
                            Add Menu
                        </button>
                    </div>
                </form>
            </div>

            <Toaster richColors expand={true} position="top-right" closeButton />
        </div>
    );
};

export default AddMenuModal;
