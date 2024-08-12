import React from 'react';
import '../CSS/main.css';


const Sidebar = () => {
    return (
        <div className="sidebar flex flex-col items-center">
            <div className="sidebar_header rounded-xl flex items-center justify-center mb-10">
                <i class="fa-brands fa-slack"></i>
            </div>
            <div className="header_body flex-1 border mb-4">
                <ul className="sidebar_links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="sidebar_footer flex flex-col gap-4">
                <i class="fa-regular fa-circle-question active:scale-90"></i>
                <i class="fa-solid fa-right-from-bracket text-red-600 transform rotate-180 active:scale-90"></i>
            </div>
        </div>
    );
};

export default Sidebar;
