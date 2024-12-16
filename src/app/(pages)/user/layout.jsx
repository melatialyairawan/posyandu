"use client";

import React from 'react';
import Navbar from '@/components/Navbar/iniNavbar';
import Footer from '@/components/Footer/iniFooter';

const UserLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className='flex-1 p-5'>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default UserLayout;
