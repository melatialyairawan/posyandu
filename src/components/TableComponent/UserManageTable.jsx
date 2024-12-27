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
    Checkbox,
    Pagination,
    Skeleton,
    Select,
    SelectItem,
    useDisclosure,
} from '@nextui-org/react';
import { LuPencilLine } from "react-icons/lu";
import toast from 'react-hot-toast';

export default function UserManageTable() {
    const [isLoaded, setIsLoaded] = useState(false);
    const router = useRouter();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const handleToEdit = () => {
        const loadingToast = toast.loading('Loading...');
        try {
            router.push('/admin/userManagement/editData');
            toast.success('Redirecting...');
        } catch (error) {
            toast.error('Navigation failed');
        } finally {
            toast.dismiss(loadingToast);
        }
    }

    const data = [
        { id: '#12218A', accName: 'anita.h', phoneNumber: '08xxxxxxx', desa: '-', role: '-' },
        { id: '#12512B', accName: 'tom.a', phoneNumber: '08xxxxxxx', desa: '-', role: '-' },
    ];

    return (
        <div className="">
            <div className="flex justify-between items-center mb-5">
                <h3 className="text-xl font-semibold">Kelola Akses User</h3>
            </div>

            <div className="flex gap-4 mb-5">
                <Select placeholder="Filter" className="w-1/4 min-w-[150px]">
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="user">User</SelectItem>
                </Select>
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
                    {/* <TableColumn> </TableColumn> */}
                    <TableColumn>ID Anak</TableColumn>
                    <TableColumn>Nama Akun</TableColumn>
                    <TableColumn>Nomor HP</TableColumn>
                    <TableColumn>Peran</TableColumn>
                    <TableColumn>Aksi</TableColumn>
                </TableHeader>
                <TableBody>
                    {data.map((item, index) => (
                        <TableRow key={index} className="hover:bg-gray-100">
                            {/* <TableCell>
                                <Skeleton isLoaded={isLoaded}>
                                    <Checkbox />
                                </Skeleton>
                            </TableCell> */}
                            <TableCell>
                                <Skeleton isLoaded={isLoaded}>
                                    {item.id}
                                </Skeleton>
                            </TableCell>
                            <TableCell>
                                <Skeleton isLoaded={isLoaded}>
                                    {item.accName}
                                </Skeleton>
                            </TableCell>
                            <TableCell>
                                <Skeleton isLoaded={isLoaded}>
                                    {item.phoneNumber}
                                </Skeleton>
                            </TableCell>
                            <TableCell>
                                <Skeleton isLoaded={isLoaded}>
                                    {item.role}
                                </Skeleton>
                            </TableCell>
                            <TableCell>
                                <Skeleton isLoaded={isLoaded}>
                                    <Button isIconOnly onPress={handleToEdit} className="text-primary bg-white border-primary border mr-2">
                                        <LuPencilLine size={15} />
                                    </Button>
                                </Skeleton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <div className="flex justify-center mt-5">
                <Pagination total={1} initialPage={1} />
            </div>
        </div>
    );
}