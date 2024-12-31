import { Button } from "@nextui-org/react";

export const StepIndicator = ({ step, label, isActive }) => (
    <li className={`flex lg:justify-center w-full relative ${isActive ? 'text-primary' : 'text-gray-900'} after:content-['']  after:w-full ${step === 3 ? 'after:h-0' : 'after:h-0.5'} ${isActive ? 'after:bg-primary' : 'after:bg-gray-200'} after:inline-block after:absolute lg:after:top-5 after:top-3 lg:after:left-20`}>
        <div className="block whitespace-nowrap z-10">
            <span className={`w-6 h-6 ${isActive ? 'bg-primary text-white' : 'bg-indigo-50 text-primary'} border-2 border-${isActive ? 'transparent' : 'primary'} rounded-full flex justify-center items-center mx-auto mb-3 text-sm lg:w-10 lg:h-10`}>{step}</span>
            {label}
        </div>
    </li>
);

export const Details = () => (
    <div className='flex flex-col gap-2'>
        {[
            { label: 'Tanggal', value: '2024-11-15' },
            { label: 'Layanan', value: 'Imunisasi' },
            { label: 'Lokasi Posyandu', value: 'Desa Jati Wetan RT 01, RW 02' }
        ].map((item, idx) => (
            <div className='flex items-center gap-5' key={idx}>
                <p className='text-lg text-primary font-semibold'>{item.label}</p>
                <p>:</p>
                <p className='font-semibold'>{item.value}</p>
            </div>
        ))}
    </div>
);

export const Verification = () => (
    <div className="space-y-4 pt-20 mb-[35.5%] text-center">
        <p className="text-lg text-red-500">Anda yakin ingin melanjutkan?</p>
    </div>
);