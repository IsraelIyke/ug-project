"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import { Chart } from "chart.js/auto";
import "./page.css";

export default function Home() {
  const [dataPoints, setDataPoints] = useState([
    // { x: 0.1, y: 0 },
    { x: 0.15, y: 11.2 },
    { x: 0.3, y: 31.9 },
    { x: 0.6, y: 79.5 },
    { x: 1.18, y: 89.3 },
    { x: 2.36, y: 96.4 },
    { x: 4.75, y: 100 },
  ]);

  const updateChart = (dataPoints) => {
    const ctx = document.getElementById("psdChart").getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        datasets: [
          {
            label: "Particle Size Distribution",
            data: dataPoints,
            borderColor: "rgba(75, 192, 192, 1)",
            fill: false,
            tension: 0.4,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: "logarithmic", // Use logarithmic scale for the particle size (microns) axis
            position: "bottom",
            title: {
              display: true,
              text: "Particle Size (mm)",
            },
            min: 0.1, // Set a minimum value for the logarithmic axis
          },
          y: {
            type: "linear",
            position: "left",
            title: {
              display: true,
              text: "Cumulative Percentage Finer (%)",
            },
            min: 0,
          },
        },
      },
    });
  };

  useEffect(() => {
    updateChart(dataPoints);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <Head>
        <title>Particle Size Distribution Curve</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Sieve Analysis Calculation</h1>
      {/* a toogle will be here to change from fine aggregate to coarse aggregate */}
      <div className="particle-container">
        <div>
          <div>Sieve Size</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div>Mass retained (g)</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div>% mass retained</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div>Cumulative % mass retained</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div>Cumulative % mass passing</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <main className="p-4 w-full max-w-xl flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">
          Particle Size Distribution Curve
        </h1>
        <canvas
          id="psdChart"
          className="border border-gray-400 rounded-md w-full"
          width="400"
          height="200"
        ></canvas>
        <div className="mt-4 flex flex-col w-full">
          <button
            onClick={() => {
              const chartCanvas = document.getElementById("psdChart");
              const link = document.createElement("a");
              link.href = chartCanvas.toDataURL("image/png");
              link.download = "particle_size_distribution_chart.png";
              link.click();
            }}
            className="py-2 px-4 bg-yellow-600 text-white rounded-md mt-2 hover:bg-yellow-700 focus:outline-none focus:ring focus:border-yellow-300"
          >
            Download Chart
          </button>
        </div>
      </main>
    </div>
  );
}
