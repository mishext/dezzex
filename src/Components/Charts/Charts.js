import React, { Component } from "react";
import { Chart } from "primereact/chart";
import LineCharts from "../LineCharts/LineCharts.js";
import "./Charts.css";

export default class Charts extends Component {
  constructor(props) {
    super(props);

    this.chartData = {
      // labels: ["Gramma", "Traget", "Cambr"],
      datasets: [
        {
          data: [80, 50, 100],
          backgroundColor: ["#D79AD7", "#FFAAB9", "#9FDFCD"],
          hoverBackgroundColor: ["#C776C7", "#36A2EB", "#FFCE56"],
        },
        {
          data: [80, 50, 100],
          backgroundColor: ["#C776C7", "#FFAAB9", "#88C6B4"],
          hoverBackgroundColor: ["#C776C7", "#36A2EB", "#FFCE56"],
        },
      ],
    };

    this.lightOptions = {
      plugins: {
        legend: {
          labels: {
            color: "#495057",
          },
        },
      },
    };
  }

  render() {
    return (
      <div className="wwchart">
        <p className="chartsP">PENDING TASKS</p>
        <p className="chartsNumb">36</p>
        <Chart
          type="doughnut"
          data={this.chartData}
          options={this.lightOptions}
          style={
            {
              // width: "20%",
              // backgroundColor: "#35415E",
              // borderRadius: "10px",
              // marginRight: "10px",
              // marginBottom: "40px",
              // padding: "10px",
            }
          }
        />
      </div>
      // </div>

      // </div>
    );
  }
}
