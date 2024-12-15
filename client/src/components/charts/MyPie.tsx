import React, { FC } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { infrastructureTypes } from "../../config/variables";
import doStore from "../../store/DOStore";
import { observer } from "mobx-react";

ChartJS.register(ArcElement, Tooltip, Legend);


const MyPie: FC = observer(() => {
  const counts = infrastructureTypes.map(element => 
    doStore.destructionObjects.filter(obj => obj.typeInfrastructure === element).length
  );

  const data = {
    labels: infrastructureTypes,
    datasets: [
      {
        label: "# Кількість зруйнованої",
        data: counts,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <Pie data={data} />
  )
})



export default MyPie