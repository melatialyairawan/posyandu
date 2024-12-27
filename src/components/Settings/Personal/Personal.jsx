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
});

export const Personal = () => {
    const initialValues = {

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
                            name="Nama Pengguna"
                            type="text"
                            placeholder="Una sari"
                            customClassname="w-full"
                            required={true}
                        />
                        <InputField
                            name="Jenis kelamin"
                            type="text"
                            placeholder="Perempuan"
                            customClassname="w-full"
                            required={true}
                        />
                    </div>

                    <div className="flex flex-col md:flex-row items-start gap-5 md:gap-10">
                        <InputField
                            name="Alamat"
                            type="text"
                            placeholder="Desa "
                            customClassname="w-full"
                            required={true}
                        />
                        <InputField
                            name="No HP"
                            type="text"
                            placeholder="089236473263 "
                            customClassname="w-full"
                            required={true}
                        />
                    </div>
                </Form>
            )}
        </Formik>
    );
};