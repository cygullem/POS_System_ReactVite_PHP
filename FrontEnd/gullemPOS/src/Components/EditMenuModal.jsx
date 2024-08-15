import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, Toaster } from 'sonner';

const EditMenuModal = ({ isOpen, closeModal, product }) => {
    if (!isOpen || !product) return null;

    const [category, setCategory] = useState(product.category || '');
    const [name, setName] = useState(product.name || '');
    const [sku, setSku] = useState(product.sku || '');
    const [price, setPrice] = useState(product.price || '');
    const [error, setError] = useState('');

    const update = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post('http://localhost/PHPPOST-main/editProduct.php', {
                id: product.id,
                name,
                sku,
                category,
                price
            });

            console.log('Response:', response.data);

            if (response.data.res === 'success') {
                toast.success('Menu updated successfully');
                setTimeout(() => {
                    location.reload();
                }, 2000);
                closeModal();
            } else {
                setError(`Failed to update menu: ${response.data.message}`);
            }
        } catch (error) {
            console.error('Error updating menu:', error);
            setError('An error occurred. Please try again.');
        }
    };

    useEffect(() => {
        setCategory(product.category || '');
        setName(product.name || '');
        setSku(product.sku || '');
        setPrice(product.price || '');
    }, [product]);

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-[35%] relative">
                <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 text-black p-2 rounded-full hover:bg-gray-200"
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <h2 className="text-xl font-semibold mb-4">Edit Menu</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={update}>
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
                            Update Menu
                        </button>
                    </div>
                </form>
            </div>

            <Toaster richColors expand={true} position="top-right" closeButton />
        </div>
    );
};

export default EditMenuModal;
