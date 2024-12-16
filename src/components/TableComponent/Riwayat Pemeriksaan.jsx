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
    Button,
    Input,
    Skeleton,
    useDisclosure,
} from '@nextui-org/react';
import { LuPencilLine } from "react-icons/lu";
import toast from 'react-hot-toast';

export default function RiwayatPemeriksaanTable() {
    const [isLoaded, setIsLoaded] = useState(false);
    const router = useRouter();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const handleToAdd = async () => {
        const loadingToast = toast.loading('Loading...');
        try {
            await router.push('/admin/inspectionHistory/addData');
            toast.success('Redirecting...');
        } catch (error) {
            toast.error('Navigation failed');
        } finally {
            toast.dismiss(loadingToast);
        }
    }

    const data = [
        { id: '#12218A', inspectionDate: '2024-10-15', inspection: 'Vitamin A' },
        { id: '#12512B', inspectionDate: '2024-11-15', inspection: 'Imunisasi Polio' },
    ];

    return (
        <div className="">
            <div className="flex justify-between items-center mb-5">
                <h3 className="text-xl font-semibold">Riwayat Pemeriksaan</h3>
            </div>

            <div className="flex gap-4 mb-5">
                <Input
                    clearable
                    placeholder="Search..."
                    className="w-full"
                />
            </div>

            <Table
                aria-label="Example table with dynamic content"
                className="w-full border border-gray-200 rounded-2xl shadow-md"
            >
                <TableHeader>
                    <TableColumn>No</TableColumn>
                    <TableColumn>Tanggal Pemeriksaan</TableColumn>
                    <TableColumn>Pemeriksaan</TableColumn>
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
                                    {item.inspectionDate}
                                </Skeleton>
                            </TableCell>
                            <TableCell>
                                <Skeleton isLoaded={isLoaded}>
                                    {item.inspection}
                                </Skeleton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
