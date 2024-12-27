'use client';

import * as React from 'react';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { Formik, Form, Field } from 'formik';
import { Button } from "@nextui-org/button";
import { Textarea, RadioGroup, Radio } from "@nextui-org/react";
import InputField from '@/components/InputFIeld/InputField';
import SearchableSelect from '@/components/SeachSelect/SearchSelect';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const validationSchema = Yup.object({
    Kegiatan: Yup.string().required('Kegiatan is required').min(3, 'Kegiatan must be at least 3 characters'),
    Tanggal: Yup.date().required('Tanggal is required'),
    Kecamatan: Yup.string().required('Kecamatan is required').min(3, 'Kecamatan must be at least 3 characters'),
    Nik: Yup.number().required('NIK is required').min(16, 'NIK must be at least 16 characters'),
});

export const AddChildDataComponent = () => {
    const initialValues = {
        Kegiatan: '',
        Tanggal: '',
        mulai_pukul: '',
        selesai_pukul: '',
        Kecamatan: '',
        nik: '',
    };

    const parentName = [
        { key: 'johndoe', label: 'John' },
        { key: 'janedoe', label: 'Jane Doe' },
        { key: 'babydoe', label: 'Baby Doe' },
    ];

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
                <Form className="space-y-4 shadow p-5">
                    <div className="flex flex-col md:flex-row items-start gap-5 md:gap-10">
                        <InputField
                            name="Nama Anak"
                            type="text"
                            placeholder="Masukkan nama anak"
                            customClassname="w-full"
                            required={true}
                        />
                        <SearchableSelect
                            label="Nama Orang Tua"
                            placeholder="Pilih Nama Orang Tua"
                            options={parentName}
                            onSelect={handleSelect}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row items-start gap-5 md:gap-10">
                        <InputField
                            name="NIK"
                            type="number"
                            placeholder="Masukkan NIK"
                            customClassname="w-full"
                            required={true}
                        />
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
                    </div>
                    <div className="flex flex-col md:flex-row items-start gap-5 md:gap-10">
                        <InputField
                            name="Tanggal lahir"
                            type="date"
                            placeholder="Masukkan tanggal lahir"
                            customClassname="w-full"
                            required={true}
                        />
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-gray-700 font-medium" htmlFor="Keterangan">
                                Keterangan
                            </label>
                            <Textarea
                                type="text"
                                placeholder="Masukkan Keterangan"
                                required={false}
                            />
                        </div>
                    </div>

                    <Button type="submit" className="w-fit mb-1 bg-primary text-white" isLoading={isSubmitting}>
                        Simpan
                    </Button>
                </Form>
            )}
        </Formik>
    );
};
