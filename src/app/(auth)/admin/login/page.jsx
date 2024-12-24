import React from 'react';
import Image from 'next/image';
import { FaUser, FaLock } from 'react-icons/fa';

const LoginPage = () => {
    return (
        <main className="flex flex-col md:flex-row justify-between items-center pt-20 px-28">
            <div className="mt-6 md:mt-0 ml-12 mr-10">
                <Image 
                    src="/assets/images/imglogin.png" 
                    alt="Ilustrasi Posyandu" 
                    width={300} 
                    height={200} 
                />
            </div>

            <div className="max-w-xl text-left md:w-1/2">
                <h1 className="text-2xl font-bold mb-6">Masuk</h1>

                <label htmlFor="phone" className="block text-lg font-medium mb-2">No. HP</label>
                <div className="relative">
                    <input 
                        id="phone" 
                        type="text" 
                        placeholder="Masukkan No. HP Anda" 
                        className="w-full px-4 py-2 border border-teal-500 rounded-full mb-4 focus:ring-2 pr-10" 
                    />
                    <FaUser className="absolute right-4 top-5 transform -translate-y-2/4 text-gray-400" />
                    </div>

                <label htmlFor="password" className="block text-lg font-medium mb-2">Password</label>
                <div className="relative">
                    <input 
                        id="password" 
                        type="password" 
                        placeholder="Masukkan Password Anda" 
                        className="w-full px-4 py-2 border mb-4 border-teal-500 rounded-full mbfocus:ring-2 pr-10" 
                    />
                    <FaLock className="absolute right-4 top-5 transform -translate-y-2/4 text-gray-400" />
                </div>

                <button 
                    className="w-full px-6 py-3 bg-teal-500 text-white font-medium rounded-full hover:bg-teal-600 transition">
                    Masuk
                </button>
            </div>
        </main>
    );
};

export default LoginPage;
