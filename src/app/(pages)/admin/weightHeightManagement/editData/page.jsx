import React from 'react';
import Link from 'next/link';
import { IoIosArrowDropleft } from 'react-icons/io';
import { EditDataWeight } from '@/components/WeightManagement/EditData/EditWeight';

const EditWeightData = () => {
    return (
        <div>
            <Link href="/admin/weightHeightManagement" className='flex items-center gap-2 mb-5 text-[#7E84A3]'>
                <IoIosArrowDropleft size={18} />
                <h3 className='text-base font-semibold'>Kembali</h3>
            </Link>
            <h2 className='font-semibold text-xl mb-5'>Edit Data</h2>
            <EditDataWeight />
        </div>
    )
}

export default EditWeightData