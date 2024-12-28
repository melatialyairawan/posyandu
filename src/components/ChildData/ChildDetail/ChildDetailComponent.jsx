'use client';

import GradientLineChart from "./Chart/GradientLineChart";

const chartData = [
    {
        id: 'BeratBadan',
        color: 'hsl(205, 70%, 50%)',
        data: [
            { x: 'Point 1', y: 3000000 },
            { x: 'Point 2', y: 5000000 },
            { x: 'Point 3', y: 8000000 },
            { x: 'Point 4', y: 6000000 },
            { x: 'Point 5', y: 10000000 },
        ],
    },
];

const ChildDetailComponent = () => {
    return (
        <div style={{ padding: '2rem' }}>
            <div className="mb-4">
                <h1 className="text-2xl font-semibold">Grafik Berat Badan</h1>
                <GradientLineChart chartData={chartData} />
            </div>
            <div>
                <h1 className="text-2xl font-semibold">Grafik Tinggi Badan</h1>
                <GradientLineChart chartData={chartData} />
            </div>
        </div>
    );
};

export default ChildDetailComponent;
