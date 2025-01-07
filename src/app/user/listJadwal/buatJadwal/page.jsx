import React from 'react';
import { ScheduleCreateComponent } from '@/components/ScheduleList/ScheduleCreate/ScheduleCreateComponent';

const ScheduleCreate = () => {
    return (
        <>
            <div className='py-20 mb-20 bg-primary'></div>
            <div className='flex items-center justify-center'>
                <div className='min-w-[800px] rounded-xl'>
                    <ScheduleCreateComponent />
                </div>
            </div>
        </>
    )
}

export default ScheduleCreate