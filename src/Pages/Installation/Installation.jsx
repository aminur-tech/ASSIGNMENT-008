import { Download } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { IoIosArrowDropdown } from 'react-icons/io';
import { useLoaderData } from 'react-router';
import { storedApp } from '../../Component/AddToDB/AddToDB';
import StoreApp from '../StoreApp/StoreApp';
import { toast } from 'react-toastify';


const Installation = () => {
    const data = useLoaderData();
    const [installedApps, setInstalledApps] = useState([])
    const [sort, setSort] = useState('')

    useEffect(() => {
        const storedAppData = storedApp();
        const convertedStoredApps = storedAppData.map(id => parseInt(id));
        const installed = data.filter(app =>
            convertedStoredApps.includes(app.id)
        );
        setInstalledApps(installed);
    }, [data]);


    const handleSort = (order) => {
        setSort(order);

        const sortedApps = [...installedApps].sort((a, b) => {
            const downloadsA = parseInt(a.downloads);
            const downloadsB = parseInt(b.downloads);

            if (order === "high-low") {
                return downloadsB - downloadsA;
            } else if (order === "low-high") {
                return downloadsA - downloadsB;
            }
            return 0;
        });

        setInstalledApps(sortedApps);
    };



    const handleUninstall = (id) => {
        toast('uninstalled')
        const updatedApps = installedApps.filter(app => app.id !== id);
        setInstalledApps(updatedApps);

        // Update localStorage
        const storedAppData = storedApp().filter(
            (storedId) => parseInt(storedId) !== id
        );
        localStorage.setItem('installed', JSON.stringify(storedAppData));
    };



    return (
        <div>
            <div className="text-center mt-6 mb-6 px-4 sm:px-6">
                <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                    Your Installed Apps
                </h1>
                <p className="text-[#627382] mt-2 text-sm sm:text-base">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

            <div className='flex items-center justify-between mt-4 mb-4'>
                <h4>({installedApps.length}) Apps Found</h4>
                <div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn m-1">sort-by-size<IoIosArrowDropdown size={18}></IoIosArrowDropdown></div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={() => handleSort("high-low")}>High-Low</a></li>
                            <li><a onClick={() => handleSort("low-high")}>Low-High</a></li>
                        </ul>
                    </div>
                </div>
            </div>


            {
                installedApps.length > 0
                    ? installedApps.map(app => <StoreApp key={app.id} app={app} handleUninstall={handleUninstall} />)
                    : <p className="text-center text-gray-500 mt-8">No App Found</p>
            }

        </div>
    );
};

export default Installation;