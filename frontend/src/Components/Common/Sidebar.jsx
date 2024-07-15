import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiList, FiEdit } from 'react-icons/fi'; 

const Sidebar = () => {
    return (
        <div className="bg-blue-800 text-white h-screen w-64 shadow-lg">
            <div className="p-4">
                <h1 className="text-xl font-bold mb-4">Menu</h1>
                <ul>
                    <li className="mb-2">
                        <Link to="/" className="flex items-center p-2 rounded-md hover:bg-blue-700 transition-colors">
                            <FiHome className="mr-2" /> 
                            Home
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/all-posts" className="flex items-center p-2 rounded-md hover:bg-blue-700 transition-colors">
                            <FiList className="mr-2" /> 
                            All Posts
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/create-post" className="flex items-center p-2 rounded-md hover:bg-blue-700 transition-colors">
                            <FiEdit className="mr-2" /> 
                            Create Post
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
