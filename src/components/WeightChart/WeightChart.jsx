"use client";

import React from "react";
import { Chart, CategoryScale, LinearScale, LineElement, PointElement, LineController, Title, Tooltip, Legend } from "chart.js";

// Daftarkan skala dan elemen yang dibutuhkan
Chart.register(CategoryScale, LinearScale, LineElement, PointElement, LineController, Title, Tooltip, Legend);

export default function WeightChart() {
  React.useEffect(() => {
    var config = {
      type: "line",
      data: {
        labels: [
          "Dec 31 2023",
          "Jan 21 2024",
          "Feb 11 2024",
          "Mar 03 2024",
          "Mar 24 2024",
          "Apr 14 2024",
          "May 05 2024",
          "May 26 2024",
          "Jun 16 2024",
          "Jul 07 2024",
          "Jul 28 2024",
          "Aug 18 2024",
          "Sep 08 2024",
          "Sep 29 2024",
          "Oct 20 2024",
          "Nov 10 2024",
          "Dec 01 2024",
        ],
        datasets: [
          {
            label: "Berat Badan",
            backgroundColor: "#3182ce",
            borderColor: "#3182ce",
            data: [7, 7, 8, 0, 8, 9, 0, 8, 9, 9, 9, 10, 10, 9, 10, 0, 11],
            fill: false,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: true,
          text: "Statistik Penimbangan Bayi Ananda Nadia",
          fontColor: "black",
        },
        legend: {
          display: false,  // Menyembunyikan legend
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          x: {
            ticks: {
              fontColor: "rgba(0,0,0,.7)",
            },
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Date",
              fontColor: "black",
            },
            grid: {
              display: false,
              borderDash: [2],
              color: "rgba(33, 37, 41, 0.3)",
              zeroLineColor: "rgba(0, 0, 0, 0)",
              zeroLineBorderDash: [2],
            },
          },
          y: {
            ticks: {
              fontColor: "rgba(0,0,0,.7)",
              beginAtZero: true,
              max: 12,
            },
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Weight",
              fontColor: "black",
            },
            grid: {
              borderDash: [3],
              color: "rgba(0, 0, 0, 0.15)",
              zeroLineColor: "rgba(33, 37, 41, 0)",
              zeroLineBorderDash: [2],
            },
          },
        },
      },
    };

    var ctx = document.getElementById("line-chart").getContext("2d");
    new Chart(ctx, config);
  }, []);

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
          <canvas id="line-chart"></canvas>
        </div>
      </div>
    </div>
  );
}
