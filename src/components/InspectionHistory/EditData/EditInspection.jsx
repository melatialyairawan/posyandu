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

export const EditDataInspection = () => {
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

    const parentName = [
        { key: 'johndoe', label: 'John' },
        { key: 'janedoe', label: 'Jane Doe' },
        { key: 'babydoe', label: 'Baby Doe' },
    ];

    const inspections = [
        { key: 'vitamin', label: 'Vitamin' },
        { key: 'imunisasi', label: 'Imunisasi' },
        { key: 'vaksinasi', label: 'Vaksinasi' },
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
                <Form className="space-y-4 shadow p-5">
                    <div className="flex flex-col md:flex-row items-start gap-5 md:gap-10">
                        <SearchableSelect
                            label="Nama Anak"
                            placeholder="Pilih Nama Anak"
                            options={childName}
                            onSelect={handleSelect}
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
                            name="Tanggal Periksa"
                            type="date"
                            placeholder="Masukkan tinggi badan awal (cm)"
                            customClassname="w-full"
                            required={true}
                        />
                        <SearchableSelect
                            label="Pemeriksaan"
                            placeholder="Pilih Jenis Pemeriksaan"
                            options={inspections}
                            onSelect={handleSelect}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row items-start gap-5 md:gap-10">
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
