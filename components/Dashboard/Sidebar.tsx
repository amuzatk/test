import React from 'react'
import Image from 'next/image';
import styles from '../../styles/Sidebar.module.scss';
import Search from '../../public/assets/images/icons/search.png';
import Eclipse from '../../public/assets/images/icons/eclipse.png';
import Emily from '../../public/assets/images/icons/Emily.png';

const Sidebar = () => {
  return (
    <div className={styles.container}>
    <div className={styles.heading}>
    <h2>Patients</h2>
    <Image src={Search} width={18} height={18} alt="Search Icon"  />
    </div>
    <div className={styles.sideLinks}>
    <div className={styles.left}>
    <Image src={Emily} width={40} height={40} alt="Patience Avatar"  />
    <div>
    <h2>Emily Williams</h2>
    <p>
    Female, 18
    </p>
    </div>

    </div>

    <div>
    <Image src={Eclipse} width={18} height={3.71} alt="Eclipse Icon"  />
    </div>

    </div>
    </div>
  )
}

export default Sidebar