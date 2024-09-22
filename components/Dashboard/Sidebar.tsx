import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Sidebar.module.scss';
import Search from '../../public/assets/images/icons/search.png';
import Eclipse from '../../public/assets/images/icons/eclipse.png';
import { SIDEBAR_LINKS, SidebarLink } from '@/navigations/links';

type SidebarProps = {
  activePatient: SidebarLink;
  setActivePatient: React.Dispatch<React.SetStateAction<SidebarLink>>;
};

const Sidebar = ({ activePatient, setActivePatient }: SidebarProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>Patients</h2>
        <Image src={Search} width={18} height={18} alt="Search Icon" />
      </div>

      {SIDEBAR_LINKS.map((link, index) => (
        <div
          key={index}
          className={`${styles.sideLinks} ${activePatient === link ? styles.active : ''}`}
          onClick={() => setActivePatient(link)}  // Set active patient when clicked
        >
          <div className={styles.left}>
            <Image src={link.avatar} alt="Patient Avatar" />
            <div>
              <h2>{link.name}</h2>
              <p>
                {link.gender}, <span>{link.age}</span>
              </p>
            </div>
          </div>

          <div className={styles.eclipse}>
            <Image src={Eclipse} alt="Eclipse Icon" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;











// import React, { useState } from 'react';
// import Image from 'next/image';
// import styles from '../../styles/Sidebar.module.scss';
// import Search from '../../public/assets/images/icons/search.png';
// import Eclipse from '../../public/assets/images/icons/eclipse.png';
// import { SIDEBAR_LINKS } from '@/navigations/links';

// const Sidebar = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   return (
//     <div className={styles.container}>
//       <div className={styles.heading}>
//         <h2>Patients</h2>
//         <Image src={Search} width={18} height={18} alt="Search Icon" />
//       </div>

//       {SIDEBAR_LINKS.map((link, index) => (
//         <div
//           key={index}
//           className={`${styles.sideLinks} ${activeIndex === index ? styles.active : ''}`}
//           onClick={() => setActiveIndex(index)}
//         >
//           <div className={styles.left}>
//             <Image src={link.avatar}  alt="Patient Avatar" />
//             <div>
//               <h2>{link.name}</h2>
//               <p>
//                 {link.gender}, <span>{link.age}</span>
//               </p>
//             </div>
//           </div>

//           <div className={styles.eclipse}>
//             <Image src={Eclipse}  alt="Eclipse Icon" />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Sidebar;









// import React from 'react'
// import Image from 'next/image';
// import styles from '../../styles/Sidebar.module.scss';
// import Search from '../../public/assets/images/icons/search.png';
// import Eclipse from '../../public/assets/images/icons/eclipse.png';
// import Emily from '../../public/assets/images/icons/Emily.png';

// const Sidebar = () => {
//   return (
//     <div className={styles.container}>
//     <div className={styles.heading}>
//     <h2>Patients</h2>
//     <Image src={Search} width={18} height={18} alt="Search Icon"  />
//     </div>

//     <div className={styles.sideLinks}>
//     <div className={styles.left}>
//     <Image src={Emily} width={40} height={40} alt="Patience Avatar"  />
//     <div>
//     <h2>Emily Williams</h2>
//     <p>
//     Female, <span> 18 </span>
//     </p>
//     </div>

//     </div>

//     <div>
//     <Image src={Eclipse} width={18} height={3.71} alt="Eclipse Icon"  />
//     </div>

//     </div>
//     </div>
//   )
// }

// export default Sidebar