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
            {children}
        </>
    )
}

export default DashboardLayout