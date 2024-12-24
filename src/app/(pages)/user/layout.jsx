"use client";

import React from 'react';
import Navbar from '@/components/Navbar/iniNavbar';
import Footer from '@/components/Footer/iniFooter';

const UserLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className='flex-1 p-5'>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default UserLayout;