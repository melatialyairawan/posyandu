'use client';

import * as React from 'react';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { Formik, Field, Form } from 'formik';
import { Button } from "@nextui-org/button";

import InputField from '@/components/InputFIeld/InputField';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const validationSchema = Yup.object({
    Tanggal: Yup.date().required('Tanggal is required'),
    NamaAnak: Yup.string().required('Nama Anak is required'),
    Posyandu: Yup.string().required('Posyandu is required'),
    Layanan: Yup.string().required('Layanan is required'),
});

const CustomSelectField = ({ name, placeholder, customClassname, required, options }) => (
    <Field name={name}>
        {({ field, meta }) => (
            <div className={`relative ${customClassname}`}>
                <label htmlFor={name} className='capitalize'>{name}</label>
                <select
                    id={name}
                    {...field}
                    className="form-select w-full mt-2 text-gray-500 rounded-md shadow-sm"
                    required={required}
                >
                    <option value="" disabled>{placeholder}</option>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                {meta.touched && meta.error && (
                    <p className="mt-1 text-sm text-red-600">{meta.error}</p>
                )}
            </div>
        )}
    </Field>
);

export const PendaftaranAntrean = () => {
    const initialValues = {
        Tanggal: '',
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
            {({ isSubmitting, setFieldValue }) => (
                <Form className="space-y-4 shadow p-5">
                    <h2 className="text-2xl text-center font-semibold mb-4">Pendaftaran Antrean Posyandu</h2>
                    <div className="flex flex-col md:flex-row items-start gap-5 md:gap-10 mt-2">
                         <InputField
                            name="Tanggal"
                            type="date"
                            placeholder="Pilih Tanggal"
                            customClassname="w-full text-sm mt-2"
                            required={true}
                        />
                        <InputField
                            name="Posyandu"
                            type="text"
                            placeholder="Pilih Posyandu"
                            customClassname="w-full mt-2"
                            required={true}
                        />
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-start gap-5 md:gap-10 mt-2">
                        <InputField
                            name="NamaAnak"
                            type="text"
                            placeholder="Pilih Nama Anak"
                            customClassname="w-full"
                            required={true}
                        />
                        <CustomSelectField
                            name="Layanan"
                            placeholder="Pilih Layanan"
                            customClassname="w-full mt-2"
                            required={true}
                            options={[
                                { value: '', label: 'Pilih Layanan' },
                                { value: 'Imunisasi', label: 'Imunisasi' },
                                { value: 'Vaksin', label: 'Vaksin' },
                                { value: 'Vitamin', label: 'Vitamin' },
                            ]}
                        />
                    </div>

                    <Button type="submit" className="w-fit mb-1 bg-primary text-white" isLoading={isSubmitting}>
                        Daftar
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default PendaftaranAntrean;
