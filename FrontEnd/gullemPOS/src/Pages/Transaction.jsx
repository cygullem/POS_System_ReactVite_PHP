import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";

const Transaction = () => {
    const [transactions, setTransactions] = useState([]);
    const [dailyTotals, setDailyTotals] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");
    const [time, setTime] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost/PHPPOST-main/fetchTransaction.php');
                const data = response.data;
                setTransactions(data);
                console.log(data);

                const groupedByDay = data.reduce((acc, transaction) => {
                    const date = new Date(transaction.time).toDateString();
                    if (!acc[date]) {
                        acc[date] = { total: 0, products: [] };
                    }
                    acc[date].total += parseFloat(transaction.price);
                    setTime(transaction.time)
                    acc[date].products.push({
                        id: transaction.transaction_id,
                        date: transaction.time,
                        products: JSON.parse(transaction.products)
                    });
                    return acc;
                }, {});

                const dailyTotalsArray = Object.keys(groupedByDay).map(date => ({
                    date,
                    total: groupedByDay[date].total,
                    products: groupedByDay[date].products
                }));

                setDailyTotals(dailyTotalsArray);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const openModal = (date) => {
        const dataForDate = dailyTotals.find(item => item.date === date);
        setModalData(dataForDate ? dataForDate.products : []);
        setSelectedDate(date);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const formatTime = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }); // Format as 'HH:MM:SS'
    };


    return (
        <>
            <Navbar />
            <div className="transaction_container h-full w-full p-4">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        {/* head */}
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Amount Per Day</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {dailyTotals.map((day) => (
                                <tr key={day.date}>
                                    <td className="px-6 py-4 whitespace-nowrap">{new Date(day.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{day.total.toFixed(2)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button className="text-blue-500 hover:text-blue-700" onClick={() => openModal(day.date)}>See Details</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Custom Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeModal}>
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl max-h-[80vh] overflow-auto" onClick={e => e.stopPropagation()}>
                        <h2 className="text-2xl font-bold mb-4">Total order on {new Date(selectedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</h2>
                        <button onClick={closeModal} className="absolute z-50 top-0 right-[-2rem] text-black"><i class="fa-solid fa-xmark"></i></button>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Amount</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {modalData.flatMap(transaction =>
                                    transaction.products.map(product => (
                                        <tr key={product.id} className="hover hover:bg-slate-200">
                                            <td className="px-6 py-4 whitespace-nowrap">{product.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{product.quantity}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{product.total}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{formatTime(time)}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </>
    );
};

export default Transaction;
