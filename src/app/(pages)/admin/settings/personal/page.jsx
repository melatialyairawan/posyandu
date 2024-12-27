import React from 'react';
import { Toaster } from 'react-hot-toast';
import HeaderComponent from '@/components/Header/Header';
import Sidebar from '@/components/Sidebar/Sidebar';
import { Personal } from '@/components/Settings/Personal/Personal';

const AddWeightData = () => {
    return (
        <>
            <div>
                <h2 className='font-semibold text-xl mb-5'>Pengguna</h2>
                <Personal />
            </div>
        </>
    );
};

export default AddWeightData;
