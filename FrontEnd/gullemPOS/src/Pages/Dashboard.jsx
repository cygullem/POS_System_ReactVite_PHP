import React from 'react';
import '../CSS/main.css';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Categories from '../Components/Categories';
import BreakfastMenu from '../Components/BreakfastMenu';
import Invoice from '../Components/Invoice';

const Dashboard = () => {
    return (
        <div className="dashboard_container flex h-screen">
            <div className="flex flex-col flex-1 overflow-hidden">
                <Navbar />

                <div className="menuContent h-full flex p-4 gap-4 overflow-auto">
                    <div className="flex flex-col flex-1">
                        <Categories className="mb-4" />
                        <BreakfastMenu className="mr-4" />
                    </div>
                    <Invoice className="flex-1 bg-white p-4 rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
