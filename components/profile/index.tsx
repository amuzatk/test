import React from 'react';
import styles from '../../styles/pages/Profile.module.scss';
import Image from 'next/image';
import { Patient } from '@/types/patients';
import { format } from 'date-fns';

type PatientsProps = {
  patientData?: Patient | null;
};

const Profile = ({ patientData }: PatientsProps) => {
  // Format the date of birth to 'MMMM dd, yyyy' (e.g., 'August 23, 1996')
  const formattedDOB = patientData?.date_of_birth
    ? format(new Date(patientData.date_of_birth), 'MMMM dd, yyyy')
    : 'N/A';

  return (
    <div className={styles.main}>
    
      <div className={styles.pix}>
        <Image
          src={patientData?.profile_picture || '/assets/images/icons/ProfilePix.png'} // Default if no image
          alt="Profile Picture"
          width={200}
          height={200}
        />
        <h2>{patientData?.name || 'N/A'}</h2>
      </div>

      <div className={styles.info}>
      <div className={styles.same}>
        <Image
          src={'/assets/images/icons/BirthIcon.png'}
          alt="Profile Picture"
          width={42}
          height={42}
        />
        <div className={styles.text}>
          <p>Date of Birth</p>
          <p className={styles.p}>{formattedDOB}</p>
        </div>
      </div>

      <div className={styles.same}>
        <Image
          src={'/assets/images/icons/FemaleIcon2.png'}
          alt="Profile Picture"
          width={42}
          height={42}
        />
        <div className={styles.text}>
          <p>Gender</p>
          <p className={styles.p}>{patientData?.gender}</p>
        </div>
      </div>

      <div className={styles.same}>
        <Image
          src={'/assets/images/icons/PhoneIcon2.png'}
          alt="Profile Picture"
          width={42}
          height={42}
        />
        <div className={styles.text}>
          <p>Contact Info</p>
          <p className={styles.p}>{patientData?.phone_number}</p>
        </div>
      </div>

      <div className={styles.same}>
        <Image
          src={'/assets/images/icons/PhoneIcon2.png'}
          alt="Profile Picture"
          width={42}
          height={42}
        />
        <div className={styles.text}>
          <p>Emmergency Contacts</p>
          <p className={styles.p}>{patientData?.emergency_contact}</p>
        </div>
      </div>

      <div className={styles.same}>
        <Image
          src={'/assets/images/icons/InsuranceIcon2.png'}
          alt="Profile Picture"
          width={42}
          height={42}
        />
        <div className={styles.text}>
          <p>Insurance Provider</p>
          <p className={styles.p}>{patientData?.insurance_type}</p>
        </div>
      </div>
      </div>

      <div className={styles.buton}>
      <button>Show All Information</button>
      </div>

    </div>
  );
};

export default Profile;










// import React from 'react'
// import styles from '../../styles/pages/Profile.module.scss'
// import Image from 'next/image';
// import ProfilePicture from '../../public/assets/images/icons/ProfilePix.png'
// import { Patient } from '@/types/patients';


// type PatientsProps = {
//   patientData?: Patient | null;
// };

// const Profile = ({ patientData }: PatientsProps) => {
//   return (
//     <div className={styles.main}>
//     <div className={styles.pix}>
//     <Image src={ProfilePicture} alt='Profile Picture' width={200} height={200} />
//     <h2>Jessica Taylor</h2>
//     </div>
    
//     <div className={styles.info}>
//     <Image src={ProfilePicture} alt='Profile Picture' width={42} height={42} />
//     <div className={styles.text}>
//     <p>Date of Birth</p>
//     <p className={styles.p}>August 23, 1996</p>
//     </div>
//     </div>
//     <div className={styles.buton}></div>
//     </div>
//   )
// }

// export default Profile