import React from 'react';
import '../CSS/main.css';
import Navbar from '../Components/Navbar';
import Categories from '../Components/Categories';
import Menu from '../Components/Menu';
import Invoice from '../Components/Invoice';

const Dashboard = () => {
    return (
        <div className="dashboard_container flex h-screen">
            <div className="flex flex-col flex-1 overflow-hidden">
                <Navbar />

                <div className="menuContent h-full flex p-4 gap-4 overflow-auto">
                    <div className="flex flex-col flex-1">
                        <Categories className="mb-4" />
                        <Menu className="mr-4" />
                    </div>
                    <Invoice className="flex-1 rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
