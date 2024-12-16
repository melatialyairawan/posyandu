'use client';

import React, { useState, useEffect } from 'react';
import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell,
    Skeleton,
} from '@nextui-org/react';

export default function PosyanduTable() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const data = [
        { namaPosyandu: 'Posyandu Seroja', namaBidan: 'Bu Yunia', jamOperasional: '08.00-10.00', alamat: 'Desa Jati Wetan RT 01, RW 02' },
    ];

    return (
        <div className="">
            <div className="flex justify-between items-center mb-5">
                <h3 className="text-xl font-semibold mt-8">Daftar Posyandu</h3>
            </div>

            <Table
                aria-label="Daftar Posyandu"
                className="w-full border border-gray-200 rounded-2xl shadow-md"
            >
                <TableHeader>
                    <TableColumn>No</TableColumn>
                    <TableColumn>Nama Posyandu</TableColumn>
                    <TableColumn>Nama Bidan</TableColumn>
                    <TableColumn>Jam Operasional</TableColumn>
                    <TableColumn>Alamat Posyandu</TableColumn>
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
                                    {item.namaPosyandu}
                                </Skeleton>
                            </TableCell>
                            <TableCell>
                                <Skeleton isLoaded={isLoaded}>
                                    {item.namaBidan}
                                </Skeleton>
                            </TableCell>
                            <TableCell>
                                <Skeleton isLoaded={isLoaded}>
                                    {item.jamOperasional}
                                </Skeleton>
                            </TableCell>
                            <TableCell>
                                <Skeleton isLoaded={isLoaded}>
                                    {item.alamat}
                                </Skeleton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
