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

const date = new Date();
const labels = [];

for (let i = 0; i < 6; i++) {
  const month = date.getMonth() + 1 - i; // 현재 월에서 i만큼 빼기
  const year = date.getFullYear();

  // 이전 해로 넘어가는 경우 처리 (예: 3월이면 2월 → 1월 → 12월(작년))
  const prevMonth = month > 0 ? month : 12 + month;
  const prevYear = month > 0 ? year : year - 1;

  labels.push(`${prevYear % 100}년 ${prevMonth}월`);
}

const testData = ["5", "7", "11", "2", "3", "6"];

const data = {
  labels,
  datasets: [
    {
      label: "내 활동",
      data: testData.map((data) => data),
      borderColor: "#ffc30b",
      backgroundColor: "#ffc30b",
      tension: 0,
    },
  ],
};

const options = {
  responsive: true,
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

const LineGraph = () => {
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineGraph;
