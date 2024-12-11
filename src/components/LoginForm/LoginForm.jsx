'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Formik, Form, Field, FieldProps, FormikHelpers } from 'formik';
import { Button, ButtonGroup } from "@nextui-org/button";
import { FcGoogle } from "react-icons/fc";
import InputField from './InputField';
import * as Yup from 'yup';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
})

export const InputForm = () => {
    const initialValues = { username: '', password: '' };
    const router = useRouter();

    const handleSubmit = async (values, actions) => {
        try {
            console.log({ values, actions });
            await sleep(1000);
            // alert(JSON.stringify(values, null, 2));
        } catch (error) {
            console.error(error);
        } finally {
            router.push('/');
            actions.setSubmitting(false);
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form className="space-y-4">
                    <InputField
                        name='username'
                        type='text'
                        placeholder='Masukkan username'
                    />
                    <InputField
                        name='password'
                        type='password'
                        placeholder='Masukkan password'
                    />
                    <Button type="submit" className="w-full mb-1 bg-[#34A853] text-white" isLoading={isSubmitting}>
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    );
};