// app/Dashboard/index.tsx

import React from 'react';
// import styles from '@/app/'
import styles from '@/app/dashboard/styles.module.css'
import Image from 'next/image';
import profileIcon from '@/assets/profile-pic.jpg'


const Dashboard = () => {
  return(
    <>
   
     {/* {/* <div className={`${styles.container} dark`}>
      <div className={styles.flex}>
        <Image
          src={profileIcon}
          alt="User Profile Picture"
          className={styles.profilePicture}
        />
        <div>
          <h2 className={styles.userName}>John Doe</h2>
          <p className={styles.userDetails}>Posts: 10 | Comments: 20 | Likes: 30</p>
        </div>
      </div>

      <div className={styles.recentActivity}>
        <h3 className={styles.activityTitle}>Recent Activity</h3>

        <div className={`${styles.divider} dark`}>
          <div className={styles.activityItem}>
            <p className={styles.activityTime}>2 hours ago</p>
            <p className={styles.activityDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className={styles.activityItem}>
            <p className={styles.activityTime}>1 day ago</p>
            <p className={styles.activityDescription}>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className={styles.activityItem}>
            <p className={styles.activityTime}>3 days ago</p>
            <p className={styles.activityDescription}>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div> */}
    <h1>
      Hello
    </h1>
    
    </> 
  )
}

export default Dashboard;
