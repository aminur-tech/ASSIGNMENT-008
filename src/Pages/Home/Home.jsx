
import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Card from '../Card/Card';

const Home = () => {
    const data = useLoaderData()
    // console.log(data)

    return (
        <div className='text-center'>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-6 leading-tight"> We Build <br /> <span className="text-[#632EE3]">Productive</span> Apps
            </h1>

            <p className="text-[#627382] mt-3 mb-4 text-sm sm:text-base">
                At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br className="hidden sm:block" />
                Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
            
            <div className="flex gap-4 mt-4 justify-center mb-4">
                <Link to="https://play.google.com/store/apps?hl=en">
                    <button className="flex items-center gap-2 bg-black text-white py-3 px-6 rounded-xl hover:bg-gray-800 transition">
                        <img src="https://i.ibb.co.com/gb9fLr2T/fi-16076057.png" alt="Google Play" className="w-6 h-6" />
                        Google Play
                    </button>
                </Link>
                <Link to="https://www.apple.com/store">
                    <button className="flex items-center gap-2 bg-gray-100 text-black py-3 px-6 rounded-xl hover:bg-gray-200 transition border">
                        <img src="https://i.ibb.co.com/NgpgRDPd/Group-3.png" alt="App Store" className="w-6 h-6" />
                        App Store
                    </button>
                </Link>
            </div>

            <div>
                <img src="https://i.ibb.co.com/fdpvMWy9/hero.png" alt="" className='mx-auto' />
            </div>
            <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-xl p-8 mb-4'>
                <h2 className="text-center text-4xl font-extrabold mb-8">
                    Trusted by Millions, Built for You
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center text-center">
                    <div className="p-4 ">
                        <h5>Total Downloads</h5>
                        <p className="text-4xl font-extrabold">29.6M</p>
                        <p>21% more than last month</p>
                    </div>

                    <div className="p-4 ">
                        <h5>Total Reviews</h5>
                        <p className="text-4xl font-extrabold">906K</p>
                        <p >46% more than last month</p>
                    </div>

                    <div className="p-4">
                        <h5>Active Apps</h5>
                        <p className="text-4xl font-extrabold">132+</p>
                        <p>31 more will launch</p>
                    </div>
                </div>
            </div>

            <div className='text-center mt-4 mb-4'>
                <h2 className='text-4xl font-bold'>Trending Apps</h2>
                <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>


            {/* Trending Apps */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center mt-6">
                {
                    data.slice(0, 12).map(d => <Card key={d.id} d={d}></Card>)
                }
            </div>
            <Link to='/apps'> <button className='btn mt-4 mb-4 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Show All</button></Link>


        </div>
    );
};

export default Home;