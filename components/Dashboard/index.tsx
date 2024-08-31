import React, { ReactNode } from 'react'
import styles from '../../styles/Dashboard.module.scss'
import NavBar from './NavBar'
import Sidebar from './Sidebar'

type Props = {
  children?: ReactNode;
}

const Dashboard = ({children}:Props) => {
  return (
  <div className={styles.container}>
      <NavBar 
      // handleOpenMenu={() => setMobileMenu(true)}
      // onSearchResultsChange={onSearchResultsChange} 
      />
      <div className={styles.main}>
        <div className={styles.layout}>
          <div className={styles.sidebar}>
           <Sidebar
                  // selectedOrganization={selectedOrganization}
                  // onOrganizationChange={onOrganizationChange}
                />
            {/* ASIDE MOBILE */}
            {/* {screenWidth <= 820 && (
              <Drawer
                onClose={handleCloseMenu}
                placement="left"
                open={mobileMenu}
                closable={true}
                width={260}
              >
            <SideBar
                  selectedOrganization={selectedOrganization}
                  onOrganizationChange={onOrganizationChange}
                />
              </Drawer>
            )} */}
            {/* ASIDE WEB */}
            {/* <div className={styles.webDash}>
            <SideBar
                  selectedOrganization={selectedOrganization}
                  onOrganizationChange={onOrganizationChange}
                />
            </div> */}
          </div>
          <div 
          // style={{
          //   marginTop:"60px"
          // }} 
          className={styles.content}>
            {/* {mainDash ? (
              <>
                <h1>{pageTitle}</h1>
                <div className={styles.header}>
{data.map((item, index) => (
                    <AnalyticsCard item={item} />
                  ))}
                </div>
              </>
            ) : (
                <PageHeader />
            )} */}
            <div className={styles.body}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard