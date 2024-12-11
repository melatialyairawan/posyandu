import React from 'react';
import HeaderComponent from '@/components/Header/Header';
import Sidebar from '@/components/Sidebar/Sidebar';

const DashboardLayout = ({ children }) => {
    return (
        <>
            <HeaderComponent />
            <aside className='hidden lg:block'>
                <Sidebar />
            </aside>
            <div className='p-5 lg:ml-80 ml-0'>
                {children}
            </div>
        </>
    )
}

export default DashboardLayout