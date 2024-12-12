import React from 'react';
import Link from 'next/link';
import { IoIosArrowDropleft } from 'react-icons/io';
import { AddDataDashboard } from '@/components/Dashboard/AddData/AddDashboard';


const addActivity= () => {
    return (
        <div>
            <Link href="/admin/dashboard" className='flex items-center gap-2 mb-5 text-[#7E84A3]'>
                <IoIosArrowDropleft size={18} />
                <h3 className='text-base font-semibold'>Kembali</h3>
            </Link>
            <h2 className='font-semibold text-xl mb-5'>Tambah Data</h2>
            <AddDataDashboard />
        </div>
    )
}

export default addActivity
