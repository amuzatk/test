import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../../styles/NavBar.module.scss';
import Logo from '../../public/assets/images/icons/TestLogo@2x.png';
import Doctor from '../../public/assets/images/icons/Doctor.png';
import Settings from '../../public/assets/images/icons/settings.png';
import More from '../../public/assets/images/icons/more_vert.png';
import { NAV_LINKS } from '@/navigations/links';
import { MenuOutlined } from '@ant-design/icons';
import Sidebar from './Sidebar';

// Dynamically load the Drawer component
const Drawer = dynamic(() => import('antd/es/drawer'), { ssr: false });

const NavBar = () => {
  const [activeSlug, setActiveSlug] = useState<string>('patients'); // Default slug
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [drawerVisibleMobile, setDrawerVisibleMobile] = useState(false);
  // State to manage the active patient
  const [activePatient, setActivePatient] = useState<any>(null);


  const router = useRouter();

  // Set default route on mount
  useEffect(() => {
    if (router.pathname === '/') {
      // Redirect to '/patients' by default
      router.push('/patients');
      setActiveSlug('patients');
    } else {
      // Set the activeSlug based on the current path
      const currentSlug = NAV_LINKS.find(link => link.LINK === router.pathname)?.SLUG;
      if (currentSlug) setActiveSlug(currentSlug);
    }
  }, [router.pathname]);

  const handleDrawerToggle = () => {
    setDrawerVisible(!drawerVisible);
  };

  const handleDrawerToggleMobile = () => {
    setDrawerVisibleMobile(!drawerVisibleMobile);
  };

  const handleNavigation = (link: string, slug: string) => {
    setActiveSlug(slug);
    router.push(link);
  };

  return (
    <div className={styles.container}>
      <div className={styles.hamburger} onClick={handleDrawerToggleMobile}>
        <MenuOutlined />
      </div>
{/* used for displaying sidebar on mobile */}
      <Drawer
        placement="left"
        onClose={handleDrawerToggleMobile}
        open={drawerVisibleMobile}
        className={styles.drawer}
      >
        {/* <Sidebar /> */}
         <Sidebar activePatient={activePatient} setActivePatient={setActivePatient} />
      </Drawer>

      <div className={styles.left}>
        <Image src={Logo} width={211} height={48} alt="logo" className={styles.log} />
        <Image src={Logo} width={130} height={30} alt="logo" className={styles.mobileLogo} />
      </div>

      <div className={styles.middle}>
        {NAV_LINKS.map(({ TITLE, LINK, SLUG, ICON }) => (
          <div
            key={SLUG}
            className={`${styles.navItem} ${activeSlug === SLUG ? styles.active : ''}`}
            onClick={() => handleNavigation(LINK, SLUG)}
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
            <p>General Practitioner</p>
          </div>
        </div>
        <div className={styles.settings}>
          <Image src={Settings} width={18.94} height={20} alt="Settings Icon" className={styles.log} />
          <Image src={More} width={3.71} height={18} alt="More Icon" className={styles.log} />
        </div>
      </div>

      <div className={styles.hamburgerNav} onClick={handleDrawerToggle}>
        <MenuOutlined />
      </div>

      <Drawer
        placement="right"
        onClose={handleDrawerToggle}
        open={drawerVisible}
        className={styles.drawer}
      >
        {NAV_LINKS.map(({ TITLE, LINK, SLUG, ICON }) => (
          <div
            key={SLUG}
            className={`${styles.navItem} ${activeSlug === SLUG ? styles.active : ''}`}
            onClick={() => handleNavigation(LINK, SLUG)}
          >
            {ICON(activeSlug === SLUG)}
            <span className={styles.navText}>{TITLE}</span>
          </div>
        ))}
      </Drawer>
    </div>
  );
};

export default NavBar;













// import React, { useState } from 'react';
// import dynamic from 'next/dynamic'; // <-- Import dynamic for lazy loading
// import styles from '../../styles/NavBar.module.scss';
// import Image from 'next/image';
// import Logo from '../../public/assets/images/icons/TestLogo@2x.png';
// import Doctor from '../../public/assets/images/icons/Doctor.png';
// import Settings from '../../public/assets/images/icons/settings.png';
// import More from '../../public/assets/images/icons/more_vert.png';
// import { NAV_LINKS } from '@/navigations/links';
// import { useRouter } from 'next/router';
// import { MenuOutlined } from '@ant-design/icons';
// import Sidebar from './Sidebar';

// // Dynamically load the Drawer component, disabling SSR for it
// const Drawer = dynamic(() => import('antd/es/drawer'), { ssr: false });

// const NavBar = () => {

//   const [activeSlug, setActiveSlug] = useState<string>('patients');
//   const [drawerVisible, setDrawerVisible] = useState(false);
//   const [drawerVisibleMobile, setDrawerVisibleMobile] = useState(false);

//   const router = useRouter();

//   const handleDrawerToggle = () => {
//     setDrawerVisible(!drawerVisible);
//   };

//   const handleDrawerToggleMobile = () => {
//     setDrawerVisibleMobile(!drawerVisibleMobile);
//   };

//     const handleNavigation = (link: string, slug: string) => {
//     setActiveSlug(slug);
//     router.push(link);
//   };

//   return (
//     <div className={styles.container}>
//       {/* Hamburger Icon for opening sidebar on mobile */}
//       <div className={styles.hamburger} onClick={handleDrawerToggleMobile}>
//         <MenuOutlined />
//       </div>

//       {/* Drawer for opening this sidebar version on mobile */}
//       <Drawer
//         placement="left"
//         onClose={handleDrawerToggleMobile}
//         open={drawerVisibleMobile}
//         className={styles.drawer}
//       >
//       <Sidebar />
//       </Drawer>
//       <div className={styles.left}>
//         <Image src={Logo} width={211} height={48} alt="logo" className={styles.log} />
//         <Image src={Logo} width={130} height={30} alt="logo" className={styles.mobileLogo} />
//       </div>
//       <div className={styles.middle}>
//         {NAV_LINKS.map(({ TITLE, LINK, SLUG, ICON }) => (
//           <div
//             key={SLUG}
//             className={`${styles.navItem} ${activeSlug === SLUG ? styles.active : ''}`}
//             // onClick={() => setActiveSlug(SLUG)}
//              onClick={() => handleNavigation(LINK, SLUG)}
//           >
//             {ICON(activeSlug === SLUG)}
//             <span className={styles.navText}>{TITLE}</span>
//           </div>
//         ))}
//       </div>
//       <div className={styles.right}>
//         <div className={styles.avatar}>
//           <Image src={Doctor} width={44} height={44} alt="Doctor Image" className={styles.log} />
//           <div className={styles.names}>
//             <h2>Dr. Jose Simmons</h2>
//             <p>General Practitioner</p>
//           </div>
//         </div>
//         <div className={styles.settings}>
//           <Image src={Settings} width={18.94} height={20} alt="Settings Icon" className={styles.log} />
//           <Image src={More} width={3.71} height={18} alt="More Icon" className={styles.log} />
//         </div>
//       </div>

//        <div className={styles.hamburgerNav} onClick={handleDrawerToggle}>
//         <MenuOutlined />
//       </div>

//       {/* Drawer for opening this navbar version on mobile */}
//       <Drawer
//         placement="right"
//         onClose={handleDrawerToggle}
//         open={drawerVisible}
//         className={styles.drawer}
//       >
//         {NAV_LINKS.map(({ TITLE, LINK, SLUG, ICON }) => (
//           <div
//             key={SLUG}
//             className={`${styles.navItem} ${activeSlug === SLUG ? styles.active : ''}`}
//             onClick={() => setActiveSlug(SLUG)}
//           >
//             {ICON(activeSlug === SLUG)}
//             <span className={styles.navText}>{TITLE}</span>
//           </div>
//         ))}
//       </Drawer>
//     </div>
//   );
// };

// export default NavBar;








// import React, { useState } from 'react';
// import dynamic from 'next/dynamic'; // <-- Import dynamic for lazy loading
// import styles from '../../styles/NavBar.module.scss';
// import Image from 'next/image';
// import Logo from '../../public/assets/images/icons/TestLogo@2x.png';
// import Doctor from '../../public/assets/images/icons/Doctor.png';
// import Settings from '../../public/assets/images/icons/settings.png';
// import More from '../../public/assets/images/icons/more_vert.png';
// import { NAV_LINKS } from '@/navigations/links';
// import { useRouter } from 'next/router';
// // import { Drawer } from 'antd';
// // import Drawer from 'antd/es/drawer';
// import { MenuOutlined } from '@ant-design/icons';
// import Sidebar from './Sidebar';

// // Dynamically load the Drawer component, disabling SSR for it
// const Drawer = dynamic(() => import('antd/es/drawer'), { ssr: false });

// const NavBar = () => {

//   const [activeSlug, setActiveSlug] = useState<string>('patients');
//   const [drawerVisible, setDrawerVisible] = useState(false);
//   const [drawerVisibleMobile, setDrawerVisibleMobile] = useState(false);

//   const router = useRouter();

//   const handleDrawerToggle = () => {
//     setDrawerVisible(!drawerVisible);
//   };

//   const handleDrawerToggleMobile = () => {
//     setDrawerVisibleMobile(!drawerVisibleMobile);
//   };

//   return (
//     <div className={styles.container}>
//       {/* Hamburger Icon for opening sidebar on mobile */}
//       <div className={styles.hamburger} onClick={handleDrawerToggleMobile}>
//         <MenuOutlined />
//       </div>

//       {/* Drawer for opening this sidebar version on mobile */}
//       <Drawer
//         // title="Sidebar"
//         placement="left"
//         onClose={handleDrawerToggleMobile}
//         open={drawerVisibleMobile}
//         className={styles.drawer}
//       >
//       <Sidebar />
//       </Drawer>

//       <div className={styles.left}>
//         <Image src={Logo} width={211} height={48} alt="logo" className={styles.log} />
//         <Image src={Logo} width={130} height={30} alt="logo" className={styles.mobileLogo} />
//         {/* <Image src={Logo}  alt="logo" className={styles.mobileLogo} /> */}
//       </div>
//       <div className={styles.middle}>
//         {NAV_LINKS.map(({ TITLE, LINK, SLUG, ICON }) => (
//           <div
//             key={SLUG}
//             className={`${styles.navItem} ${activeSlug === SLUG ? styles.active : ''}`}
//             onClick={() => setActiveSlug(SLUG)}
//           >
//             {ICON(activeSlug === SLUG)}
//             <span className={styles.navText}>{TITLE}</span>
//           </div>
//         ))}
//       </div>
//       <div className={styles.right}>
//         <div className={styles.avatar}>
//           <Image src={Doctor} width={44} height={44} alt="Doctor Image" className={styles.log} />
//           <div className={styles.names}>
//             <h2>Dr. Jose Simmons</h2>
//             <p>General Practitioner</p>
//           </div>
//         </div>
//         <div className={styles.settings}>
//           <Image src={Settings} width={18.94} height={20} alt="Settings Icon" className={styles.log} />
//           <Image src={More} width={3.71} height={18} alt="More Icon" className={styles.log} />
//         </div>
//       </div>

//        <div className={styles.hamburgerNav} onClick={handleDrawerToggle}>
//         <MenuOutlined />
//       </div>

//       {/* Drawer for opening this navbar version on mobile */}
//       <Drawer
//         // title="navbar"
//         placement="right"
//         onClose={handleDrawerToggle}
//         open={drawerVisible}
//         className={styles.drawer}
//       >
//         {NAV_LINKS.map(({ TITLE, LINK, SLUG, ICON }) => (
//           <div
//             key={SLUG}
//             className={`${styles.navItem} ${activeSlug === SLUG ? styles.active : ''}`}
//             onClick={() => setActiveSlug(SLUG)}
//           >
//             {ICON(activeSlug === SLUG)}
//             <span className={styles.navText}>{TITLE}</span>
//           </div>
//         ))}
//       </Drawer>
//     </div>
//   );
// };

// export default NavBar;