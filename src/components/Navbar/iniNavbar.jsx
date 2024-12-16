import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Beranda', path: '/user/beranda' },
  { label: 'Agenda', path: '/agenda' },
  { label: 'Timbangan', path: '/timbangan' },
  { label: 'Daftar Posyandu', path: '/posyandu' },
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
            <button className="px-6 py-2 text-teal-600 rounded-full hover:bg-white">Login</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
