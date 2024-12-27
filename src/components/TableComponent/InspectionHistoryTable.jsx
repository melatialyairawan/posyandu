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
    Badge,
    Checkbox,
    Pagination,
    Skeleton,
    Select,
    SelectItem,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from '@nextui-org/react';
import { LuPencilLine, LuTrash } from "react-icons/lu";
import toast from 'react-hot-toast';

export default function InspectionHistoryTable() {
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
    const handleToEdit = () => {
        const loadingToast = toast.loading('Loading...');
        try {
            router.push('/admin/inspectionHistory/editData');
            toast.success('Redirecting...');
        } catch (error) {
            toast.error('Navigation failed');
        } finally {
            toast.dismiss(loadingToast);
        }
    }

    const data = [
        { id: '#12218A', childName: 'anita.h', parentName: 'john', inspectionDate: '04-01-2000', inspection: 'Imunisasi', keterangan: '-' },
        { id: '#12512B', childName: 'tom.a', parentName: 'doe', inspectionDate: '01-01-2000', inspection: 'Vitamin', keterangan: '-' },
    ];

    return (
        <div className="">
            <div className="flex justify-between items-center mb-5">
                <h3 className="text-xl font-semibold">Kelola Riwayat Pemeriksaan</h3>
                <Button color="success" auto className="bg-primary text-white" onPress={handleToAdd}>+ Tambahkan</Button>
            </div>

            <div className="flex gap-4 mb-5">
                <Select placeholder="Filter" className="w-1/4 min-w-[150px]">
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="imunisasi">Imunisasi</SelectItem>
                    <SelectItem value="vaksinasi">Vaksinasi</SelectItem>
                    <SelectItem value="vitamin">Vitamin</SelectItem>
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
                    <TableColumn>Nama Anak</TableColumn>
                    <TableColumn>Nama Orang tua</TableColumn>
                    <TableColumn>Tanggal Periksa</TableColumn>
                    <TableColumn>Pemeriksaan</TableColumn>
                    <TableColumn>Keterangan</TableColumn>
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
                                    {item.childName}
                                </Skeleton>
                            </TableCell>
                            <TableCell>
                                <Skeleton isLoaded={isLoaded}>
                                    {item.parentName}
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
                            <TableCell>
                                <Skeleton isLoaded={isLoaded}>
                                    {item.keterangan}
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