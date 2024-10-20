import React from 'react'
import styles from '../../../styles/pages/Systolic.module.scss';
import Image from 'next/image';
import ArrowUp from '../../../public/assets/images/icons/ArrowUp2.png'

const Systolic = () => {
  return (
    <div className={styles.main}>
    <div className={styles.first}>
    <div className={styles.icon1}></div>
    <p>
    Systolic
    </p>
    </div>
    <div className={styles.second}>
    <p>160</p>
    </div>
    <div className={styles.third}>
    <Image src={ArrowUp} width={10} height={5.48} alt='Chevron Up' />
    <p>
    Higher than Average
    </p>
    </div>

    </div>
  )
}

export default Systolic