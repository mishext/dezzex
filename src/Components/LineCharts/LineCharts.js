import React, { Component } from "react";
import { Chart } from "primereact/chart";
import "./LineCharts.css";

export default class LineCharts extends Component {
  constructor(props) {
    super(props);

    this.lineStylesData = {
      labels: ["1", "2", "3", "4", "5", "6", "7"],
      datasets: [
        // {
        //   label: "First Dataset",
        //   data: [65, 59, 80, 81, 56, 55, 40],
        //   fill: false,
        //   tension: 0.4,
        //   borderColor: "#42A5F5",
        // },
        // {
        //   label: "Second Dataset",
        //   data: [28, 48, 40, 19, 86, 27, 90],
        //   fill: false,
        //   borderDash: [5, 5],
        //   tension: 0.4,
        //   borderColor: "#66BB6A",
        // },
        {
          label: "Just test",
          data: [12, 51, 62, 33, 21, 62, 45],
          fill: true,
          borderColor: "#FFA726",
          tension: 0.4,
          backgroundColor: "rgba(255,167,38,0.2)",
        },
      ],
    };

    this.options = this.getLightTheme();
  }

  getLightTheme() {
    let basicOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: "#495057",
          },
        },
      },
      // scales: {
      //   x: {
      //     ticks: {
      //       color: "#495057",
      //     },
      //     grid: {
      //       color: "#ebedef",
      //     },
      //   },
      //   y: {
      //     ticks: {
      //       color: "#495057",
      //     },
      //     grid: {
      //       color: "#ebedef",
      //     },
      //   },
      // },
    };

    let multiAxisOptions = {
      stacked: false,
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: "#495057",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
        y: {
          type: "linear",
          display: true,
          position: "left",
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
        y1: {
          type: "linear",
          display: true,
          position: "right",
          ticks: {
            color: "#495057",
          },
          grid: {
            drawOnChartArea: false,
            color: "#ebedef",
          },
        },
      },
    };

    return {
      basicOptions,
      multiAxisOptions,
    };
  }

  render() {
    const { basicOptions, multiAxisOptions } = this.options;

    return (
      <div>
        <div className="card">
          <p className="chartsP">WEEKLY PROJECT VIEWS</p>
          <p className="chartsNumb">401</p>
          <Chart
            type="line"
            data={this.lineStylesData}
            options={basicOptions}
            style={{ width: "500px", height: "230px", margin: "7px" }}
          />
        </div>
      </div>
    );
  }
}
