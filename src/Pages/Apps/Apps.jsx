import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import Card from '../Card/Card';

const Apps = () => {
    const data = useLoaderData();
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
     const navigate = useNavigate();

    useEffect(() => {
        if (data && data.length) {
            setLoading(false);
        }
    }, [data]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-white">
                <span className="loading loading-spinner loading-xl"></span>
            </div>
        );
    }

    const handleGoBack = () => {
        // console.log('Going back...');
        setSearch(''); 
        navigate('/apps'); 
    };



    // Filter apps based on search term (case-insensitive)
    const filteredApps = data.filter(app =>
        app.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <div className='text-center mt-4 mb-4'>
                <h1 className='text-4xl font-bold'>Our All Applications</h1>
                <p className='text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className='flex justify-between items-center mb-4'>
                <h4 className='text-2xl font-semibold'>({filteredApps.length}) Apps Found</h4>
                <div>
                    <label className="input flex items-center border rounded p-2">
                        <svg className="h-[1em] opacity-50 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input
                            type="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search"
                            className="outline-none"
                        />
                    </label>
                </div>
            </div>

            {filteredApps.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center mt-6">
                    {filteredApps.map(d => <Card key={d.id} d={d} />)}
                </div>
            ) : (
                <div className='h-screen'>
                    <div className="flex items-center justify-center">
                        <img src="https://i.ibb.co.com/pB8YrW8L/App-Error.png" alt="" className='max-w-full h-auto' />
                    </div>
                    <div className='text-center mt-4 mb-4'>
                        <h2 className='text-5xl font-bold'>OPPS!! APP NOT FOUND</h2>
                        <p className='text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>
                        <button
                            onClick={handleGoBack}
                            className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded mt-2'>
                            Go Back
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Apps;
