'use client';

import * as React from 'react';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { Formik, Field, Form } from 'formik';
import { Button } from "@nextui-org/button";
import InputField from '@/components/InputFIeld/InputField';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const validationSchema = Yup.object({
    Kegiatan: Yup.string().required('Kegiatan is required').min(3, 'Kegiatan must be at least 3 characters'),
    Tanggal: Yup.date().required('Tanggal is required'),
    Kecamatan: Yup.string().required('Kecamatan is required').min(3, 'Kecamatan must be at least 3 characters'),
});

export const AddDataAgency = () => {
    const initialValues = {
        Kegiatan: '',
        Tanggal: '',
        mulai_pukul: '',
        selesai_pukul: '',
        Kecamatan: '',
    };

    const router = useRouter();

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
                <Form className="space-y-4 shadow p-5">
                    <div className="flex flex-col md:flex-row items-start gap-5 md:gap-10">
                        <InputField
                            name="Kegiatan"
                            type="text"
                            placeholder="Masukkan Kegiatan"
                            customClassname="w-full"
                            required={false}
                        />
                        <InputField
                            name="Tanggal"
                            type="date"
                            customClassname="w-full"
                            required={false}
                        />
                    </div>
                    <div>
                        <h2 className='mb-2'>Waktu</h2>
                        <div className="flex flex-col md:flex-row items-start gap-5 md:gap-10">
                            <InputField
                                name="Mulai Pukul"
                                type="time"
                                customClassname="w-full text-sm"
                                required={true}
                            />
                            <InputField
                                name="Selesai Pukul"
                                type="time"
                                customClassname="w-full text-sm"
                                required={true}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-start gap-5 md:gap-10">
                        <InputField
                            name="Kecamatan"
                            type="text"
                            placeholder="Masukkan Kecamatan"
                            customClassname="w-full"
                            required={false}
                        />
                        <InputField
                            name="Lokasi Posyandu"
                            type="text"
                            placeholder="Masukkan Lokasi Posyandu"
                            customClassname="w-full"
                            required={true}
                        />
                    </div>

                    <Button type="submit" className="w-fit mb-1 bg-primary text-white" isLoading={isSubmitting}>
                        Simpan
                    </Button>
                </Form>
            )}
        </Formik>
    );
};