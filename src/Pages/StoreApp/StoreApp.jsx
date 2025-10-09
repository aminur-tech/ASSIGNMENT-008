import { Download } from 'lucide-react';
import React from 'react';
import { IoIosStar } from 'react-icons/io';


const StoreApp = ({ app,handleUninstall }) => {
    const {id, image, title, downloads, ratingAvg, size } = app

   

    
    return (
        <div>
            <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm mt-4 mb-4">
                <div className="w-14 h-14 rounded-lg bg-gray-200 mr-4">
                    <img src={image} alt="" />
                </div>
                <div className="flex-1">
                    <div className="font-semibold text-lg mb-1">
                        {title}
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                        <span className="text-green-500 font-medium flex items-center gap-1">
                            <Download size={18}></Download>
                            {downloads}
                        </span>
                        <span className="text-yellow-500 font-medium flex items-center">
                            <IoIosStar size={18}></IoIosStar>
                            {ratingAvg}
                        </span>
                        <span className="text-gray-500">{size}</span>
                    </div>
                </div>
                <button onClick={() => handleUninstall(id)} className="ml-4 bg-green-400 hover:bg-green-500 text-white font-semibold rounded px-5 py-2 transition">
                    Uninstall
                </button>
            </div>
        </div>
    );
};

export default StoreApp;