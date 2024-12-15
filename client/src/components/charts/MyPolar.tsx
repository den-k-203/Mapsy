import React, { FC } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { destructionStates } from "../../config/variables";
import doStore from "../../store/DOStore";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const MyPolar: FC = () => {
  const counts = destructionStates.map(element => 
    doStore.destructionObjects.filter(obj => obj.stateDestruction === element).length
  );

  const data = {
    labels: destructionStates,
    datasets: [
      {
        label: "# Кількість",
        data: counts,
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

 return <PolarArea data={data} />; 
}

export default MyPolar