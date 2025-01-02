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

export const ScheduleCreateSecond = () => {
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

    const services = [
        { key: 'service1', label: 'Imunisasi' },
        { key: 'service2', label: 'Vitamin' },
        { key: 'service3', label: 'Cek Berat/Tinggi Badan' },
        { key: 'service4', label: 'Konsultasi' },
        { key: 'service5', label: 'Pemeriksaan Kesehatan' },
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
                <Form className="space-y-4 shadow lg:p-7 p-2 rounded-xl mb-20">
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
                </Form>
            )}
        </Formik>
    );
};
