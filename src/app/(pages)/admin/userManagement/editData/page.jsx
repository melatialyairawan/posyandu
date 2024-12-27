import React from 'react';
import Link from 'next/link';
import { IoIosArrowDropleft } from 'react-icons/io';
import { EditUserForm } from '@/components/UserManagement/EditData/EditUser';

const EditUser = () => {
    return (
        <div>
            <Link href="/admin/userManagement" className='flex items-center gap-2 mb-5 text-[#7E84A3]'>
                <IoIosArrowDropleft size={18} />
                <h3 className='text-base font-semibold'>Kembali</h3>
            </Link>
            <h2 className='font-semibold text-xl mb-5'>Edit Data User</h2>
            <EditUserForm />
        </div>
    )
}

export default EditUser