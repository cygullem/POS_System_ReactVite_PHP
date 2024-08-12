import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUtensils, faFileInvoiceDollar, faChartLine, faCog, faTableCells } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="h-full bg-blue-500 text-white w-20 hover:w-56 transition-all duration-300 p-4 flex flex-col group">
            {/* Sidebar Header */}
            <div className="flex items-center justify-center group-hover:justify-start mb-6">
                <FontAwesomeIcon icon={faHome} className="text-2xl group-hover:mr-3" />
                <h2 className="text-lg font-semibold hidden group-hover:inline">Szia's Restaurant</h2>
            </div>

            {/* Sidebar Menu */}
            <ul className="space-y-3">
                <li className="flex items-center justify-center group-hover:justify-start space-x-3 cursor-pointer hover:bg-blue-600 p-2 rounded-md">
                    <FontAwesomeIcon icon={faTableCells} className="text-base group-hover:mr-3" />
                    <span className="text-base font-medium hidden group-hover:inline">Dashboard</span>
                </li>
                <li className="flex items-center justify-center group-hover:justify-start space-x-3 cursor-pointer hover:bg-blue-600 p-2 rounded-md">
                    <FontAwesomeIcon icon={faUtensils} className="text-base group-hover:mr-3" />
                    <span className="text-base font-medium hidden group-hover:inline">Menu</span>
                </li>
                <li className="flex items-center justify-center group-hover:justify-start space-x-3 cursor-pointer hover:bg-blue-600 p-2 rounded-md">
                    <FontAwesomeIcon icon={faFileInvoiceDollar} className="text-base group-hover:mr-3" />
                    <span className="text-base font-medium hidden group-hover:inline">Orders</span>
                </li>
                <li className="flex items-center justify-center group-hover:justify-start space-x-3 cursor-pointer hover:bg-blue-600 p-2 rounded-md">
                    <FontAwesomeIcon icon={faChartLine} className="text-base group-hover:mr-3" />
                    <span className="text-base font-medium hidden group-hover:inline">Reports</span>
                </li>
                <li className="flex items-center justify-center group-hover:justify-start space-x-3 cursor-pointer hover:bg-blue-600 p-2 rounded-md">
                    <FontAwesomeIcon icon={faCog} className="text-base group-hover:mr-3" />
                    <span className="text-base font-medium hidden group-hover:inline">Settings</span>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
