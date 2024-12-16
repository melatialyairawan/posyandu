import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Avatar } from "@nextui-org/react";
import { IoIosArrowDown } from "react-icons/io";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

const navItems = [
  { label: 'Beranda', path: '/user/beranda' },
  { label: 'Agenda', path: '/agenda' },
  { label: 'Timbangan', path: '/user/timbangan' },
  { label: 'Daftar Posyandu', path: '/user/posyandulist' },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="flex justify-between items-center p-5 bg-gray-100">
      <div className="flex items-center">
        <Image src="/assets/images/logo.png" alt="sikita" width={200} height={50} />
      </div>
      <nav>
        <ul className="flex space-x-3 items-center">
          {navItems.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <Link href={item.path}>
                <span
                  className={`flex items-center space-x-1 no-underline px-4 py-2 rounded-full transition ${
                    pathname === item.path ? 'text-white bg-teal-500' : 'hover:text-white hover:bg-teal-500'
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
          <li>
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <div className='flex items-center justify-center md:gap-2'>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform hidden md:block"
                    color='primary'
                    name="Jason Hughes"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                  />
                  <p className='text-[#64748B] text-sm md:text-base'>Putri Una</p>
                  <IoIosArrowDown className='text-[#64748B]' />
                </div>
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="settings">Informasi Pengguna</DropdownItem>
                <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                <DropdownItem key="logout" color="danger">
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
