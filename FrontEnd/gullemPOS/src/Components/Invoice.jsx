import { useEffect, useState } from "react";
import axios from 'axios';

const Invoice = () => {
    const [activeMethod, setActiveMethod] = useState('CreditCard');
    const [data, setData] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [totalPayment, setTotalPayment] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost/PHPPOST-main/fetchCheckout.php');
                console.log("Fetched data:", res.data);
                if (Array.isArray(res.data)) {
                    setData(res.data);
                } else {
                    console.error("Unexpected data format:", res.data);
                }
            } catch (error) {
                console.error("Error fetching checkout data:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const calculateTotals = () => {
            if (Array.isArray(data)) {
                let newSubtotal = 0;
                data.forEach(item => {
                    newSubtotal += parseFloat(item.total);
                });

                const newDiscount = parseFloat(discount);

                setSubtotal(newSubtotal.toFixed(2));
                setDiscount(newDiscount.toFixed(2));
                setTotalPayment((newSubtotal - newDiscount).toFixed(2));
            } else {
                console.error("Data is not an array:", data);
            }
        };

        calculateTotals();
    }, [data, discount]);

    const handleQuantityChange = async (index, delta) => {
        const updatedData = [...data];
        const newQuantity = parseInt(updatedData[index].quantity) + delta;
        if (newQuantity >= 0) {
            const itemId = updatedData[index].id;
            const itemPrice = parseFloat(updatedData[index].price);

            try {
                const res = await axios.put('http://localhost/PHPPOST-main/updateQuantity.php', {
                    id: itemId,
                    quantity: newQuantity
                });

                console.log("Server response:", res.data);

                if (res.data.message === "Quantity and total updated successfully") {
                    updatedData[index].quantity = newQuantity;
                    updatedData[index].total = (itemPrice * newQuantity).toFixed(2);
                    setData(updatedData);
                } else {
                    console.error("Update failed:", res.data.message);
                }
            } catch (error) {
                console.error("Error updating quantity:", error);
            }
        }
    };

    const handlePurchase = async () => {
        try {
            const checkoutData = JSON.stringify(data);
            const totalPrice = parseFloat(subtotal) - parseFloat(discount);

            const res = await axios.post('http://localhost/PHPPOST-main/purchase.php', {
                checkoutData: checkoutData,
                totalPrice: totalPrice
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (res.data.message === "Transaction completed and checkout data cleared successfully") {
                console.log("Purchase successful:", res.data.message);
                alert('Successfully Purchase')
                window.location.reload()
            } else {
                console.error("Purchase failed:", res.data.message);
            }
        } catch (error) {
            console.error("Error completing purchase:", error);
        }
    };

    return (
        <div className="invoice_container max-w-[25rem] rounded-lg flex flex-col justify-between p-3">
            <h1 className="text-3xl font-medium">Invoice</h1>
            <div className="meals border h-full p-2">
                {data.length > 0 ? (
                    data.map((item, index) => (
                        <div key={item.id} className="flex justify-between mb-2">
                            <div>
                                <h4 className="text-lg font-semibold">{item.name}</h4>
                                <p className="text-sm text-gray-600">{item.sku}</p>
                            </div>
                            <div className="flex items-center">
                                <button
                                    className="bg-red-500 text-white px-2 rounded"
                                    onClick={() => handleQuantityChange(index, -1)}
                                >
                                    -
                                </button>
                                <span className="mx-2">{item.quantity}</span>
                                <button
                                    className="bg-green-500 text-white px-2 rounded"
                                    onClick={() => handleQuantityChange(index, 1)}
                                >
                                    +
                                </button>
                            </div>
                            <span className="font-bold">${parseFloat(item.total).toFixed(2)}</span>
                        </div>
                    ))
                ) : (
                    <p>No items in the invoice.</p>
                )}
            </div>

            {/* Payment summary and methods */}
            <div className="invoice_payment_summary border p-3 rounded-lg bg-white shadow-lg flex flex-col justify-between">
                <div>
                    <h2 className="text-lg font-bold mb-2">Payment Summary</h2>
                    <div className="flex justify-between text-lg mb-2">
                        <span>Sub Total</span>
                        <span className="font-bold">${subtotal}</span>
                    </div>
                    <div className="flex justify-between text-lg mb-2">
                        <span>Discount</span>
                        <span className="font-bold">${discount}</span>
                    </div>
                    <div className="border-b border-dashed border-gray-400 mb-2"></div>
                    <div className="flex justify-between text-md font-bold">
                        <span>Total Payment</span>
                        <span>${totalPayment}</span>
                    </div>
                </div>

                <div className="payment_methods bg-gray-100 p-2 mt-2 rounded-lg flex justify-around items-center">
                    {/* Payment methods code */}
                    <button
                        className={`flex flex-col items-center justify-center active:scale-95 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${activeMethod === 'CreditCard' ? 'bg-white text-blue-600' : 'bg-gray-200'}`}
                        onClick={() => setActiveMethod('CreditCard')}
                    >
                        <i className={`fa-solid fa-credit-card text-2xl mb-1 ${activeMethod === 'CreditCard' ? 'text-blue-600' : ''}`}></i>
                        <span className={`text-sm font-semibold ${activeMethod === 'CreditCard' ? 'text-blue-600' : ''}`}>Credit Card</span>
                    </button>
                    <button
                        className={`flex flex-col items-center justify-center active:scale-95 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${activeMethod === 'Paylater' ? 'bg-white text-blue-600' : 'bg-gray-200'}`}
                        onClick={() => setActiveMethod('Paylater')}
                    >
                        <i className={`fa-solid fa-file-invoice text-2xl mb-1 ${activeMethod === 'Paylater' ? 'text-blue-600' : ''}`}></i>
                        <span className={`text-sm font-semibold ${activeMethod === 'Paylater' ? 'text-blue-600' : ''}`}>Paylater</span>
                    </button>
                    <button
                        className={`flex flex-col items-center justify-center active:scale-95 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${activeMethod === 'CashPayout' ? 'bg-white text-blue-600' : 'bg-gray-200'}`}
                        onClick={() => setActiveMethod('CashPayout')}
                    >
                        <i className={`fa-solid fa-dollar-sign text-2xl mb-1 ${activeMethod === 'CashPayout' ? 'text-blue-600' : ''}`}></i>
                        <span className={`text-sm font-semibold ${activeMethod === 'CashPayout' ? 'text-blue-600' : ''}`}>Cash Payout</span>
                    </button>
                </div>

                <button
                    className="mt-2 bg-blue-600 text-white text-lg font-bold py-3 rounded-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 group"
                    onClick={handlePurchase}
                >
                    <i className="fa-solid fa-sack-dollar transition duration-300 ease-in-out group-hover:rotate-[360deg]"></i>
                    <span className="ml-2">Confirm Payment</span>
                </button>
            </div>
        </div>
    );
};

export default Invoice;
