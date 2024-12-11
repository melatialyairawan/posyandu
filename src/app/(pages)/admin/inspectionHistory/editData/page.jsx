import React from 'react';
import Link from 'next/link';
import { IoIosArrowDropleft } from 'react-icons/io';
import { EditDataInspection } from '@/components/InspectionHistory/EditData/EditInspection';

const EditInspection = () => {
    return (
        <div>
            <Link href="/admin/inspectionHistory" className='flex items-center gap-2 mb-5 text-[#7E84A3]'>
                <IoIosArrowDropleft size={18} />
                <h3 className='text-base font-semibold'>Kembali</h3>
            </Link>
            <h2 className='font-semibold text-xl mb-5'>Edit Data</h2>
            <EditDataInspection />
        </div>
    )
}

export default EditInspection