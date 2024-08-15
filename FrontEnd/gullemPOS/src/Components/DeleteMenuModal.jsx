import React from 'react';
import { toast, Toaster } from 'sonner';
import axios from 'axios';

const DeleteMenuModal = ({ isOpen, closeModal, item }) => {
    if (!isOpen) return null;

    const handleDelete = async () => {
        try {
            const response = await axios.post('http://localhost/PHPPOST-main/deleteProduct.php', { id: item.id });
            if (response.data.res === 'success') {
                toast.success("Product deleted successfully.");
                setTimeout(() => {
                    location.reload();
                }, 2000);
                closeModal();
            } else {
                toast.error("Failed to delete product.");
            }
        } catch (error) {
            toast.error("Error deleting product.");
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
                <h2 className="text-2xl font-semibold mb-4">Delete Product</h2>
                <p>Are you sure you want to delete this item?: <br /> <br />
                    <span>Name: {item.name}</span> <br />
                    <span>Category: {item.category}</span> <br />
                    <span>SKU: {item.sku}</span> <br />
                    <span>Price: {item.price}</span> 
                </p>
                <div className="flex justify-end mt-6 gap-4">
                    <button
                        className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded"
                        onClick={closeModal}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>

            <Toaster richColors expand={true} position="top-right" closeButton />
        </div>
    );
};

export default DeleteMenuModal;
