import React from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Categories from '../Components/Categories';
import Invoice from '../Components/Invoice';
import Menu from '../Components/Menu';

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Categories />
            <Menu />
            <Invoice />

            <h1 className="text-3xl font-semibold text-blue-500 cursor-pointer">THIS IS DASHBOARD</h1>
        </>
    );
}

export default Dashboard;