'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Button, Divider } from '@nextui-org/react';
import { FaPlus } from 'react-icons/fa';
import Calendar from '@/components/Agenda/AgendaComponent';

const AgendaPage = () => {
    const router = useRouter();

    const handleNavigation = (path) => {
        router.push(path);
    }
    return (
        <div>
            <Button
                startContent={<FaPlus />}
                className='bg-primary text-white'
                onPress={() => handleNavigation('/admin/agenda/addData')}
            >
                Tambah Kegiatan
            </Button>
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

export default AgendaPage