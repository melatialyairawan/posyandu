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
import { LuPencilLine, LuPlus, LuTrash } from "react-icons/lu";
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
            await router.push('/admin/dashboard/addActivity');
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
            router.push('/admin/dashboard/editActivity');
            toast.success('Redirecting...');
        } catch (error) {
            toast.error('Navigation failed');
        } finally {
            toast.dismiss(loadingToast);
        }
    }

    const data = [
        { namaposyandu: 'Posyandu Seroja', tanggal: '09-10-2024', jumlahpengunjung: '24', alamat: 'Getas Pejaten RT 00/RW 00, Jati, Kudus', },
        { namaposyandu: 'Posyandu Melati 5', tanggal: '19-11-2024', jumlahpengunjung: '27', alamat: 'Jati Wetan RT 01/RW 02, Jati, Kudus', },
    ];

    return (
        <div className="">
            <div className="flex justify-end items-center mb-5">
            <Button color="success" auto className="bg-primary text-white" onPress={handleToAdd}>+ Tambahkan</Button>
            </div>

            <Table
                aria-label="Example table with dynamic content"
                className="w-full border border-gray-200 rounded-2xl shadow-md"
            >
                <TableHeader>
                    <TableColumn> </TableColumn>
                    <TableColumn>Nama Posyandu</TableColumn>
                    <TableColumn>Tanggal</TableColumn>
                    <TableColumn>Jumlah Pengunjung</TableColumn>
                    <TableColumn>Alamat</TableColumn>
                    <TableColumn>Aksi</TableColumn>
                </TableHeader>
                <TableBody>
                    {data.map((item, index) => (
                        <TableRow key={index} className="hover:bg-gray-100">
                            <TableCell>
                                <Skeleton isLoaded={isLoaded}>
                                    <Checkbox />
                                </Skeleton>
                            </TableCell>
                            <TableCell>
                                <Skeleton isLoaded={isLoaded}>
                                    {item.namaposyandu}
                                </Skeleton>
                            </TableCell>
                            <TableCell>
                                <Skeleton isLoaded={isLoaded}>
                                    {item.tanggal}
                                </Skeleton>
                            </TableCell>
                            <TableCell>
                                <Skeleton isLoaded={isLoaded}>
                                    {item.jumlahpengunjung}
                                </Skeleton>
                            </TableCell>
                            <TableCell>
                                <Skeleton isLoaded={isLoaded}>
                                    {item.alamat}
                                </Skeleton>
                            </TableCell>
                            <TableCell>
                                <Skeleton isLoaded={isLoaded}>
                                    <Button isIconOnly onPress={handleToEdit} className="text-primary bg-white border-primary border mr-2">
                                        <LuPencilLine size={15} />
                                    </Button>
                                
                                    <Button
                                        isIconOnly
                                        onPress={() => {
                                            onOpen();
                                        }}
                                        className="text-red-500 bg-white border-red-500 border"
                                    >
                                        <LuTrash size={15} />
                                    </Button>
                                    <Modal
                                        backdrop="blur"
                                        isOpen={isOpen}
                                        onOpenChange={onOpenChange}
                                    >
                                        <ModalContent>
                                            {(onClose) => (
                                                <>
                                                    <ModalHeader className="flex flex-col gap-1">Confirm</ModalHeader>
                                                    <ModalBody>
                                                        <p>Are you sure you want to delete this task?</p>
                                                    </ModalBody>
                                                    <ModalFooter>
                                                        <Button color="primary" variant="light" onPress={onClose}>
                                                            Cancel
                                                        </Button>
                                                        <Button color="danger" onPress={() => {
                                                            handleDelete();
                                                            onClose();
                                                        }}>
                                                            Delete
                                                        </Button>
                                                    </ModalFooter>
                                                </>
                                            )}
                                        </ModalContent>
                                    </Modal>
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