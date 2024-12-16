'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell,
    Checkbox,
    Skeleton,
    useDisclosure,
} from '@nextui-org/react';
import toast from 'react-hot-toast';

export default function TimbanganTable() {
    const [isLoaded, setIsLoaded] = useState(false);
    const router = useRouter();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const handleToChart = (path) => {
        toast.loading('Redirecting to chart...');
        router.push(path);  // Ganti dengan path ke diagram yang sesuai
    };

    const data = [
        { id: '#12218A', childName: 'Ananda Nadia', tanggalLahir: '2019-12-15', beratBadan: '11 kg', tinggiBadan: '92 cm', statusGizi: 'Gizi Kurang' },
    ];

    return (
        <div className="">
            <div className="flex justify-between items-center mb-5">
                <h3 className="text-xl font-semibold mt-8">Data Timbangan</h3>
            </div>

            <Table
                aria-label="Tabel Data Timbangan"
                className="w-full border border-gray-200 rounded-2xl shadow-md"
            >
                <TableHeader>
                    <TableColumn>No</TableColumn>
                    <TableColumn>Nama Anak</TableColumn>
                    <TableColumn>Tanggal Lahir</TableColumn>
                    <TableColumn>Terakhir Berat Badan</TableColumn>
                    <TableColumn>Terakhir Tinggi Badan</TableColumn>
                    <TableColumn>Status Gizi</TableColumn>
                </TableHeader>
                <TableBody>
                    {data.map((item, index) => (
                        <TableRow key={index} className="hover:bg-gray-100">
                            <TableCell>
                                <Skeleton isLoaded={isLoaded}>
                                    {index + 1}
                                </Skeleton>
                            </TableCell>
                            <TableCell>
                                <Skeleton isLoaded={isLoaded}>
                                    {item.childName}
                                     <div className='mt-2'>
                                        <span className="text-teal-500 cursor-pointer" onClick={() => handleToChart('/user/riwayatpemeriksaan')}>cek riwayat</span>
                                    </div>

                                </Skeleton>
                            </TableCell>
                            <TableCell>
                                <Skeleton isLoaded={isLoaded}>
                                    {item.tanggalLahir}
                                </Skeleton>
                            </TableCell>
                            <TableCell>
                                <Skeleton isLoaded={isLoaded}>
                                    {item.beratBadan} 
                                    <div className='mt-2'>
                                        <span className="text-teal-500 cursor-pointer" onClick={() => handleToChart('/user/chart/weight')}>cek grafik</span>
                                    </div>
                                </Skeleton>
                            </TableCell>
                            <TableCell>
                                <Skeleton isLoaded={isLoaded}>
                                    {item.tinggiBadan}
                                    <div className='mt-2'>
                                        <span className="text-teal-500 cursor-pointer" onClick={() => handleToChart('/user/chart/height')}>cek grafik</span>
                                    </div>
                                </Skeleton>
                            </TableCell>
                            <TableCell>
                                <Skeleton isLoaded={isLoaded}>
                                    {item.statusGizi}
                                </Skeleton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
