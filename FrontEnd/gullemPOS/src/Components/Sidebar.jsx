import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState('Dashboard');

    return (
        <div className="sidebar flex flex-col items-center">
            <div className="sidebar_header rounded-xl flex items-center justify-center mt-2 mb-10 group">
                <i className="fa-brands fa-slack transition duration-300 ease-in-out group-hover:rotate-[360deg]"></i>
            </div>
            <div className="header_body flex justify-center items-start flex-1 mt-4 mb-4">
                <ul className="sidebar_links flex flex-col gap-2">
                    <NavLink to="/" className={({ isActive }) => `flex justify-center items-center w-full ${isActive ? 'text-white' : 'hover:text-white'}`}>
                        <li className={`relative p-3 flex justify-center active:scale-90 rounded-lg group ${activeItem === 'Dashboard' ? 'bg-blue-600 text-white' : 'hover:bg-blue-600'}`} data-tooltip="Dashboard" onClick={() => setActiveItem('Dashboard')}>
                            <i className={`fa-solid fa-chart-simple text-3xl ${activeItem === 'Dashboard' ? 'text-white' : 'group-hover:text-white'}`}></i>
                        </li>
                    </NavLink>
                    <NavLink to="/transaction" className={({ isActive }) => `flex justify-center items-center w-full ${isActive ? 'text-white' : 'hover:text-white'}`}>
                        <li className={`relative p-3 flex justify-center active:scale-90 rounded-lg group ${activeItem === 'Transactions' ? 'bg-blue-600 text-white' : 'hover:bg-blue-600'}`} data-tooltip="Transactions" onClick={() => setActiveItem('Transactions')}>
                            <i className={`fa-regular fa-clipboard text-3xl ${activeItem === 'Transactions' ? 'text-white' : 'group-hover:text-white'}`}></i>
                        </li>
                    </NavLink>
                </ul>
            </div>
            <div className="sidebar_footer flex flex-col gap-3">
                <i className="fa-regular fa-circle-question active:scale-90"></i>
                <i className="fa-solid fa-right-from-bracket text-red-600 transform rotate-180 active:scale-90"></i>
            </div>
        </div>
    );
};

export default Sidebar;
