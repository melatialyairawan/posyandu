import React from 'react';
import Chart from '@/components/NutritionChart/Chart';

const NutritionChart = () => {
    return (
        <div>
            <h2 className='font-semibold text-xl mb-5'>Status Gizi</h2>
            <Chart />
        </div>
    )
}

export default NutritionChart