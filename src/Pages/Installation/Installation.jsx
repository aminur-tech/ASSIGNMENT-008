import React from 'react';
import { IoIosArrowDropdown } from 'react-icons/io';


const Installation = () => {
    return (
        <div>
            <div className='text-center mt-4 mb-4'>
                <h1 className='text-4xl font-bold'>Your Installed Apps</h1>
                <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex items-center justify-between mt-4 mb-4'>
                <h4>1 Apps Found</h4>
                <div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn m-1">Click <IoIosArrowDropdown size={18}></IoIosArrowDropdown></div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Installation;