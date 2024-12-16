"use client";

import React, { useEffect } from "react";
import { Chart, CategoryScale, LinearScale, LineElement, PointElement, LineController, Title, Tooltip, Legend, Filler } from "chart.js";
import { Line } from "react-chartjs-2";

// Daftarkan skala dan elemen yang dibutuhkan
Chart.register(CategoryScale, LinearScale, LineElement, PointElement, LineController, Title, Tooltip, Legend, Filler);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,  // Menyembunyikan legend
    },
    title: {
      display: true,
      text: "Statistik Penimbangan Bayi Ananda Nadia",
      color: "black",
    },
  },
  scales: {
    x: {
      ticks: {
        color: "rgba(0,0,0,.7)",
      },
      title: {
        display: true,
        text: "Tanggal",
        color: "black",
      },
      grid: {
        display: false,
        borderDash: [2],
        color: "rgba(33, 37, 41, 0.3)",
      },
    },
    y: {
      beginAtZero: true,
      max: 12,
      ticks: {
        color: "rgba(0,0,0,.7)",
      },
      title: {
        display: true,
        text: "Berat Badan",
        color: "black",
      },
      grid: {
        borderDash: [3],
        color: "rgba(0, 0, 0, 0.15)",
      },
    },
  },
};

const data = {
  labels: [
    "Dec 31 2023", "Jan 21 2024", "Feb 11 2024", "Mar 03 2024", "Mar 24 2024",
    "Apr 14 2024", "May 05 2024", "May 26 2024", "Jun 16 2024", "Jul 07 2024",
    "Jul 28 2024", "Aug 18 2024", "Sep 08 2024", "Sep 29 2024", "Oct 20 2024",
    "Nov 10 2024", "Dec 01 2024"
  ],
  datasets: [
    {
      backgroundColor: "rgba(49, 130, 206, 0.2)",
      borderColor: "#18B3AB",
      data: [6, 7, 7, 0, 8, 9, 0, 9, 9, 8, 9, 0, 8, 9, 10, 10, 11],
      fill: true,  // Memungkinkan area bawah garis diisi dengan warna
      tension: 0.4,  // Membuat garis lebih halus
    },
  ],
};

export default function WeightChart() {
  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
      <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex-grow flex-1">
            <h2 className="text-gray-800 text-xl font-semibold">
              Grafik Berat Badan
            </h2>
          </div>
        </div>
      </div>
      <div className="p-4 flex-auto">
        {/* Chart */}
        <div className="relative h-96">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
}
