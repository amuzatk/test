import React from 'react'
import styles from '../../../styles/pages/Diastolic.module.scss';
import Image from 'next/image';
import ArrowDown from '../../../public/assets/images/icons/ArrowDow.png'
// /assets/images/icons/ArrowDow.png
const Diastolic = () => {
  return (
    <div className={styles.main}>
    <div className={styles.first}>
    <div className={styles.icon1}></div>
    <p>
    Diastolic
    </p>
    </div>
    <div className={styles.second}>
    <p>78</p>
    </div>
    <div className={styles.third}>
    <Image src={ArrowDown} width={10} height={5.48} alt='Chevron Up' />
    <p>
    Lower than Average
    </p>
    </div>

    </div>
  )
}

export default Diastolic




// import React from 'react'
// import styles from '../../../styles/pages/Diastolic.module.scss';

// const Diastolic = () => {
//   return (
//     <div className={styles.main}>Diastolic</div>
//   )
// }

// export default Diastolic