import React from 'react';
import Navbar from '../../Component/Header/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../Component/Footer/Footer';

const Root = () => {
    const navigation = useNavigation()
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>

            {navigation.state === 'loading' && (
                <div className="flex items-center justify-center h-screen bg-white">
                    <span className="loading loading-bars loading-xl"></span>
                </div>
            )}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;