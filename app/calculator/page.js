"use client";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import "./page.css";
import Navigation from "../component/header";

const Home = () => {
  const [C, setC] = useState();
  const [CP, setCP] = useState();
  const [CG, setCG] = useState();
  const [CGP, setCGP] = useState();

  const [cLength, setCLength] = useState(0);
  const [cWidth, setCWidth] = useState(0);
  const [cHeight, setCHeight] = useState(0);

  const cArea = parseFloat(cLength) * parseFloat(cWidth);

  const [fLength, setFLength] = useState(0);
  const [fWidth, setFWidth] = useState(0);
  const [fHeight, setFHeight] = useState(0);

  const fArea = parseFloat(fLength) * parseFloat(fWidth) * parseFloat(fHeight);

  const mixesData = [
    {
      label: "Control Mix",
      data: [25, 30, 35, 40],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
    },
    {
      label: "Mix with Glass Replacement",
      data: [C, 28, 32, 38],
      backgroundColor: "rgba(255, 99, 132, 0.6)",
    },
  ];

  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current && mixesData) {
      const ctx = chartRef.current.getContext("2d");

      const chart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["7 days", "14 days", "21 days", "28 days"],
          datasets: mixesData,
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: "top",
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Compressive Strength (MPa)",
              },
            },
            x: {
              title: {
                display: true,
                text: "Time (days)",
              },
            },
          },
        },
      });

      return () => {
        chart.destroy();
      };
    }
  }, [chartRef, mixesData]);

  return (
    <div>
      <Head>
        <title>Calculator</title>
      </Head>
      <Navigation />

      <main className="container mx-auto p-4 flex flex-col items-center">
        {" "}
        <div className="mt-1">
          cube/compression mold
          <input
            value={cLength}
            name="cLength"
            onChange={(e) => setCLength(e.target.value)}
          />{" "}
          X{" "}
          <input
            value={cWidth}
            name="cWidth"
            onChange={(e) => setCWidth(e.target.value)}
          />{" "}
          X{" "}
          <input
            value={cHeight}
            name="cHeight"
            onChange={(e) => setCHeight(e.target.value)}
          />{" "}
          mm
        </div>
        <input value={C} onChange={(e) => setC(e.target.value)} />
        <br />
        {(C * 1000) / cArea}
        <br />
        {cArea}
        <br />
        {C}
        <br />
        <br />
        <br />
        <input value={CP} onChange={(e) => setCP(e.target.value)} />
        {(CP * 1000) / cArea}
        <input value={CG} onChange={(e) => setCG(e.target.value)} />
        {(CG * 1000) / cArea}
        <input value={CGP} onChange={(e) => setCGP(e.target.value)} />
        {(CGP * 1000) / cArea}
        <h1 className="text-3xl font-bold mb-4">Compressive Strength Chart</h1>
        <div className="relative chart">
          <canvas ref={chartRef} />

          <button
            onClick={() => {
              const chartCanvas = chartRef.current;
              const link = document.createElement("a");
              link.href = chartCanvas.toDataURL("image/png");
              link.download = "compressive_strength_chart.png";
              link.click();
            }}
            className="absolute top-4 right-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Download Chart
          </button>
        </div>
      </main>
      <div className="mt-1">
        Prismatic/flexural mold{" "}
        <input
          value={fLength}
          name="fLength"
          onChange={(e) => setFLength(e.target.value)}
        />{" "}
        X{" "}
        <input
          value={fWidth}
          name="fWidth"
          onChange={(e) => setFWidth(e.target.value)}
        />{" "}
        X{" "}
        <input
          value={fHeight}
          name="fHeight"
          onChange={(e) => setFHeight(e.target.value)}
        />{" "}
        mm
      </div>
    </div>
  );
};

export default Home;
