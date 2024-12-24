import React from "react";
import Image from "next/image";
import { FaUser, FaPhone } from "react-icons/fa";
import { TbGenderBigender } from "react-icons/tb";
import { IoLocationSharp } from "react-icons/io5";

const RegisterPage = () => {
  return (
    <main className="flex flex-col items-center justify-between h-screen md:flex-row px-28">
      <div className="mt-6 ml-12 mr-10 md:mt-0">
        <Image
          src="/assets/images/imglogin.png"
          alt="Ilustrasi Posyandu"
          width={300}
          height={200}
        />
      </div>

      <div className="max-w-xl text-left md:w-1/2">
        <h1 className="mb-6 text-2xl font-poppinsBold">Daftar</h1>

        <label
          htmlFor="nama"
          className="block mb-2 text-sm font-medium font-poppinsSemiBold"
        >
          Nama Lengkap
        </label>
        <div className="relative">
          <input
            id="nama"
            type="text"
            placeholder="Masukkan Nama Lengkap"
            className="w-full px-8 py-4 mb-4 border border-teal-500 rounded-full placeholder:text-sm focus:ring-2"
          />
          <FaUser className="absolute text-gray-400 transform right-8 top-[40%] -translate-y-2/4" />
        </div>
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium font-poppinsSemiBold"
        >
          No. HP
        </label>
        <div className="relative">
          <input
            id="phone"
            type="text"
            placeholder="Masukkan No. Handphone"
            className="w-full px-8 py-4 mb-4 border border-teal-500 rounded-full placeholder:text-sm focus:ring-2"
          />
          <FaPhone className="absolute text-gray-400 transform right-8 top-[40%] -translate-y-2/4" />
        </div>
        <label
          htmlFor="jenis-kelamin"
          className="block mb-2 text-sm font-medium font-poppinsSemiBold"
        >
          Jenis Kelamin
        </label>
        <div className="relative">
          <input
            id="jenis-kelamin"
            type="text"
            placeholder="Masukkan Jenis Kelamin"
            className="w-full px-8 py-4 mb-4 border border-teal-500 rounded-full placeholder:text-sm focus:ring-2"
          />
          <TbGenderBigender className="absolute w-6 h-6 text-gray-400 transform right-7 top-[40%] -translate-y-2/4" />
        </div>
        <label
          htmlFor="jenis-kelamin"
          className="block mb-2 text-sm font-medium font-poppinsSemiBold"
        >
          Alamat
        </label>
        <div className="relative">
          <input
            id="alamat"
            type="text"
            placeholder="Masukkan Alamat"
            className="w-full px-8 py-4 mb-4 border border-teal-500 rounded-full placeholder:text-sm focus:ring-2"
          />
          <IoLocationSharp className="absolute text-gray-400 transform right-8 top-[40%] -translate-y-2/4" />
        </div>

        <button className="w-full px-6 py-3 font-medium text-white transition bg-teal-500 rounded-full hover:bg-teal-600">
          Daftar
        </button>
      </div>
    </main>
  );
};

export default RegisterPage;
