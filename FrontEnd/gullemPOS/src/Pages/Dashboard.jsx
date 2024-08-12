import React from 'react';
import '../CSS/main.css';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Categories from '../Components/Categories';
import Menu from '../Components/Menu';
import Invoice from '../Components/Invoice';

const Dashboard = () => {
    return (
        <div className="dashboard_container flex h-screen">
            <Sidebar />

            <div className="flex flex-1 overflow-hidden">
                <Navbar />

                <div className="menuContent flex flex-col flex-1 p-4 overflow-auto">
                    <Categories className="mb-4" />
                    <div className="flex flex-1">
                        <Menu className="flex-3 mr-4" />
                        <Invoice className="flex-1 bg-white p-4 rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
