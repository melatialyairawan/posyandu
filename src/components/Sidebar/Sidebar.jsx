'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@nextui-org/button';
import { IoHomeOutline, IoPersonOutline, IoSettingsOutline } from 'react-icons/io5';
import { RiScales2Line } from 'react-icons/ri';
import { TbClockEdit } from "react-icons/tb";
import { MdEditCalendar } from "react-icons/md";
import { FaRegChartBar } from "react-icons/fa";
import { LiaUserEditSolid } from "react-icons/lia";
import toast from 'react-hot-toast';

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();

    const buttons = [
        { label: 'Beranda', icon: <IoHomeOutline />, path: '/admin/dashboard' },
        { label: 'Kelola Berat & Tinggi Badan', icon: <RiScales2Line />, path: '/admin/weightHeightManagement' },
        { label: 'Kelola Jadwal Posyandu', icon: <MdEditCalendar />, path: '/admin/agenda' },
        { label: 'Kelola Riwayat Pemeriksaan', icon: <TbClockEdit />, path: '/admin/inspectionHistory' },
        { label: 'Kelola Akses User', icon: <LiaUserEditSolid />, path: '/admin/userManagement' },
        { label: 'Diagram Status Gizi', icon: <FaRegChartBar />, path: '/admin/nutritionChart' },
    ];
    const buttons2 = [
        { label: 'Personal Settings', icon: <IoPersonOutline />, path: '/settings/personal' },
        { label: 'Global Settings', icon: <IoSettingsOutline />, path: '/settings/global' },
    ];

    const handleNavigation = async (path) => {
        if (pathname === path) return;
        const loadingToast = toast.loading('Navigating...');
        try {
            await router.push(path);
            toast.success('Redirecting...');
        } catch (error) {
            toast.error('Navigation failed.');
        } finally {
            toast.dismiss(loadingToast);
        }
    };

    return (
        <aside className='w-fit p-5 bg-[#F5F6FA] fixed inset-0'>
            <div className='flex flex-col gap-2 mt-20 justify-start items-start'>
                {buttons.map((button, index) => (
                    <Button
                        key={index}
                        onPress={() => handleNavigation(button.path)}
                        className={`w-full font-poppins justify-start text-base ${pathname === button.path
                            ? 'bg-primary text-white'
                            : 'bg-transparent text-[#5A607F]'
                            }`}
                        startContent={button.icon}
                    >
                        {button.label}
                    </Button>
                ))}
                <p className='text-[#A1A7C4] font-poppins my-3'>Settings</p>
                {buttons2.map((button, index) => (
                    <Button
                        key={index}
                        onPress={() => handleNavigation(button.path)}
                        className={`w-full font-poppins justify-start text-base ${pathname === button.path
                            ? 'bg-primary text-white'
                            : 'bg-transparent text-[#5A607F]'
                            }`}
                        startContent={button.icon}
                    >
                        {button.label}
                    </Button>
                ))}
            </div>
        </aside>
    );
}
