'use client';

import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Button } from "@nextui-org/react";
import { IoSearchOutline } from 'react-icons/io5';

const ChildDataComponent = () => {
    return (
        <div className='p-5'>
            <div>
                <h1 className='text-2xl font-semibold mb-5'>Data Anak</h1>
                <p className='text-gray-400 mb-5'>Lihat jadwal acara Anda dari tautan acara kalender Anda</p>
                <div className='max-w-96 flex mb-10'>
                    <Input placeholder="Cari..." type='search' size='lg' startContent={<IoSearchOutline />} />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {[...Array(10)].map((_, index) => (
                    <Card className='p-5' key={index}>
                        <CardHeader>
                            <div className='flex flex-col gap-1'>
                                <h3 className='text-sm text-gray-500'>2019-12-15</h3>
                                <h1 className='text-2xl font-medium'>Test</h1>
                            </div>
                        </CardHeader>
                        <CardBody className='tracking-widest mb-5'>
                            <p>Tinggi Badan : 92 CM</p>
                            <p>Berat Badan : 11 KG</p>
                            <p>Status Gizi : Gizi Kurang</p>
                        </CardBody>
                        <div className='flex justify-end gap-3'>
                            <Button variant='bordered' className='border-black rounded-full'>Riwayat</Button>
                            <Button className='bg-primary text-white rounded-full'>Grafik</Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default ChildDataComponent