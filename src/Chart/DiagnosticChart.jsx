import { useState, useEffect } from "react";
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
import usePatientStore from "../Store/usePatientStore";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DiagnosisHistoryChart = () => {
  const selectedPatient = usePatientStore((state) => state.selectedPatient);
  const [chartData, setChartData] = useState({});
  const [selectedMonths, setSelectedMonths] = useState(6);

  useEffect(() => {
    if (!selectedPatient?.diagnosis_history?.length) return;

    const filteredData = selectedPatient.diagnosis_history.slice(
      0,
      selectedMonths
    );

    const labels = filteredData.map(
      (entry) => `${entry.month.slice(0, 3)} ${entry.year}`
    );
    const systolicValues = filteredData.map(
      (entry) => entry.blood_pressure?.systolic?.value || 0
    );
    const diastolicValues = filteredData.map(
      (entry) => entry.blood_pressure?.diastolic?.value || 0
    );

    setChartData({
      labels,
      datasets: [
        {
          label: "Systolic",
          data: systolicValues,
          borderColor: "rgba(255, 99, 132, 1)",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          tension: 0.4,
        },
        {
          label: "Diastolic",
          data: diastolicValues,
          borderColor: "rgba(54, 162, 235, 1)",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          tension: 0.4,
        },
      ],
    });
  }, [selectedPatient, selectedMonths]);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          drawBorder: false,
          //   beginAtZero: true,
        },
        ticks: {
          align: "center",
          padding: 15,
          maxRotation: 0,
          minRotation: 0,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="   rounded-2xl w-full ">
      <div className="flex items-center justify-around mb-4">
        <h2 className="text-xl font-semibold">Blood Pressure</h2>
        <select
          className=""
          value={selectedMonths}
          onChange={(e) => setSelectedMonths(Number(e.target.value))}
        >
          {[
            ...Array(selectedPatient?.diagnosis_history?.length || 0).keys(),
          ].map((index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1} {index === 0 ? "Month" : "Months"}
            </option>
          ))}
        </select>
      </div>
      {chartData?.labels?.length ? (
        <div style={{ height: "260px", width: "425px" }}>
          <Line data={chartData} options={chartOptions} />
        </div>
      ) : (
        <p>No diagnosis history available.</p>
      )}
    </div>
  );
};

export default DiagnosisHistoryChart;
