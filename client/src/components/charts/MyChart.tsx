import React from "react";
import classes from "./MyChart.module.scss";
import { CartesianGrid, Line, XAxis, YAxis, LineChart } from "recharts";

const MyChart: React.FC = (): JSX.Element => {
  const data = [
    {name: "2-03-2023", uv: 1, pv: 2, amt: 15},
    {name: "3-03-2023", uv: 2, pv: 6, amt: 15},
    {name: "27-03-2023", uv: 2, pv: 3, amt: 15},
    {name: "2-04-2023", uv: 3, pv: 2, amt: 15},
    {name: "3-04-2023", uv: 4, pv: 7, amt: 15},
    {name: "21-04-2023", uv: 7, pv: 9, amt: 15},
    {name: "2-04-2023", uv: 2, pv: 12, amt: 15},
    {name: "9-04-2023", uv: 1, pv: 4, amt: 15},
    {name: `${new Date().getUTCDate()}-06-${new Date().getUTCFullYear()}`, uv: 1, pv: 1, amt: 15},
  ];

  return (
    <LineChart width={600} height={350} data={data}>
      <XAxis dataKey="name"/>
      <YAxis/>
      <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
    </LineChart>
  );
};

export default MyChart;