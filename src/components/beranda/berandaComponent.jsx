"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';  // Gunakan next/navigation

const navItems = [
  { label: 'Beranda', path: '/user/beranda' },
  { label: 'Agenda', path: '/agenda' },
  { label: 'Timbangan', path: '/timbangan' },
  { label: 'Daftar Posyandu', path: '/posyandu' },
];

const BerandaComponent = () => {
  const pathname = usePathname();  // Dapatkan rute saat ini

  return (
    <div>
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
              <button className="px-6 py-2 text-teal-600 rounded-full hover:bg-white">
                Login
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col md:flex-row justify-center items-center mt-10 space-y-6 md:space-y-0">
        <div className="max-w-xl text-left md:mr-6">
          <h1 className="text-4xl font-bold mb-4">Kenali Gejala dan </h1>
          <h1 className="text-4xl font-bold mb-4 text-teal-500">Penyebab Gondongan</h1>
          <p className="mb-6">Waktunya peduli kesehatan keluarga! Yuk jadwalkan kunjungan ke Posyandu terdekat</p>
          <button className="px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition">Buat Jadwal</button>
        </div>
        <div className="mt-6 md:mt-0">
          <Image src="/assets/images/iconmom.png" alt="Ilustrasi Posyandu" width={300} height={200} />
        </div>
      </main>
    </div>
  );
};

export default BerandaComponent;
