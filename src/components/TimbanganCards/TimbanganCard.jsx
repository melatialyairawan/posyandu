'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardBody, CardFooter, Skeleton, Button } from '@nextui-org/react';
import toast from 'react-hot-toast';
import '@fontsource/source-code-pro';  // harus install dulu

export default function TimbanganCards() {
    const [isLoaded, setIsLoaded] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const handleToChart = (path) => {
        toast.loading('Redirecting to chart...');
        router.push(path); 
    };

    const data = [
        { id: '#12218A', childName: 'Ananda Nadia', tanggalLahir: '2019-12-15', beratBadan: '11 kg', tinggiBadan: '92 cm', statusGizi: 'Gizi Kurang', tanggalPeriksa: '2024-12-29' },
    ];

    return (
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3">
            {data.map((item, index) => (
                <Card key={index} className="border border-gray-200 rounded-2xl shadow-md">
                    <CardHeader className="font-semibold">
                        <Skeleton isLoaded={isLoaded}>
                            <p className="text-sm text-gray-500">Terakhir Periksa: {item.tanggalPeriksa}</p>
                            <h3 className="text-lg mt-2" style={{ fontFamily: 'serif' }}>{item.childName}</h3>
                        </Skeleton>
                    </CardHeader>
                    <CardBody style={{ fontFamily: 'Source Code Pro' }}>
                        <Skeleton isLoaded={isLoaded}>
                            <p className="text-sm">Tanggal Lahir: {item.tanggalLahir}</p>
                            <p className="text-sm">Berat Badan: {item.beratBadan}</p>
                            <p className="text-sm">Tinggi Badan: {item.tinggiBadan}</p>
                            <p className="text-sm">Status Gizi: {item.statusGizi}</p>
                        </Skeleton>
                    </CardBody>
                    <CardFooter className="flex justify-between">
                        <Button 
                            className="text-sm hover:bg-teal-500"
                            onClick={() => handleToChart('/user/riwayatpemeriksaan')}
                        >
                            Riwayat
                        </Button>
                        <Button 
                            className="text-sm hover:bg-teal-500"
                            onClick={() => handleToChart('/user/chart')}
                        >
                            Grafik
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
