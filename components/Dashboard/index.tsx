import React, { ReactNode, useState, useEffect, ReactElement } from 'react';
import axios from 'axios';
import styles from '../../styles/Dashboard.module.scss';
import NavBar from './NavBar';
import Sidebar from './Sidebar';
import { SIDEBAR_LINKS, SidebarLink } from '@/navigations/links';
import { Patient } from '@/types/patients';

type Props = {
  children?: ReactNode;
};

const Dashboard = ({ children }: Props) => {
  const [activePatient, setActivePatient] = useState<SidebarLink>(SIDEBAR_LINKS[3]); // Default to Jessica Taylor
  const [patientData, setPatientData] = useState<Patient | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchPatientData = async () => {
      setLoading(true);
      try {
        const credentials = btoa('coalition:skills-test'); // Base64 encode username and password
        const response = await axios.get<Patient[]>(
          'https://fedskillstest.coalitiontechnologies.workers.dev',
          {
            headers: {
              Authorization: `Basic ${credentials}`, // Pass encoded credentials in the Authorization header
            },
          }
        );

        const jessicaTaylorData = response.data.find(
          (patient) => patient.name === 'Jessica Taylor'
        );

        if (jessicaTaylorData) {
          setPatientData(jessicaTaylorData);
        } else {
          console.error('Jessica Taylor not found in the patient data.');
        }
      } catch (error) {
        console.error('Error fetching patient data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (activePatient) {
      fetchPatientData();
    }
  }, [activePatient]);

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.main}>
        <div className={styles.layout}>
          <div className={styles.sidebar}>
            <Sidebar activePatient={activePatient} setActivePatient={setActivePatient} />
          </div>
          <div className={styles.content}>
            <div className={styles.body}>
              {/* Pass loading state and patientData to children */}
              {React.isValidElement(children) && React.cloneElement(children as ReactElement, { patientData, loading })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;





// {patientData ? (
//                 <div>
//                   <h2>{patientData.name}</h2>
//                   <img src={patientData.profile_picture} alt={patientData.name} />
//                   <p>Age: {patientData.age}</p>
//                   <p>Gender: {patientData.gender}</p>
//                   <p>Phone: {patientData.phone_number}</p>
//                   <p>Emergency Contact: {patientData.emergency_contact}</p>
//                   <p>Insurance: {patientData.insurance_type}</p>
//                 </div>
//               ) : (
//                 <p>Loading patient data...</p>
//               )}



// import React, { ReactNode, useState, useEffect, ReactElement } from 'react';
// import axios from 'axios';
// import styles from '../../styles/Dashboard.module.scss';
// import NavBar from './NavBar';
// import Sidebar from './Sidebar';
// import { SIDEBAR_LINKS,SidebarLink } from '@/navigations/links';
// import { Patient } from '@/types/patients';

// type Props = {
//   children?: ReactNode;
// };

// const Dashboard = ({ children }: Props) => {
//    const [activePatient, setActivePatient] = useState<SidebarLink>(SIDEBAR_LINKS[3]); // Default to Jessica Taylor
//   const [patientData, setPatientData] = useState<Patient | null>(null); // State to hold patient data


// useEffect(() => {
//     const fetchPatientData = async () => {
//       try {
//         // Create Base64 encoded credentials for Basic Auth
//         const credentials = btoa('coalition:skills-test'); // Base64 encode username and password

//         // Make the GET request to the API
//         const response = await axios.get<Patient[]>(
//           'https://fedskillstest.coalitiontechnologies.workers.dev',
//           {
//             headers: {
//               Authorization: `Basic ${credentials}`, // Pass encoded credentials in the Authorization header
//             },
//           }
//         );

//         // Find Jessica Taylor's data
//         const jessicaTaylorData = response.data.find(
//           (patient) => patient.name === 'Jessica Taylor'
//         );

//         if (jessicaTaylorData) {
//           console.log(jessicaTaylorData, 'Jessica Taylor data');
//           setPatientData(jessicaTaylorData);
//         } else {
//           console.error('Jessica Taylor not found in the patient data.');
//         }
//       } catch (error) {
//         console.error('Error fetching patient data:', error);
//       }
//     };

//     if (activePatient) {
//       fetchPatientData(); // Fetch patient data on component mount or when activePatient changes
//     }
//   }, [activePatient]);

//   return (
//     <div className={styles.container}>
//       <NavBar />
//       <div className={styles.main}>
//         <div className={styles.layout}>
//           <div className={styles.sidebar}>
//             <Sidebar activePatient={activePatient} setActivePatient={setActivePatient} />
//           </div>
//           <div className={styles.content}>
//             <div className={styles.body}>

//               {/* Only pass patientData to children if it's a valid React element */}
//               {React.isValidElement(children) && React.cloneElement(children as ReactElement, { patientData })}
         
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;










// import React, { ReactNode, useState, ReactElement } from 'react';
// import styles from '../../styles/Dashboard.module.scss';
// import NavBar from './NavBar';
// import Sidebar from './Sidebar';
// import { SIDEBAR_LINKS } from '@/navigations/links';

// type Props = {
//   children?: ReactNode;
// };

// const Dashboard = ({ children }: Props) => {
//   // Manage the active patient state in the Dashboard component
//   const [activePatient, setActivePatient] = useState(SIDEBAR_LINKS[3]); // Default to third patient

//   return (
//     <div className={styles.container}>
//       <NavBar />
//       <div className={styles.main}>
//         <div className={styles.layout}>
//           <div className={styles.sidebar}>
//             {/* Pass activePatient and setActivePatient to Sidebar */}
//             <Sidebar activePatient={activePatient} setActivePatient={setActivePatient} />
//           </div>
//           <div className={styles.content}>
//             <div className={styles.body}>
//               {/* Ensure children is a valid React element before cloning */}
//               {React.isValidElement(children)
//                 ? React.cloneElement(children as ReactElement, { activePatient })
//                 : children}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
