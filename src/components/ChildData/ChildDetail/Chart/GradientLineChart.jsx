'use client';

import { ResponsiveLine } from '@nivo/line';

const GradientLineChart = ({ chartData }) => {
    const chartHeight = 300;
    const chartWidth = '100%';
    const gradProps = {
        gradientUnits: 'userSpaceOnUse',
        x1: '0',
        y1: '0',
        x2: '0',
        y2: chartHeight,
    };

    return (
        <div style={{ height: chartHeight, width: chartWidth }}>
            <svg style={{ position: 'absolute', zIndex: -1 }}>
                <defs>
                    <linearGradient id="gradientFill" {...gradProps}>
                        <stop offset="0%" stopColor="#18B3AB" />
                        <stop offset="100%" stopColor="rgba(24, 179, 171, 0)" />
                    </linearGradient>
                </defs>
            </svg>

            <ResponsiveLine
                data={chartData}
                margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 0, max: 10000000 }}
                curve="monotoneX"
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 10,
                    tickRotation: 0,
                    legend: '',
                    legendOffset: 36,
                    legendPosition: 'middle',
                    legendTextColor: '#333',
                    style: { fontSize: 14 },
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 10,
                    tickRotation: 0,
                    legend: '',
                    legendOffset: -40,
                    legendPosition: 'middle',
                    format: (value) => `${value / 1000000}jt`,
                    tickValues: [0, 2000000, 4000000, 6000000, 8000000, 10000000],
                    legendTextColor: '#333',
                    style: { fontSize: 14 },
                }}
                colors={['url(#gradientFill)']}
                lineWidth={3}
                enableDots={false}
                enableArea={true}
                areaOpacity={0.1}
                enableGridX={false}
                enableGridY={true}
                legends={[]}
                theme={{
                    axis: {
                        ticks: {
                            text: {
                                fontSize: 14,
                                fill: '#333',
                            },
                        },
                        legend: {
                            text: {
                                fontSize: 16,
                                fill: '#333',
                            },
                        },
                    },
                }}
            />
        </div>
    );
};

export default GradientLineChart;
