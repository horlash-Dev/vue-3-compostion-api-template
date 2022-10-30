<template>
  <div>
    <Line
      :chart-id="chartId"
      :chart-data="cData"
      :chart-options="cOptions"
      :dataset-id-key="datasetIdKey"
      :style="style"
      :width="width"
      :height="height"
    />
  </div>
</template>
<script setup>
import { Line } from "vue-chartjs";
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
  labels: ["January", "February"],
  datasets: [
    {
      label: "feb",
      backgroundColor: "blue",
      borderWidth: 1,
      borderRadius: 50,
      data: [20, 24, 8],
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
      backgroundColor: "red",
      data: [9, 12, 15],
    },
  ],
};
const cOptions = { responsive: true };
const style = {
  "max-width": "100%",
  //height: '20%'
};
</script>
