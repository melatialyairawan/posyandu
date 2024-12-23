'use client';

import * as React from 'react';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { Formik, Field, Form } from 'formik';
import { Button } from "@nextui-org/button";
import { RadioGroup, Radio, Textarea } from "@nextui-org/react";
import InputField from '@/components/InputFIeld/InputField';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const validationSchema = Yup.object({
    Kegiatan: Yup.string().required('Kegiatan is required').min(3, 'Kegiatan must be at least 3 characters'),
    Tanggal: Yup.date().required('Tanggal is required'),
    Kecamatan: Yup.string().required('Kecamatan is required').min(3, 'Kecamatan must be at least 3 characters'),
});

export const AddDataWeight = () => {
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
                            name="Nama Anak"
                            type="text"
                            placeholder="Masukkan nama anak"
                            customClassname="w-full"
                            required={true}
                        />
                        <InputField
                            name="NIK"
                            type="text"
                            placeholder="Masukkan NIK"
                            customClassname="w-full"
                            required={true}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row items-start gap-5 md:gap-10">
                        <Field name="gender">
                            {({ field, meta }) => (
                                <div className="mt-4 w-full">
                                    <label className="text-gray-700 font-medium">Gender</label>
                                    <RadioGroup
                                        className="flex gap-4 mt-2"
                                        isRequired
                                    >
                                        <Radio value="male">Laki - Laki</Radio>
                                        <Radio value="female">Perempuan</Radio>
                                    </RadioGroup>
                                    <div className="h-5">
                                        {meta.touched && meta.error && (
                                            <p className="text-sm text-red-600">{meta.error}</p>
                                        )}
                                    </div>
                                </div>
                            )}
                        </Field>
                        <InputField
                            name="Tanggal Lahir"
                            type="date"
                            customClassname="w-full text-sm mt-4"
                            required={true}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row items-start gap-5 md:gap-10">
                        <InputField
                            name="Nama Orang Tua"
                            type="text"
                            placeholder="Masukkan nama orang tua"
                            customClassname="w-full"
                            required={true}
                        />
                        <InputField
                            name="Nomor Orang Tua"
                            type="number"
                            placeholder="Masukkan nomor orang tua"
                            customClassname="w-full"
                            required={true}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row items-start gap-5 md:gap-10">
                        <InputField
                            name="Kecamatan"
                            type="text"
                            placeholder="Masukkan Kecamatan"
                            customClassname="w-full"
                            required={true}
                        />
                        <InputField
                            name="Desa"
                            type="text"
                            placeholder="Masukkan Desa"
                            customClassname="w-full"
                            required={true}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row items-start gap-5 md:gap-10">
                        <div className='w-full flex flex-col gap-2'>
                            <label className="text-gray-700 font-medium">Alamat Lengkap</label>
                            <Textarea
                                type="text"
                                placeholder="Masukkan alamat lengkap"
                                required={true}
                            />
                        </div>
                        <InputField
                            name="Nomor HP"
                            type="number"
                            placeholder="Masukkan nomor hp"
                            customClassname="w-full"
                            required={true}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row items-start gap-5 md:gap-10">
                        <InputField
                            name="Berat Badan Awal"
                            type="number"
                            placeholder="Masukkan berat badan awal (kg)"
                            customClassname="w-full"
                            required={true}
                        />
                        <InputField
                            name="Tinggi Badan Awal"
                            type="number"
                            placeholder="Masukkan tinggi badan awal (cm)"
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