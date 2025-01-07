"use client";

import React from 'react';
import Image from 'next/image';
import { BiInjection } from "react-icons/bi";
import { FaWeightScale } from "react-icons/fa6";
import { RiMedicineBottleFill } from "react-icons/ri";
import { GiStickingPlaster } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { useRouter } from 'next/navigation';
import HelpdeskUser from './Helpdesk/HelpdeskUser';
import HelpdeskModal from './Helpdesk/HelpdeskModal';

const BerandaComponent = () => {
  const router = useRouter();

  const handleButtonClick = () => { router.push('/user/daftarantrean'); };
  return (
    <div>
      <div className='relative'>
        <HelpdeskModal />
      </div>
      <main className="flex flex-col md:flex-row justify-between items-center pt-20 px-28">
        <div className="max-w-xl text-left md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Kenali Gejala dan</h1>
          <h1 className="text-4xl font-bold mb-4 text-teal-500">Penyebab Gondongan</h1>
          <p className="mb-6">Waktunya peduli kesehatan keluarga! Yuk jadwalkan kunjungan ke Posyandu terdekat</p>
        </div>
        <div className="mt-6 md:mt-0">
          <Image src="/assets/images/iconmom.png" alt="Ilustrasi Posyandu" width={300} height={200} />
        </div>
      </main>

      <section className="pt-28 px-10">
        <h4 className="text-2xl font-bold text-center mb-6">Layanan Kami</h4>
        <h4 className="text-center mb-10 text-xl">Kami menyediakan berbagai layanan kesehatan untuk mendukung tumbuh kembang anak</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-teal-500"></div>
            <GiStickingPlaster size={50} className="text-teal-500" />
            <h3 className="text-xl font-semibold mt-4 text-center">Vaksin</h3>
            <p className="text-gray-600 mt-2 text-center">Memberikan vaksin untuk anak-anak</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-teal-500"></div>
            <BiInjection size={50} className="text-teal-500" />
            <h3 className="text-xl font-semibold mt-4 text-center">Imunisasi</h3>
            <p className="text-gray-600 mt-2 text-center">Pemberian imunisasi dasar dan lanjutan</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-teal-500"></div>
            <FaWeightScale size={50} className="text-teal-500" />
            <h3 className="text-xl font-semibold mt-4 text-center">Pemeriksaan Berat dan Tinggi Badan</h3>
            <p className="text-gray-600 mt-2 text-center">Mengukur dan memantau berat dan tinggi badan anak</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-teal-500"></div>
            <RiMedicineBottleFill size={50} className="text-teal-500" />
            <h3 className="text-xl font-semibold mt-4 text-center">Pemberian Vitamin</h3>
            <p className="text-gray-600 mt-2 text-center">Memantau perkembangan fisik anak secara menyeluruh</p>
          </div>
        </div>
      </section>

      <section className="mt-32 px-10 bg-gradient-to-r from-[#18B3AB] to-[#34BDF8] py-10 rounded-lg">
        <h3 className="text-xl text-white font-bold text-center mb-6">Statistik 2024</h3>
        <h3 className="text-3xl text-white font-bold text-center mb-6">Data Bayi dan Balita</h3>
        <div className="flex justify-center mt-10 space-x-20">
          <div className="flex flex-col items-center">
            <Image src="/assets/images/baby.png" alt="bayi" width={100} height={50} />
            <p className="text-xl font-semibold mt-4 text-center text-white">Bayi</p>
            <p className="text-white mt-2 text-center">30</p>
            <p className="text-white mt-2 text-center">Data Bayi</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/assets/images/kid.png" alt="balita" width={100} height={50} />
            <p className="text-xl font-semibold mt-4 text-center text-white">Balita</p>
            <p className="text-white mt-2 text-center">25</p>
            <p className="text-white mt-2 text-center">Data Balita</p>
          </div>
        </div>
      </section>

      <section className="mt-32 px-10">
        <h3 className="text-3xl font-bold text-center mb-6">Buat Jadwal Kunjungan Posyandu Anda Sekarang</h3>
        <div className="flex flex-col md:flex-row justify-center items-center mt-10">
          <div className="max-w-xl text-center mb-8 md:mb-0 md:mr-8">
            <Image src="/assets/images/schedule.png" alt="Jadwal Posyandu" width={400} height={250} />
          </div>
          <div className="max-w-xl text-left">
            <p className="mb-6">Posyandu adalah langkah penting untuk memantau tumbuh kembang anak dan kesehatan keluarga Anda. Dengan sistem pendaftaran yang mudah dan cepat, kami membantu Anda merencanakan kunjungan posyandu tanpa repot.</p>
            <ul className="list-disc mb-6">
              <li className="flex items-center"><TiTick className='text-teal-500' />Pendaftaran secara online</li>
              <li className="flex items-center"><TiTick className='text-teal-500' />Pendaftaran mudah</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-32 px-10">
        <div className="flex flex-col md:flex-row justify-center items-center mt-10">
          <div className="max-w-xl text-left md:mr-8">
            <h3 className="text-3xl font-bold text-teal-500 mb-6">Informasi Gizi dan MPASI Untuk Anak</h3>
            <p className="mb-6 font-bold">Apa itu MPASI?</p>
            <p className="mb-6">MPASI (Makanan Pendamping ASI) adalah makanan yang diberikan mulai usia 6 bulan untuk memenuhi kebutuhan gizi bayi selain ASI.</p>
            <p className="mb-6 font-bold text-teal-500">Panduan MPASI Berdasarkan Usia:</p>
            <ul className="list-disc mb-6 pl-5">
              <li className="mb-2 font-bold">6–8 bulan: <p className='font-normal'>Bubur halus (pure) 2-3 kali sehari. Contoh: pure wortel, kentang, buah.</p></li>
              <li className="mb-2 font-bold">9–11 bulan: <p className='font-normal'>Makanan cincang 3 kali sehari + 1-2 camilan sehat. Contoh: nasi tim, sayur cincang.</p></li>
              <li className="mb-2 font-bold">12 bulan ke atas: <p className='font-normal'>Makanan keluarga 3 kali sehari + 2 camilan sehat.</p></li>
            </ul>
            <button className="px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition">Selengkapnya</button>
          </div>
          <div className="max-w-xl text-center mb-8 md:mb-0">
            <Image src="/assets/images/meal.png" alt="Informasi Gizi" width={400} height={250} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BerandaComponent;
