'use client';

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@nextui-org/button';
import {
    IoArrowBackOutline,
    IoArrowForwardOutline,
    IoChatbubbleOutline,
    IoHomeOutline,
    IoPersonOutline,
    IoSettingsOutline,
    IoChevronDown,
} from 'react-icons/io5';
import { TbMoodKid } from "react-icons/tb";
import { RiScales2Line, RiParentLine } from 'react-icons/ri';
import { TbClockEdit } from "react-icons/tb";
import { MdEditCalendar } from "react-icons/md";
import { FaRegChartBar } from "react-icons/fa";
import { LiaUserEditSolid, LiaHospitalAltSolid } from "react-icons/lia";
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

export default function Sidebar({ isOpen, setIsOpen }) {
    const pathname = usePathname();
    const router = useRouter();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const buttons = [
        { label: 'Beranda', icon: <IoHomeOutline />, path: '/admin/dashboard' },
        { label: 'Kelola Berat & Tinggi Badan', icon: <RiScales2Line />, path: '/admin/weightHeightManagement' },
        { label: 'Kelola Jadwal Posyandu', icon: <MdEditCalendar />, path: '/admin/agenda' },
        { label: 'Kelola Riwayat Pemeriksaan', icon: <TbClockEdit />, path: '/admin/inspectionHistory' },
        { label: 'Kelola Akses User', icon: <LiaUserEditSolid />, path: '/admin/userManagement' },
        // { label: 'Diagram Status Gizi', icon: <FaRegChartBar />, path: '/admin/nutritionChart' },
    ];

    const globalSettingsOptions = [
        { label: 'Data Anak', path: '/admin/settings/global/childData', icon: <TbMoodKid /> },
        { label: 'Data Orang Tua', path: '/admin/settings/global/parentData', icon: <RiParentLine /> },
        { label: 'Data Posyandu', path: '/admin/settings/global/posyanduData', icon: <LiaHospitalAltSolid /> },
    ];

    const buttons2 = [
        { label: 'Personal Settings', icon: <IoPersonOutline />, path: '/admin/settings/personal' },
        { label: 'Helpdesk', icon: <IoChatbubbleOutline />, path: '/admin/Helpdesk' },
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

    const handleOpen = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <motion.aside
            initial={{ width: isOpen ? 325 : 120 }}
            animate={{ width: isOpen ? 325 : 120 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="p-5 bg-[#F5F6FA] fixed inset-0"
        >
            <div className="flex flex-col gap-2 mt-20 justify-start items-start">
                {buttons.map((button, index) => (
                    <Button
                        key={index}
                        onPress={() => handleNavigation(button.path)}
                        className={`w-full font-poppins justify-start text-base ${!isOpen ? 'justify-center text-center' : ''} ${pathname === button.path
                            ? 'bg-primary text-white'
                            : 'bg-transparent text-[#5A607F]'
                            }`}
                        startContent={button.icon}
                    >
                        {isOpen && button.label}
                    </Button>
                ))}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <p className="text-[#A1A7C4] font-poppins my-3">Settings</p>
                    </motion.div>
                )}
                <Button
                    onPress={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`w-full font-poppins justify-start text-base ${!isOpen ? 'justify-center text-center' : ''} ${pathname.startsWith('/admin/settings/global')
                        ? 'bg-primary text-white'
                        : 'bg-transparent text-[#5A607F]'
                        }`}
                    startContent={<IoSettingsOutline />}
                    endContent={
                        <motion.div
                            animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className={`${isOpen ? 'ml-auto' : 'ml-2'}`}
                        >
                            <IoChevronDown size={18} />
                        </motion.div>
                    }
                >
                    {isOpen && 'Global Settings'}
                </Button>
                {isDropdownOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="pl-6 mt-2"
                    >
                        {globalSettingsOptions.map((option, index) => (
                            <Button
                                key={index}
                                onPress={() => handleNavigation(option.path)}
                                startContent={option.icon}
                                className={`w-full font-poppins text-base justify-start bg-transparent text-[#5A607F] ${pathname === option.path ? 'text-primary' : ''}`}
                            >
                                {isOpen && option.label}
                            </Button>
                        ))}
                    </motion.div>
                )}
                {buttons2.map((button, index) => (
                    <Button
                        key={index}
                        onPress={() => handleNavigation(button.path)}
                        className={`w-full font-poppins justify-start text-base ${!isOpen ? 'justify-center text-center' : ''} ${pathname === button.path
                            ? 'bg-primary text-white'
                            : 'bg-transparent text-[#5A607F]'
                            }`}
                        startContent={button.icon}
                    >
                        {isOpen && button.label}
                    </Button>
                ))}
                <motion.div className="absolute right-0 bottom-3 mr-2">
                    <Button isIconOnly={true} className="bg-primary" onClick={handleOpen}>
                        {isOpen ? <IoArrowBackOutline color="white" size={18} /> : <IoArrowForwardOutline color="white" size={18} />}
                    </Button>
                </motion.div>
            </div>
        </motion.aside>
    );
}
