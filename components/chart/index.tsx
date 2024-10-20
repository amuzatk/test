import { Patient } from '@/types/patients';
import React from 'react'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
} from 'chart.js';
import styles from '../../styles/pages/Chart.module.scss';
import Systolic from './systolic';
import Diastolic from './diastolic';

// Registering all necessary components, including CategoryScale
ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

type PatientsProps = {
  patientData?: Patient | null;
};

const Chart = ({ patientData }: PatientsProps) => {

      // Prepare data for the chart
  const bloodPressureData = patientData?.diagnosis_history || [];
  
  const labels = bloodPressureData.map(entry => `${entry.month} ${entry.year}`);
  const systolicData = bloodPressureData.map(entry => entry.blood_pressure.systolic);
  const diastolicData = bloodPressureData.map(entry => entry.blood_pressure.diastolic);

  const data = {
    labels,
    datasets: [
      {
        label: 'Systolic Blood Pressure',
        data: systolicData,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: 'Diastolic Blood Pressure',
        data: diastolicData,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
    ],
  };

 const options = {
  responsive: true,
  scales: {
    y: {
      min: 60, // Set minimum value for y-axis
      ticks: {
        stepSize: 20, // Set interval for ticks
      },
    },
  },
  plugins: {
    legend: {
      position: 'right' as 'right', // Explicitly cast to allowed type
      labels: {
        boxWidth: 20, // Width of the legend box
        padding: 20,  // Padding between legend items
      },
    },
  },
};

  return (
    <div className={styles.main}>
    <div className={styles.chart}>
        {/* <Line data={data} options={options} /> */}
        <Line 
        data={data} 
        options={{ responsive: true }}
         />
    </div>
    <div className={styles.summary}>

    <div className={styles.systolic}>
    <Systolic />
    </div>
    <div className={styles.diastolic}>
    <Diastolic />
    </div>

    </div>
    </div>
  )
}

export default Chart