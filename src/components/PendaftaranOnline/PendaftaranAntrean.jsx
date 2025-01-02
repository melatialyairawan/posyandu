'use client';

import * as React from 'react';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { Formik, Field, Form } from 'formik';
import { Button } from "@nextui-org/button";
import InputField from '@/components/InputFIeld/InputField';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const validationSchema = Yup.object({
    NamaAnak: Yup.string().required('Nama Anak is required'),
    Posyandu: Yup.string().required('Posyandu is required'),
    Layanan: Yup.string().required('Layanan is required'),
});

const posyanduOptions = [
    { value: 'Posyandu Nalumsari Jepara', label: 'Posyandu Nalumsari Jepara - 16 Agustus 2024' },
    { value: 'Posyandu Pekalongan', label: 'Posyandu Pekalongan - 20 Agustus 2024' },
    { value: 'Posyandu Surakarta', label: 'Posyandu Surakarta - 25 Agustus 2024' },
];

export const PendaftaranAntrean = () => {
    const initialValues = {
        NamaAnak: '',
        Posyandu: '',
        Layanan: '',
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
            {({ isSubmitting, setFieldValue, values }) => (
                <Form className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl text-center font-semibold mb-6">Pendaftaran Antrean Posyandu</h2>
                    <div className="flex flex-col space-y-4">
                        <InputField
                            name="NamaAnak"
                            type="text"
                            placeholder="Nama Anak"
                            customClassname="w-full mt-2"
                            required={true}
                        />
                        <div className="relative w-full">
                            <label htmlFor="Posyandu" className='capitalize mb-2 block'>Posyandu</label>
                            <Dropdown>
                                <DropdownTrigger>
                                    <button className="form-input w-full mt-2 bg-gray-100 border rounded-xl p-2 text-gray-500">
                                        {values.Posyandu || 'Pilih Posyandu'}
                                    </button>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Posyandu" selectionMode="single" onAction={key => setFieldValue('Posyandu', key)}>
                                    {posyanduOptions.map(option => (
                                        <DropdownItem key={option.value}>{option.label}</DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                            {values.Posyandu && (
                                <p className="mt-1 text-sm text-red-600">{values.Posyandu}</p>
                            )}
                        </div>
                        <div className="relative w-full">
                            <label htmlFor="Layanan" className='capitalize mb-2 block'>Layanan</label>
                            <Dropdown>
                                <DropdownTrigger>
                                    <button className="form-input w-full mt-2 bg-gray-100 border rounded-xl p-2 text-gray-500">
                                        {values.Layanan || 'Pilih Layanan'}
                                    </button>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Layanan" selectionMode="single" onAction={key => setFieldValue('Layanan', key)}>
                                    <DropdownItem key="Imunisasi">Imunisasi</DropdownItem>
                                    <DropdownItem key="Vaksin">Vaksin</DropdownItem>
                                    <DropdownItem key="Vitamin">Vitamin</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            {values.Layanan && (
                                <p className="mt-1 text-sm text-red-600">{values.Layanan}</p>
                            )}
                        </div>
                    </div>
                    <Button type="submit" className="w-full bg-primary text-white py-2 mt-4 rounded-md" isLoading={isSubmitting}>
                        Daftar
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default PendaftaranAntrean;
