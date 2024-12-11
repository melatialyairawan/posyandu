'use client';

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

const Chart = () => {
    const [timeframe, setTimeframe] = useState('Weekly');

    const data = [
        { name: 'Stunting', value: 40 },
        { name: 'Gizi Buruk', value: 10 },
        { name: 'Obesitas', value: 50 },
    ];

    return (
        <div className="bg-white md:p-6 rounded-lg shadow-lg">
            <div className="flex justify-end items-center mb-4">
                <Dropdown>
                    <DropdownTrigger>
                        <Button variant="bordered">Category</Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                        <DropdownItem key="weekly">Weekly</DropdownItem>
                        <DropdownItem key="monthly">Monthly</DropdownItem>
                        <DropdownItem key="yearly">Yearly</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={(value) => `${value}%`} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Bar dataKey="value" fill="#18B3AB" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
