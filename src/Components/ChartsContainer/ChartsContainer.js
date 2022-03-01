import React from "react";
import Charts from "../Charts/Charts";
import LineCharts from "../LineCharts/LineCharts";
import "./ChartsContainer.css";

export default function ChartsContainer() {
  return (
    <div className="AllChartsContainer">
      <LineCharts />
      <Charts />
    </div>
  );
}
