'use client';

import * as React from 'react';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { Formik, Form } from 'formik';
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/react";
import InputField from '@/components/InputFIeld/InputField';
import SearchableSelect from '@/components/SeachSelect/SearchSelect';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const validationSchema = Yup.object({
    Kegiatan: Yup.string().required('Kegiatan is required').min(3, 'Kegiatan must be at least 3 characters'),
    Tanggal: Yup.date().required('Tanggal is required'),
    Kecamatan: Yup.string().required('Kecamatan is required').min(3, 'Kecamatan must be at least 3 characters'),
});

export const ScheduleCreateComponent = () => {
    const initialValues = {
        Kegiatan: '',
        Tanggal: '',
        mulai_pukul: '',
        selesai_pukul: '',
        Kecamatan: '',
    };

    const childName = [
        { key: 'johndoe', label: 'John Doe' },
        { key: 'janedoe', label: 'Jane Doe' },
        { key: 'babydoe', label: 'Baby Doe' },
    ];

    const posyandu = [
        { key: 'posyandu1', label: 'Posyandu-1' },
        { key: 'posyandu2', label: 'Posyandu-2' },
        { key: 'posyandu3', label: 'Posyandu-3' },
    ];

    const services = [
        { key: 'service1', label: 'Imunisasi' },
        { key: 'service2', label: 'Vitamin' },
        { key: 'service3', label: 'Cek Berat/Tinggi Badan' },
    ]

    const router = useRouter();

    const handleSelect = (value) => {
        console.log(value);
    }

    const handleSubmit = async (values, actions) => {
        try {
            console.log({ values, actions });
            await sleep(1000);
        } catch (error) {
            console.error(error);
        } finally {
            router.push('/');
            actions.setSubmitting(false);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, setFieldValue }) => (
                <Form className="space-y-4 shadow p-7 rounded-xl">
                    <h1 className='text-2xl font-semibold'>Pilih Jadwal</h1>
                    <p className='text-gray-500'>Booking Sesuai Jadwal Anda</p>
                    <div className="flex flex-col md:flex-row items-start gap-5 md:gap-10">
                        <SearchableSelect
                            label="Posyandu Tujuan"
                            placeholder="Pilih Posyandu"
                            options={posyandu}
                            onSelect={handleSelect}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row items-start gap-5 md:gap-10">
                        <InputField
                            name="Pilih Tanggal"
                            type="date"
                            customClassname="w-full"
                            required={true}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row items-start gap-5 md:gap-10">
                        <SearchableSelect
                            label="Pilih Nama Anak"
                            placeholder="Pilih Nama Anak"
                            options={childName}
                            onSelect={handleSelect}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row items-start gap-5 md:gap-10">
                        <SearchableSelect
                            label="Pilih Layanan"
                            placeholder="Pilih Layanan"
                            options={services}
                            onSelect={handleSelect}
                        />
                    </div>

                    <div className='flex justify-end'>
                        <Button type="submit" className="w-fit mb-1 bg-primary text-white" isLoading={isSubmitting}>
                            Buat
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};
