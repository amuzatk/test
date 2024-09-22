import Dashboard from '@/components/Dashboard';
import React from 'react';
import { Patient } from '@/types/patients';
import styles from "../../styles/pages/Patients.module.scss"
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale // Import CategoryScale
} from 'chart.js';

// Registering all necessary components, including CategoryScale
ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

type PatientsProps = {
  patientData?: Patient | null;
  loading?: boolean; // Accept loading prop
};

const Patients = ({ patientData, loading }: PatientsProps) => {
    console.log(patientData,'patientData')
  if (loading) {
    return <p>Loading patient data...</p>; // Display loading message or spinner
  }

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

    <div className={styles.top}>
    <div className={styles.history}>
    HISTORY

    {/* Chart component */}
      <div className={styles.chartContainer}>
      {/* <Line data={data} options={options} /> */}
        <Line 
        data={data} 
        options={{ responsive: true }}
         />
      </div>
    
    </div>
    <div className={styles.profile}>
    PROFILE
    {/* PROFILEPROFILEPROFILEPROFILEPROFILE */}
    </div>
    </div>

    <div className={styles.bottom}>
      <div className={styles.list}>LIST</div>
    <div className={styles.results}>RESULTS</div>
    </div>

    </div>
  );
};

const PatientsPage = () => {
  return <Dashboard><Patients /></Dashboard>;
};

export default PatientsPage;







// import Dashboard from '@/components/Dashboard'
// import React from 'react'

// const Patients = () => {
//   return (
//     <Dashboard>Patients</Dashboard>
//   )
// }

// export default Patients