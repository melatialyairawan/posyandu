import React from 'react';
import { Toaster } from 'react-hot-toast';
import HeaderComponent from '@/components/Header/Header';
import Sidebar from '@/components/Sidebar/Sidebar';
import { Personal } from '@/components/Settings/Personal/Personal';

const DashboardLayout = ({ children }) => {
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <HeaderComponent />
            <aside className='hidden lg:block'>
                <Sidebar />
            </aside>
            <div className='p-5 lg:ml-80 ml-0'>
                {children}
            </div>
        </>
    );
};

const AddWeightData = () => {
    return (
        <DashboardLayout>
            <div>
                <h2 className='font-semibold text-xl mb-5'>Pengguna</h2>
                <Personal />
            </div>
        </DashboardLayout>
    );
};

export default AddWeightData;
