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

export default function WeightHeightTable() {
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
            await router.push('/admin/weightHeightManagement/addData');
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
            router.push('/admin/weightHeightManagement/editData');
            toast.success('Redirecting...');
        } catch (error) {
            toast.error('Navigation failed');
        } finally {
            toast.dismiss(loadingToast);
        }
    }

    const data = [
        { id: '#12218A', childName: 'anita.h', tanggalLahir: '04-01-2000', desa: '-', kecamatan: '-', beratBadan: '-', tinggiBadan: '-' },
        { id: '#12512B', childName: 'tom.a', tanggalLahir: '01-01-2000', desa: '-', kecamatan: '-', beratBadan: '-', tinggiBadan: '-' },
    ];

    return (
        <div className="">
            <div className="flex justify-between items-center mb-5">
                <h3 className="text-xl font-semibold">Kelola Berat & Tinggi Badan</h3>
                <Button color="success" auto className="bg-primary text-white" onPress={handleToAdd}>+ Tambahkan</Button>
            </div>

            <div className="flex gap-4 mb-5">
                <Select placeholder="Filter" className="w-1/4 min-w-[150px]">
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="laki-laki">Laki-laki</SelectItem>
                    <SelectItem value="perempuan">Perempuan</SelectItem>
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
                    <TableColumn> </TableColumn>
                    <TableColumn>ID Anak</TableColumn>
                    <TableColumn>Nama Anak</TableColumn>
                    <TableColumn>Tanggal Lahir</TableColumn>
                    <TableColumn>Desa</TableColumn>
                    <TableColumn>Kecamatan</TableColumn>
                    <TableColumn>Berat Badan</TableColumn>
                    <TableColumn>Tinggi Badan</TableColumn>
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
                                    {item.tanggalLahir}
                                </Skeleton>
                            </TableCell>
                            <TableCell>
                                <Skeleton isLoaded={isLoaded}>
                                    {item.desa}
                                </Skeleton>
                            </TableCell>
                            <TableCell>
                                <Skeleton isLoaded={isLoaded}>
                                    {item.kecamatan}
                                </Skeleton>
                            </TableCell>
                            <TableCell>
                                <Skeleton isLoaded={isLoaded}>
                                    {item.beratBadan}
                                </Skeleton>
                            </TableCell>
                            <TableCell>
                                <Skeleton isLoaded={isLoaded}>
                                    {item.tinggiBadan}
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