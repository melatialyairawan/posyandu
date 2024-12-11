'use client';

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Button } from "@nextui-org/react";
import { IoIosArrowDown } from "react-icons/io";

export default function HeaderComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const menuItems = [
        { label: "Beranda", path: "/" },
        { label: "Pendaftaran", path: "/pendaftaran" },
        { label: "Marketing", path: "/marketing" },
        { label: "Personal Settings", path: "/settings/personal" },
        { label: "Global Settings", path: "/settings/global" },
    ];

    return (
        <Navbar onMenuOpenChange={setIsOpen} className='pt-2 bg-white cursor-pointer border-b-1 border-gray-300' maxWidth="full" isBlurred="false">
            <NavbarMenuToggle
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
            />
            <NavbarBrand className='mb-1'>
                <img src="/assets/images/logo.png" alt="sikita" width={200} />
            </NavbarBrand>

            <NavbarContent as="div" justify="end">
                <div className="relative mr-1 md:mr-7 hidden md:block">
                    <svg className="w-8 h-8 text-[#64748B] animate-wiggle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15.585 15.5H5.415A1.65 1.65 0 0 1 4 13a10.526 10.526 0 0 0 1.5-5.415V6.5a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.085c0 1.907.518 3.78 1.5 5.415a1.65 1.65 0 0 1-1.415 2.5zm1.915-11c-.267-.934-.6-1.6-1-2s-1.066-.733-2-1m-10.912 3c.209-.934.512-1.6.912-2s1.096-.733 2.088-1M13 17c-.667 1-1.5 1.5-2.5 1.5S8.667 18 8 17" /></svg>
                    <div className="px-1 bg-primary rounded-full text-center text-white text-sm absolute -top-3 -end-2">
                        3
                        <div className="absolute top-0 start-0 rounded-full -z-10 animate-ping bg-red-300 w-full h-full" ></div>
                    </div>
                </div>
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <div className='flex items-center justify-center gap-1 md:gap-5'>
                            <Avatar
                                isBordered
                                as="button"
                                className="transition-transform hidden md:block"
                                color='primary'
                                name="Jason Hughes"
                                size="sm"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                            <p className='text-[#64748B] text-sm md:text-base'>John Doe</p>
                            <IoIosArrowDown className='text-[#64748B]' />
                        </div>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                            <span className="font-semibold">Signed in as</span>
                            <span className="font-semibold">zoey@example.com</span>
                        </DropdownItem>
                        <DropdownItem key="settings">My Settings</DropdownItem>
                        <DropdownItem key="team_settings">Team Settings</DropdownItem>
                        <DropdownItem key="analytics">Analytics</DropdownItem>
                        <DropdownItem key="system">System</DropdownItem>
                        <DropdownItem key="configurations">Configurations</DropdownItem>
                        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                        <DropdownItem key="logout" color="danger">
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavbarMenu className='mt-5 bg-white'>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className={`w-full ${pathname === item.path ? "text-primary" : "text-[#64748B]"}`}
                                href={item.path}
                                size="lg"
                            >
                                {item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </NavbarContent>
        </Navbar>
    )
}