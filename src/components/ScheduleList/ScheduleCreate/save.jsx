'use client';

import React, { useState, useEffect } from 'react';
import {
    Switch,
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
import { FaTable } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa";
import InputField from '../InputFIeld/InputField';
import SearchableSelect from '../SeachSelect/SearchSelect';
import { ScheduleCreateComponent } from './ScheduleCreate/ScheduleCreateComponent';
import { ScheduleCreateSecond } from './ScheduleCreate/new';
import ScheduleCard from './ScheduleCard';
import { StepIndicator } from './ScheduleHelper';
import { Verification } from './ScheduleHelper';
import { Details } from './ScheduleHelper';
import useStore from '@/store/useStore';

const steps = [
    { step: 1, label: '' },
    { step: 2, label: '' },
    { step: 3, label: '' },
];

const ScheduleListComponent = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isCreateModalOpen, onOpen: openCreateModal, onClose: closeCreateModal } = useDisclosure();
    const [currentStep, setCurrentStep] = useState(1);
    const [isNextDisabled, setIsNextDisabled] = useState(true);
    const { isFilled } = useStore((state) => state);

    const [formData, setFormData] = useState({
        Kegiatan: '',
        Tanggal: '',
        Kecamatan: '',
        childName: '',
        service: '',
    });

    const validateCurrentStep = () => {
        switch (currentStep) {
            case 1:
                return formData.Kegiatan && formData.Tanggal && formData.Kecamatan;
            case 2:
                return formData.childName && formData.service;
            default:
                return true;
        }
    };

    const handleNext = () => {
        if (validateCurrentStep()) {
            setCurrentStep((prev) => prev + 1);
            setIsNextDisabled(true);
        }
    };

    const handleBack = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

    const handleReset = () => {
        setCurrentStep(1);
        setFormData({
            Kegiatan: '',
            Tanggal: '',
            Kecamatan: '',
            childName: '',
            service: '',
        });
        setIsNextDisabled(true);
        closeCreateModal();
    };

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        const isFilled = Object.values(formData).some((val) => val !== null && val !== '');
        setIsNextDisabled(!isFilled);
    };

    return (
        <div className='p-5'>
            <header className='flex justify-between items-center mb-5'>
                <div>
                    <h1 className='text-2xl font-semibold'>Buat Jadwal</h1>
                    <p className='text-gray-400'>Lihat jadwal acara Anda dari tautan acara kalender Anda</p>
                </div>
                <Button color='primary' radius='full' onPress={openCreateModal}>Buat Jadwal</Button>
            </header>

            <Modal
                backdrop='opaque'
                placement='center'
                isOpen={isCreateModalOpen}
                onClose={handleReset}
                radius='lg'
                size='xl'
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className='flex flex-col'>
                                <h1 className='lg:text-2xl text-xl'>Buat Jadwal</h1>
                                <p className='text-gray-400 font-normal text-base'>Booking Sesuai Jadwal Anda</p>
                            </ModalHeader>
                            <ModalBody>
                                <div className='flex items-center justify-center'>
                                    {steps.map(({ step, label }) => (
                                        <StepIndicator
                                            key={step}
                                            step={step}
                                            label={label}
                                            isActive={currentStep === step}
                                        />
                                    ))}
                                </div>
                                {currentStep === 1 && (
                                    <ScheduleCreateComponent
                                        data={formData}
                                        onInputChange={handleInputChange}
                                        onNext={(data) => {
                                            setFormData((prev) => ({ ...prev, ...data }));
                                            handleNext();
                                        }}
                                    />
                                )}
                                {currentStep === 2 && (
                                    <ScheduleCreateSecond
                                        data={formData}
                                        onInputChange={handleInputChange}
                                        onNext={(data) => {
                                            setFormData((prev) => ({ ...prev, ...data }));
                                            handleNext();
                                        }}
                                    />
                                )}
                                {currentStep === 3 && <Verification />}
                            </ModalBody>
                            <ModalFooter>
                                {currentStep > 1 && (
                                    <Button
                                        variant='bordered'
                                        className='rounded-full'
                                        onPress={handleBack}
                                    >
                                        Kembali
                                    </Button>
                                )}
                                {currentStep < 3 ? (
                                    <Button
                                        color="primary"
                                        className="rounded-full"
                                        onPress={handleNext}
                                        isDisabled={!isFilled}
                                    >
                                        Lanjut
                                    </Button>
                                ) : (
                                    <Button color="primary" className="rounded-full" onPress={handleReset}>
                                        Buat
                                    </Button>
                                )}
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

            <div className='flex justify-between items-center mb-10'>
                <Input placeholder="Cari..." type='search' size='lg' startContent={<IoSearchOutline />} className='max-w-96 w-full' />
                <Switch
                    size="lg"
                    thumbIcon={({ isSelected, className }) =>
                        isSelected ? <FaListUl className={className} /> : <FaTable className={className} />
                    }
                />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {[...Array(10)].map((_, index) => (
                    <ScheduleCard key={index} openModal={onOpen} />
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
                                <Details />
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
    );
};

export default ScheduleListComponent;
