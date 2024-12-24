'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button, Divider } from '@nextui-org/react';
import { FaPlus } from 'react-icons/fa';
import { FaCog } from 'react-icons/fa'; // Import settings icon
import { toast } from 'react-hot-toast';
import Calendar from '@/components/Agenda/AgendaComponent';

const AgendaPage = () => {
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
            <div className="flex items-center justify-between mb-5">
                <Button
                    startContent={<FaPlus />}
                    className='bg-primary text-white'
                    onPress={handleNavigation}
                >
                    Tambah Kegiatan
                </Button>
                <FaCog className="text-xl text-gray-400 cursor-pointer" />
            </div>
            <Divider className='my-5' />
            <Calendar />
        </div>
    )
}

export default AgendaPage;
