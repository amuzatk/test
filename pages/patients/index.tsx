import Dashboard from '@/components/Dashboard';
import React from 'react';
import { Patient } from '@/types/patients';
import styles from "../../styles/pages/Patients.module.scss"
import { healthData } from '@/constants/HealtData';
import DiagnosisCard from '@/components/cards/DiagnosisCard';
import Profile from '@/components/profile';
import Chart from '@/components/chart';

type PatientsProps = {
  patientData?: Patient | null;
  loading?: boolean; // Accept loading prop
};

const Patients = ({ patientData, loading }: PatientsProps) => {
    console.log(patientData,'patientData')
  if (loading) {
    return <p>Loading patient data...</p>; // Display loading message or spinner
  }

  return (
    <div className={styles.main}>

    <div className={styles.top}>
    <div className={styles.history}>
    <h2>
    Diagnosis History
    </h2>


    {/* Chart component */}
      <div className={styles.chartContainer}>
         <Chart  patientData={patientData}/>
      </div>

    <div className={styles.historyCard}>
    {healthData.map((item, index) => (
        <DiagnosisCard
          key={index}
          imageSrc={item.imageSrc}
          title={item.title}
          value={item.value}
          status={item.status}
          backgroundColor={item.backgroundColor}
          statusIconSrc={item.statusIconSrc}
        />
      ))}
    </div>

    </div>
    <div className={styles.profile}>
    <Profile patientData={patientData} />
    </div>
    </div>

    <div className={styles.bottom}>
      <div className={styles.list}>
     <h2>
    Diagnostics List
    </h2>
      </div>
    <div className={styles.results}>
     <h2>
    Lab Results
    </h2>
    </div>
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