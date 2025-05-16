import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "./LineGraph.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartDataLabels,
  Title,
  Tooltip,
  Legend
);

const LineGraph = ({ graphData, selectedData, ...props }) => {
  const labels = [];
  const dataPoints = [];

  for (let month = 1; month <= 12; month++) {
    labels.push(`${selectedData % 100}년 ${month}월`);

    const value = graphData[month];

    dataPoints.push(value);
  }

  console.log("LineGraph", dataPoints);

  const data = {
    labels,
    datasets: [
      {
        label: "내 활동",
        // data: graphData.map((data) => data),
        data: dataPoints,
        borderColor: "#ffc30b",
        backgroundColor: "#ffc30b",
        tension: 0,
      },
    ],
  };

  const options = {
    // responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 40,
        right: 20,
        left: 20,
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // 🔹 X축 격자선 제거
        },
      },
      y: {
        ticks: {
          display: false, // 🔹 Y축 숫자 숨기기
        },
        grid: {
          display: false, // 🔹 Y축 격자선 제거
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        position: "top", // legend 의 위치
      },
      title: {
        display: false,
        text: "차트 타이틀",
      },

      datalabels: {
        display: true,
        align: "top", // 데이터 포인트 위에 표시
        color: "#333333", // 레이블 텍스트 색상
        font: {
          weight: "bold",
          size: 12,
        },

        formatter: (value) => value, // 표시할 값 (포맷 가능)
      },
    },
  };
  return (
    <div className="lineGraph_section">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineGraph;
