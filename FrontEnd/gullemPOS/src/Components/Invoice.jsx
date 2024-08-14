import { useState } from "react";

const Invoice = () => {
    const [activeMethod, setActiveMethod] = useState('CreditCard');

    return (
        <>
            <div className="invoice_container rounded-lg flex flex-col justify-between">
                <h1 className="text-3xl font-medium">Invoice</h1>
                <div className="meals border h-full">

                </div>
                <div className="invoice_payment_summary border p-3 rounded-lg bg-white shadow-lg flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-bold mb-2">Payment Summary</h2>
                        <div className="flex justify-between text-lg mb-2">
                            <span>Sub Total</span>
                            <span className="font-bold">$131.2</span>
                        </div>
                        <div className="flex justify-between text-lg mb-2">
                            <span>Tax</span>
                            <span className="font-bold">$5.2</span>
                        </div>
                        <div className="border-b border-dashed border-gray-400 mb-2"></div>
                        <div className="flex justify-between text-lg font-bold">
                            <span>Total Payment</span>
                            <span>$136.4</span>
                        </div>
                    </div>

                    <div className="payment_methods bg-gray-100 p-2 mt-2 rounded-lg flex justify-around items-center">
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

                    <button className="mt-2 bg-blue-600 text-white text-lg font-bold py-3 rounded-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 group">
                        <i class="fa-solid fa-sack-dollar transition duration-300 ease-in-out group-hover:rotate-[360deg]"></i>
                        <span className="ml-2">Place An Order</span>
                    </button>
                </div>

            </div>
        </>
    );
}

export default Invoice;