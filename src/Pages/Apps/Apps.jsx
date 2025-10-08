import React from 'react';
import { useLoaderData } from 'react-router';
import Card from '../Card/Card';


const Apps = () => {
 const data = useLoaderData()
    return (
        <div>
            <div className='text-center mt-4 mb-4'>
                <h1 className='text-4xl font-bold'>Our All Applications</h1>
                <p className='text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between items-center mb-4'>
                <h4 className='text-2xl font-semibold'>({data.length})Apps Found</h4>
                <div>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
                        <input type="search" required placeholder="Search" />
                    </label>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center mt-6">
                {
                data.map(d => <Card key={d.id} d={d}></Card>)
                }
            </div>


        </div>
    );
};

export default Apps;