import React from 'react';
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";

const ScheduleCard = ({ index, openModal }) => {
    return (
        <Card className='p-5' key={index}>
            <CardHeader>
                <div className='flex flex-col gap-1'>
                    <h3 className='text-sm text-gray-500 tracking-widest'>2024 - 12 - 15</h3>
                    <h1 className='text-2xl font-medium'>Imunisasi</h1>
                </div>
            </CardHeader>
            <CardBody className='tracking-widest mb-5'>
                <p className='text-gray-500'>Posyandu Nalumsari Jepara</p>
            </CardBody>
            <div className='flex justify-between'>
                <div className='flex flex-col xl:flex-row items-start xl:items-center gap-3'>
                    <div className='p-2 border border-black rounded-full tracking-widest'>
                        <p className='text-xs xl:text-sm'>#10</p>
                    </div>
                    <div className='p-2 border border-black rounded-full tracking-widest'>
                        <p className='text-xs xl:text-sm'>09:00 - 10:00</p>
                    </div>
                    <div className='p-2 border border-black rounded-full tracking-widest'>
                        <p className='text-xs xl:text-sm'>Akan Datang</p>
                    </div>
                </div>
                <div className='flex justify-end gap-3'>
                    <Button onPress={openModal} className='bg-primary text-white rounded-full'>Detail</Button>
                </div>
            </div>
        </Card>
    )
}

export default ScheduleCard