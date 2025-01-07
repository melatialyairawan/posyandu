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
  "Nama Pengguna": Yup.string().required("Nama Pengguna is required"),
  "Jenis kelamin": Yup.string().required("Jenis kelamin is required"),
  "Alamat": Yup.string().required("Alamat is required"),
  "No HP": Yup.string().required("No HP is required"),
});

export const Informasi = () => {
  const initialValues = {
    "Nama Pengguna": "",
    "Jenis kelamin": "",
    "Alamat": "",
    "No HP": "",
  };

  const router = useRouter();

  const handleSubmit = async (values, actions) => {
    try {
      console.log({ values, actions });
      await sleep(1000);
      // You can add more logic here for submitting the data, e.g., API calls.
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
      {({ isSubmitting }) => (
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
              placeholder="Desa"
              customClassname="w-full"
              required={true}
            />
            <InputField
              name="No HP"
              type="text"
              placeholder="089236473263"
              customClassname="w-full"
              required={true}
            />
          </div>

        </Form>
      )}
    </Formik>
  );
};

export default Informasi;
