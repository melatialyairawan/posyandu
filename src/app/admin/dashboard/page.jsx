import React from 'react';
import Chart from '@/components/NutritionChart/Chart';
import DashboardTable from '@/components/TableComponent/DashboardTable';
import DashboardCard from '@/components/Dashboard/DashboardCard';
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { RiHealthBookLine } from "react-icons/ri";
import { AiOutlineMedicineBox } from "react-icons/ai";

const Dashboard = () => {
  return (
    <div>
      <h2 className='font-semibold text-xl mb-5'>Beranda</h2>
      <div className='flex items-center gap-5'>
        <DashboardCard title='Perawatan hari ini' value='54' icon={<MdOutlineHealthAndSafety size={30} />} />
        <DashboardCard title='Konsultasi hari ini' value='10' icon={<RiHealthBookLine size={30} />} />
        <DashboardCard title='Produk' value='10' icon={<AiOutlineMedicineBox size={30} />} />
      </div>
      <h2 className='font-semibold text-xl mb-5'>Status Gizi</h2>
      <Chart />
      <div className='my-5'></div>
      <DashboardTable />
    </div>
  );
};

export default Dashboard;