import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
    return (
        <div className="flex flex-col justify-center rounded-3xl shadow-lg p-3 mb-3">
            <div className="flex justify-between p-3">
                <Link to="/" className=" text-gray-400 menu-item focus:outline-none focus:text-orange-500">
                    <i className="fa-solid fa-2xl fa-house"></i>
                </Link>
                <Link to="/map" className="text-gray-400 menu-item focus:outline-none focus:text-orange-500">
                    <i className="fa-solid fa-2xl fa-location-dot"></i>
                </Link>
                <Link to="/scanner" className="text-gray-400 menu-item focus:outline-none focus:text-orange-500">
                    <i className="fa-solid fa-2xl fa-qrcode"></i>
                </Link>
                <Link to="/account" className="text-gray-400 menu-item focus:outline-none focus:text-orange-500">
                    <i className="fa-solid fa-2xl fa-user"></i>
                </Link>
            </div>
        </div>
    );
};
