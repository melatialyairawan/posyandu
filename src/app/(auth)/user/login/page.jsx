import React from "react";
import Image from "next/image";
import { FaUser, FaLock } from "react-icons/fa";

const LoginPage = () => {
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
        <h1 className="mb-6 text-2xl font-poppinsBold">Masuk</h1>

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
            placeholder="Masukkan No. HP Anda"
            className="w-full px-8 py-4 mb-4 border border-teal-500 rounded-full placeholder:text-sm focus:ring-2"
          />
          <FaUser className="absolute text-gray-400 transform right-8 top-[40%] -translate-y-2/4" />
        </div>

        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium font-poppinsSemiBold"
        >
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            type="password"
            placeholder="Masukkan Password Anda"
            className="w-full px-8 py-4 mb-4 border border-teal-500 rounded-full placeholder:text-sm focus:ring-2"
          />
          <FaLock className="absolute text-gray-400 transform right-8 top-[40%] -translate-y-2/4" />
        </div>

        <button className="w-full px-6 py-3 font-medium text-white transition bg-teal-500 rounded-full hover:bg-teal-600">
          Masuk
        </button>
      </div>
    </main>
  );
};

export default LoginPage;
