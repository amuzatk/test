import React, { useState } from 'react';
import styles from '../../styles/NavBar.module.scss';
import Image from 'next/image';
import Logo from '../../public/assets/images/icons/TestLogo@2x.png';
import Doctor from '../../public/assets/images/icons/Doctor.png';
import Settings from '../../public/assets/images/icons/settings.png';
import More from '../../public/assets/images/icons/more_vert.png';
import { NAV_LINKS } from '@/navigations/links';
import { useRouter } from 'next/router';

const NavBar = () => {
  const [activeSlug, setActiveSlug] = useState<string>('patients');
    const router = useRouter();

  // const handleNavigation = (link: string, slug: string) => {
  //   setActiveSlug(slug);
  //   router.push(link);
  // };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src={Logo} width={211} height={48} alt="logo" className={styles.log} />
      </div>
      <div className={styles.middle}>
        {NAV_LINKS.map(({ TITLE, LINK, SLUG, ICON }) => (
          <div
            key={SLUG}
            className={`${styles.navItem} ${activeSlug === SLUG ? styles.active : ''}`}
            onClick={() => setActiveSlug(SLUG)}
            //  onClick={() => handleNavigation(LINK, SLUG)}
          >
            {ICON(activeSlug === SLUG)}
            <span className={styles.navText}>{TITLE}</span>
          </div>
        ))}
      </div>
      <div className={styles.right}>
      <div className={styles.avatar}>
        <Image src={Doctor} width={44} height={44} alt="Doctor Image" className={styles.log} />
        <div className={styles.names}>
        <h2>Dr. Jose Simmons</h2>
        <p>
        General Practitioner
        </p>
        </div>
      </div>
      <div className={styles.settings}>
        <Image src={Settings} width={18.94} height={20} alt="Settings Icon" className={styles.log} />
        <Image src={More} width={3.71} height={18} alt="More Icon" className={styles.log} />
      </div>
      </div>
    </div>
  );
};

export default NavBar;