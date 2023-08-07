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

  // const updateChart = (dataPoints) => {
  //   const ctx = document.getElementById("psdChart").getContext("2d");
  //   new Chart(ctx, {
  //     type: "line",
  //     data: {
  //       datasets: [
  //         {
  //           label: "Particle Size Distribution",
  //           data: dataPoints,
  //           borderColor: "rgba(75, 192, 192, 1)",
  //           fill: false,
  //           tension: 0.4,
  //         },
  //       ],
  //     },
  //     options: {
  //       scales: {
  //         x: {
  //           type: "logarithmic", // Use logarithmic scale for the particle size (microns) axis
  //           position: "bottom",
  //           title: {
  //             display: true,
  //             text: "Particle Size (mm)",
  //           },
  //           min: 0.1, // Set a minimum value for the logarithmic axis
  //         },
  //         y: {
  //           type: "linear",
  //           position: "left",
  //           title: {
  //             display: true,
  //             text: "Cumulative Percentage Finer (%)",
  //           },
  //           min: 0,
  //         },
  //       },
  //     },
  //   });
  // };

  // useEffect(() => {
  //   updateChart(dataPoints);
  // }, []);

  return (
    <div>
      <Head>
        <title>Particle Size Distribution Curve</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <h1
        className="text-2xl font-bold mb-4 mt-4"
        style={{ textAlign: "center" }}
      >
        Sieve Analysis Computation For Fine Aggregate
      </h1>
      {/* a toogle will be here to change from fine aggregate to coarse aggregate */}
      <div className="particle">
        <div className="particle-sub">
          <div className="particle-tile particle-title">Sieve Size (mm)</div>
          <div className="particle-tile">4.75</div>
          <div className="particle-tile">2.36</div>
          <div className="particle-tile">1.18</div>
          <div className="particle-tile">0.60</div>
          <div className="particle-tile">0.30</div>
          <div className="particle-tile">0.15</div>
          <div className="particle-tile">Pan</div>
          <div className="particle-tile">Total</div>
        </div>
        <div className="particle-sub">
          <div className="particle-tile particle-title">Mass retained (g)</div>
          <div className="particle-tile">
            <input placeholder="enter mass retained" />
          </div>
          <div className="particle-tile">
            <input placeholder="enter mass retained" />
          </div>
          <div className="particle-tile">
            <input placeholder="enter mass retained" />
          </div>
          <div className="particle-tile">
            <input placeholder="enter mass retained" />
          </div>
          <div className="particle-tile">
            <input placeholder="enter mass retained" />
          </div>
          <div className="particle-tile">
            <input placeholder="enter mass retained" />
          </div>
          <div className="particle-tile">
            <input placeholder="enter mass retained" />
          </div>
          <div className="particle-tile">
            <input placeholder="enter mass retained" />
          </div>
        </div>
        <div className="particle-sub">
          <div className="particle-tile particle-title">% mass retained</div>
          <div className="particle-tile"></div>
          <div className="particle-tile"></div>
          <div className="particle-tile"></div>
          <div className="particle-tile"></div>
          <div className="particle-tile"></div>
          <div className="particle-tile"></div>
          <div className="particle-tile"></div>
          <div className="particle-tile"></div>
        </div>
        <div className="particle-sub">
          <div className="particle-tile particle-title">
            Cumulative % mass retained
          </div>
          <div className="particle-tile"></div>
          <div className="particle-tile"></div>
          <div className="particle-tile"></div>
          <div className="particle-tile"></div>
          <div className="particle-tile"></div>
          <div className="particle-tile"></div>
          <div className="particle-tile"></div>
          <div className="particle-tile"></div>
        </div>
        <div className="particle-sub">
          <div className="particle-tile particle-title">
            Cumulative % mass passing
          </div>
          <div className="particle-tile"></div>
          <div className="particle-tile"></div>
          <div className="particle-tile"></div>
          <div className="particle-tile"></div>
          <div className="particle-tile"></div>
          <div className="particle-tile"></div>
          <div className="particle-tile"></div>
          <div className="particle-tile"></div>
        </div>
      </div>

      {/* <main className="p-4 w-full max-w-xl flex flex-col items-center">
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
      </main> */}
    </div>
  );
}
