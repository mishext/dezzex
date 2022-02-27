import React from "react";
import { PieChart, Pie } from "recharts";
import "./index.css";

const Charts = () => {
  // Sample data
  const data = [
    { name: "Geeksforgeeks", students: 200, color: "red" },
    { name: "Technical scripter", students: 400, color: "green" },
    { name: "Geek-i-knack", students: 400, color: "red" },
    { name: "Geek-o-mania", students: 300, color: "#D79AD7" },
  ];

  return (
    <div className="ChartsContainer">
      <div className="pieCharContainer">
        <p>PENDING TASKS</p>
        <p className="chartsNum">36</p>
        <PieChart width={500} height={200} className="PieChart">
          {data.map((e) => (
            <Pie
              data={data}
              dataKey="students"
              outerRadius={200}
              innerRadius={150}
              fill={e.color}
            />
          ))}
          <Pie
            data={data}
            dataKey="students"
            outerRadius={150}
            innerRadius={130}
            fill="#C776C7"
          />
        </PieChart>
      </div>
    </div>
  );
};

export default Charts;
