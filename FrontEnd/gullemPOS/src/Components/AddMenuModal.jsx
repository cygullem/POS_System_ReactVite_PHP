import React from 'react';

const AddMenuModal = ({ isOpen, closeModal }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-[35%] relative">
                <div onClick={closeModal} className="bg-white text-black  h-[35px] w-[35px] flex items-center justify-center p-2 rounded-[50%] active:scale-90 absolute top-0 right-[-2.5rem] group">
                    <i class="fa-solid fa-xmark group-hover:rotate-[360deg] transition duration-300 ease-in-out"></i>
                </div>
                <h2 className="text-xl font-semibold mb-4">Add New Menu</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Category</label>
                        <select
                            className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                            <option value="">Select Category</option>
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner">Dinner</option>
                            <option value="soup">Soup</option>
                            <option value="deserts">Desserts</option>
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
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Stock Keeping Unit</label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Price</label>
                        <input
                            type="number"
                            className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>
                    <div className="flex justify-end">

                        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg active:scale-95">
                            Add Menu
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMenuModal;
