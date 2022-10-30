<template>
  <div>
    <Bar
      :chart-id="chartId"
      :chart-data="cData"
      :chart-options="cOptions"
      :dataset-id-key="datasetIdKey"
      :styles="style"
      :width="width"
      :height="height"
    />
  </div>
</template>
<script setup>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
//import { relative } from 'path';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement
);

defineProps({
  chartId: {
    type: String,
    default: "bar-chart",
  },
  datasetIdKey: {
    type: String,
    default: "label",
  },
  width: {
    type: Number,
    default: 100,
  },
  height: {
    type: Number,
    default: 100,
  },
});

const cData = {
  labels: ["January", "February", "March"],
  datasets: [
    {
      label: "jan",
      backgroundColor: "#f87979",
      borderWidth: 1,
      borderRadius: 50,
      data: [32, 20, 12],
    },
    {
      label: "feb",
      backgroundColor: "#000",
      borderWidth: 1,
      borderRadius: 50,
      data: [30, 24, 8],
    },
    {
      label: "june",
      borderWidth: 1,
      borderRadius: 50,
      backgroundColor: "violet",
      data: [18, 10, 20],
    },
    {
      label: "Custom",
      borderWidth: 1,
      borderRadius: 50,
      backgroundColor: "green",
      data: [9, 12, 15],
    },
  ],
};
const cOptions = { responsive: true };
const style = {
  //"max-width": "90%",
  // height: "10%",
};
</script>
