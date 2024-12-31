"use client";
import React, { useState } from 'react';
import { Field, FieldProps } from 'formik';
import { Input } from "@nextui-org/input";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";

const InputField = ({ name, type, placeholder, customClassname, required, value, setOnChange }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Field name={name}>
            {({ field, meta }) => (
                <div className={`relative ${customClassname}`}>
                    <label htmlFor={name} className='capitalize'>{name}</label>
                    <Input
                        id={name}
                        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
                        placeholder={placeholder}
                        {...field}
                        aria-invalid={meta.touched && !!meta.error}
                        className={`w-full mt-2`}
                        isRequired={required}
                        value={value}
                        onChange={(e) => setOnChange(e.target.value)}
                    />

                    {type === 'password' && (
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            isRequired={required}
                            className="absolute right-2 top-[41px] focus:outline-none"
                        >
                            {showPassword ? (
                                <IoEyeOutline className="h-5 w-5 text-gray-500" />
                            ) : (
                                <IoEyeOffOutline className="h-5 w-5 text-gray-500" />
                            )}
                        </button>
                    )}
                    {type === 'text' && (
                        <button
                            type="button"
                            className="absolute right-2 top-[41px] focus:outline-none"
                        >
                            <GoPerson className="h-5 w-5 text-gray-500" />
                        </button>
                    )}
                    {meta.touched && meta.error && (
                        <p className="mt-1 text-sm text-red-600">{meta.error}</p>
                    )}
                </div>
            )}
        </Field>
    );
};

export default InputField;