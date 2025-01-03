'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { Formik, Form } from 'formik';
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/react";
import InputField from '@/components/InputFIeld/InputField';
import SearchableSelect from '@/components/SeachSelect/SearchSelect';
import useStore from '@/store/useStore';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const validationSchema = Yup.object({
    Kegiatan: Yup.string().required('Kegiatan is required').min(3, 'Kegiatan must be at least 3 characters'),
    Tanggal: Yup.date().required('Tanggal is required'),
    Kecamatan: Yup.string().required('Kecamatan is required').min(3, 'Kecamatan must be at least 3 characters'),
});

export const ScheduleCreateComponent = () => {
    const [dateInput, setDateInput] = useState('');
    const { isFilled, setIsFilled } = useStore((state) => state);

    const initialValues = {
        Kegiatan: '',
        Tanggal: '',
        mulai_pukul: '',
        selesai_pukul: '',
        Kecamatan: '',
    };

    const posyandu = [
        { key: 'posyandu1', label: 'Posyandu-1' },
        { key: 'posyandu2', label: 'Posyandu-2' },
        { key: 'posyandu3', label: 'Posyandu-3' },
    ];

    const router = useRouter();

    const handleSelect = (value) => {
        console.log(value);
    }

    useEffect(() => {
        handleDateInput(dateInput);
    }, [dateInput]);

    const handleDateInput = (value) => {
        if (value !== '' && value !== null) {
            setIsFilled(true);
        } else {
            setIsFilled(false);
        }
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
                            value={dateInput}
                            setOnChange={setDateInput}
                        />
                    </div>
                </Form>
            )}
        </Formik>
    );
};
