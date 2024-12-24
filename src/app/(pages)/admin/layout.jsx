'use client';

import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import HeaderComponent from '@/components/Header/Header';
import Sidebar from '@/components/Sidebar/Sidebar';

const DashboardLayout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <HeaderComponent />
            <div>
                <aside className='hidden lg:block'>
                    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
                </aside>
                <div className={`p-5 transition-all duration-[650ms] ease-in-out ${isOpen ? 'lg:ml-80 ml-0' : 'lg:ml-32 ml-0'}`}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default DashboardLayout