'use client';

import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Input,
    Button,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@nextui-org/react";
import { IoSearchOutline } from 'react-icons/io5';

const ScheduleListComponent = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div className='p-5'>
            <div>
                <h1 className='text-2xl font-semibold mb-5'>Buat Jadwal</h1>
                <p className='text-gray-400 mb-5'>Lihat jadwal acara Anda dari tautan acara kalender Anda</p>
                <div className='max-w-96 flex mb-10'>
                    <Input placeholder="Cari..." type='search' size='lg' startContent={<IoSearchOutline />} />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {[...Array(10)].map((_, index) => (
                    <Card className='p-5' key={index}>
                        <CardHeader>
                            <div className='flex flex-col gap-1'>
                                <h3 className='text-sm text-gray-500 tracking-widest'>2024 - 12 - 15</h3>
                                <h1 className='text-2xl font-medium'>Imunisasi</h1>
                            </div>
                        </CardHeader>
                        <CardBody className='tracking-widest mb-5'>
                            <p className='text-gray-500'>Posyandu Nalumsari Jepara</p>
                        </CardBody>
                        <div className='flex justify-between'>
                            <div className='flex flex-col xl:flex-row items-start xl:items-center gap-3'>
                                <div className='p-2 border border-black rounded-full tracking-widest'>
                                    <p className='text-xs xl:text-sm'>#10</p>
                                </div>
                                <div className='p-2 border border-black rounded-full tracking-widest'>
                                    <p className='text-xs xl:text-sm'>09:00 - 10:00</p>
                                </div>
                                <div className='p-2 border border-black rounded-full tracking-widest'>
                                    <p className='text-xs xl:text-sm'>Akan Datang</p>
                                </div>
                            </div>
                            <div className='flex justify-end gap-3'>
                                <Button onPress={onOpen} className='bg-primary text-white rounded-full'>Detail</Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
            <Modal backdrop='opaque' placement='center' isOpen={isOpen} onClose={onClose} radius='lg' size='xl' className='flex p-8 items-center justify-center'>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className='flex flex-col gap-5 items-center'>
                                <h1 className='lg:text-3xl text-xl text-primary'>Nomor Antrean</h1>
                                <h1 className='lg:text-3xl textxl text-primary'>#10</h1>
                            </ModalHeader>
                            <ModalBody>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex items-center gap-5'>
                                        <p className='text-lg text-primary font-semibold'>Tanggal</p>
                                        <p>:</p>
                                        <p className='font-semibold'>2024-11-15</p>
                                    </div>
                                    <div className='flex items-center gap-5'>
                                        <p className='text-lg text-primary font-semibold'>Layanan</p>
                                        <p>:</p>
                                        <p className='font-semibold'>Imunisasi</p>
                                    </div>
                                    <div className='flex items-center gap-5'>
                                        <p className='text-lg text-primary font-semibold'>Lokasi Posyandu</p>
                                        <p>:</p>
                                        <p className='font-semibold'>Desa Jati Wetan RT 01, RW 02 </p>
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" className='rounded-full' onPress={onClose}>
                                    Unduh Antrean
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}

export default ScheduleListComponent