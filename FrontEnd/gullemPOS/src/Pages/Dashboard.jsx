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

            <h1>THIS IS DAHBOARD</h1>
        </>
    );
}

export default Dashboard;