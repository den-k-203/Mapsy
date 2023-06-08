import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Частково", "Повністю", "На фазі ремонту", "Невідновна", "Не ремонтована", "Непошкоджена"],
  datasets: [
    {
      label: "# Кількість",
      data: [5, 4, 7, 5, 6, 4],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
      borderWidth: 2,
    },
  ],
};

export function MyPolar() {
  return <PolarArea data={data} />;
}
