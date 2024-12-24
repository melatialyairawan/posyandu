'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Button, Divider } from '@nextui-org/react';
import { FaPlus } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import Calendar from '@/components/Agenda/AgendaComponent';

const KalenderUser = () => {
    const router = useRouter();

    const handleNavigation = async () => {
        const loadingToast = toast.loading('Loading...');
        try {
            await router.push('/admin/agenda/addData');
            toast.success('Redirecting...');
        } catch (error) {
            toast.error('Navigation failed');
        } finally {
            toast.dismiss(loadingToast);
        }
    }

    return (
        <div>
            <Divider className='my-5 border-black' />
            {/* <div className='flex justify-between items-center'>
                <div className='flex gap-5 items-center'>
                    <div className='flex gap-2'>
                        <Button isIconOnly className='bg-primary text-white'>
                            <IoIosArrowBack size={20} />
                        </Button>
                        <Button isIconOnly className='bg-primary text-white'>
                            <IoIosArrowForward size={20} />
                        </Button>
                    </div>
                    <h1 className='text-xl'>Desember 2024</h1>
                </div>
                <div className='flex gap-2'>
                    <Button className='bg-primary text-white'>Pekan</Button>
                    <Button className='bg-primary text-white'>Bulan</Button>
                </div>
            </div> */}
            <Calendar />
        </div>
    )
}

export default KalenderUser