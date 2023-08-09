"use client";
import { useState } from "react";
import Navigation from "../component/header";
import "./page.css";
export default function Mix() {
  const [cement, setCement] = useState(0);
  const [sand, setSand] = useState(0);
  const [coarse, setCoarse] = useState(0);

  const sumRatio = parseFloat(cement) + parseFloat(sand) + parseFloat(coarse);

  const [firstReplace, setfirstReplace] = useState(0);
  const [secondReplace, setsecondReplace] = useState(0);

  const firstReplaceRatio = parseFloat(coarse) * (firstReplace / 100);
  const secondReplaceRatio = parseFloat(coarse) * (secondReplace / 100);
  const newCoarseRatio =
    parseFloat(coarse) - firstReplaceRatio - secondReplaceRatio;

  // compression
  // const cementVol = 1 * 1.57 * cTotal;
  return (
    <div className="mix-container">
      <Navigation />
      <div className="mix-sub pl-4 mt-4 text-center">
        <h2 className="text-2xl mb-6 underline">Mix Proportion Calculation</h2>
        <div className="mt-1">
          Concrete grade ratio{" "}
          <input
            value={cement}
            name="cement"
            onChange={(e) => setCement(e.target.value)}
          />{" "}
          :{" "}
          <input
            value={sand}
            name="sand"
            onChange={(e) => setSand(e.target.value)}
          />{" "}
          :{" "}
          <input
            value={coarse}
            name="coarse"
            onChange={(e) => setCoarse(e.target.value)}
          />
        </div>
        <div className="mt-1">
          1st Coarse Replacement (optional){" "}
          <input
            value={firstReplace}
            name="firstReplace"
            onChange={(e) => setfirstReplace(e.target.value)}
          />
          %
        </div>
        <div className="mt-1">
          2nd Coarse Replacement (optional){" "}
          <input
            value={secondReplace}
            name="secondReplace"
            onChange={(e) => setsecondReplace(e.target.value)}
          />
          %
        </div>

        <div>
          New Ratio: {cement.toFixed(1)} : {sand.toFixed(1)} :{" "}
          {newCoarseRatio.toFixed(1)} : {firstReplaceRatio.toFixed(1)} :{" "}
          {secondReplaceRatio.toFixed(1)}{" "}
        </div>
        <div className="mt-1">
          cube (compression) mold dimension <input /> X <input /> X <input />
          mm
        </div>
        <div className="mt-1">
          Prismatic (flexural) mold dimension <input /> X <input /> X <input />
          mm
        </div>
        <div className="mt-1">
          Total samples for compression <input />
        </div>
        <div className="mt-1">
          Total samples for flexural <input />
        </div>
        <div className="mt-1">
          Density of Coarse Aggregate <input />
          kg/m<sup>3</sup>
        </div>
        <div className="mt-1">
          Density of 1st Replacement <input />
          kg/m<sup>3</sup>
        </div>
        <div className="mt-1">
          Density of 2nd Replacement <input />
          kg/m<sup>3</sup>
        </div>
        <div className="mt-1">
          Water - Cement ratio <input />
        </div>
        <h3 className="mt-9 text-2xl underline">Summary for Compression</h3>
        <div className="mix-table text-center mt-4 rounded mb-8 mix">
          <div className=" mix-title">
            <div style={{ background: "white" }}></div>
            <div>Proportion (Kg)</div>
            <div>Proportion (bags)</div>
            <div>Estimate (2023) (&#8358;)</div>
          </div>
          <div className=" mix-field bg-yellow-600">
            <div style={{ background: "hsl(43, 74%, 49%)" }}>Cement</div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className=" mix-field bg-yellow-600">
            <div style={{ background: "hsl(43, 74%, 49%)" }}>Sand</div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className=" mix-field bg-yellow-600">
            <div style={{ background: "hsl(43, 74%, 49%)" }}>
              Coarse Aggregate
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className=" mix-field bg-yellow-600">
            <div style={{ background: "hsl(43, 74%, 49%)" }}>
              1st Replacement
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className=" mix-field bg-yellow-600">
            <div style={{ background: "hsl(43, 74%, 49%)" }}>
              2nd Replacement
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className=" mix-field bg-yellow-600">
            <div style={{ background: "hsl(43, 74%, 49%)" }}>Water</div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
