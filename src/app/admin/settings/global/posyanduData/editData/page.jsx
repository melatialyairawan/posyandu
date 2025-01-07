import React from 'react';
import Link from 'next/link';
import { IoIosArrowDropleft } from 'react-icons/io';
import { EditDataDashboard } from '@/components/Dashboard/EditData/EditDashboard';

const editActivity = () => {
    return (
        <div>
            <Link href="/admin/settings/global/posyanduData" className='flex items-center gap-2 mb-5 text-[#7E84A3]'>
                <IoIosArrowDropleft size={18} />
                <h3 className='text-base font-semibold'>Kembali</h3>
            </Link>
            <h2 className='font-semibold text-xl mb-5'>Edit Data Posyandu</h2>
            <EditDataDashboard />
        </div>
    )
}

export default editActivity