'use client';

import React, { useState, useEffect, useMemo } from 'react';
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
    const [searchQuery, setSearchQuery] = useState('');
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
        { id: '#12218A', inspectionDate: '2024-08-16', inspection: 'Imunisasi Polio', location: 'Posyandu Nalumsari Jepara', time: '09:00 - 10:00' },
        { id: '#12218B', inspectionDate: '2024-08-16', inspection: 'Vitamin A', location: 'Posyandu Nalumsari Jepara', time: '10:30 - 11:30' },
        { id: '#12512B', inspectionDate: '2024-09-16', inspection: 'Imunisasi HB', location: 'Posyandu Nalumsari Jepara', time: '09:00 - 10:00' },
        { id: '#12512C', inspectionDate: '2024-09-16', inspection: 'Imunisasi BCG', location: 'Posyandu Nalumsari Jepara', time: '10:30 - 11:30' },
        { id: '#12512D', inspectionDate: '2024-10-16', inspection: 'Campak', location: 'Posyandu Nalumsari Jepara', time: '09:00 - 10:00' },
        { id: '#12512E', inspectionDate: '2024-10-16', inspection: 'Imunisasi HiB', location: 'Posyandu Nalumsari Jepara', time: '10:30 - 11:30' },
        { id: '#12512F', inspectionDate: '2024-11-16', inspection: 'Vitamin A', location: 'Posyandu Nalumsari Jepara', time: '09:00 - 10:00' },
        { id: '#12512G', inspectionDate: '2024-11-16', inspection: 'Imunisasi Polio', location: 'Posyandu Nalumsari Jepara', time: '10:30 - 11:30' },
    ];

    const filteredData = useMemo(() => {
        const sortedData = [...data].sort((a, b) => new Date(b.inspectionDate) - new Date(a.inspectionDate));
        return sortedData.filter(item =>
            item.inspection.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
            new Date(item.inspectionDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }).includes(searchQuery)
        );
    }, [searchQuery, data]);

    return (
        <div className="">
            <div className="flex justify-between items-center mb-5">
                <h3 className="text-xl font-semibold">Anak Detail Pemeriksaan</h3>
            </div>

            <div className="flex gap-4 mb-5">
                <Input
                    clearable
                    placeholder="Search..."
                    className="w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {filteredData.map((item, index) => (
                <div key={index} className="mb-8"> {/* Adjusted margin-bottom for spacing */}
                    <h4 className="text-lg font-semibold mb-2">{new Date(item.inspectionDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</h4> {/* Added margin-bottom for spacing */}
                    <div className="border border-gray-200 rounded-2xl shadow-md p-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-semibold">{item.inspection}</p>
                                <p className="text-sm text-gray-500">{item.location}</p>
                            </div>
                            <div className="text-sm text-gray-500">
                                {item.time}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
