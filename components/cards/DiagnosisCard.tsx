import React from 'react';
import Image from 'next/image';
import styles from '../../styles/card/DiagnosisCard.module.scss'

type CardItem = {
  imageSrc: string;
  title: string;
  value: string;
  status: string;
  backgroundColor: string;
  statusIconSrc?: string;
};

const DiagnosisCard: React.FC<CardItem> = ({ imageSrc, title, value, status, backgroundColor, statusIconSrc }) => {
  return (
    <div style={{ backgroundColor }} className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image src={imageSrc} alt={title} width={96} height={96} />
      </div>
      <div className={styles.text}>
      <p>{title}</p>
      <h1>{value}</h1>
      </div>
      <span>
        {statusIconSrc && (
          <Image src={statusIconSrc} alt="Chevron Down" width={10} height={5.48} />
        )}
        {status}
      </span>
    </div>
  );
};

export default DiagnosisCard;