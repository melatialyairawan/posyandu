'use client';

import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

const DashboardCard = ({ title, value, icon }) => {
    return (
        <Card className='p-3 mb-5 w-full' radius='lg' shadow='md'>
            <CardBody>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='font-semibold text-base text-gray-500'>{title}</h2>
                        <h2 className='font-semibold text-xl'>{value}</h2>
                    </div>
                    <div className='bg-primary text-white rounded-xl p-2'>
                        {icon}
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default DashboardCard