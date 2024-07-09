// pages/index.tsx

import React from 'react';
import Image from 'next/image';
import styles from '@/app/home-redirect/styles.module.css';

import profileImage from '@/app/home-redirect/assets/profile-pic.jpg'
import Logo from '@/app/home-redirect/assets/header.jpg'
import { title } from 'process';

const SideNav = () => {

interface MenuItems  {
    title: string,
    icon: string
}
interface AccountItems {
    title: string,
    icon: string
}



//Define sidebar menu items
  const menuItems: MenuItems[]= [
    { title: 'Dashboard', icon: 'tachometer' },
    { title: 'Analytics', icon: 'area-chart' },
    { title: 'Content', icon: 'desktop'},
    { title: 'Discover', icon: 'terminal'},
    {title: 'Categories', icon: 'dashboard'},
    { title: 'Socials', icon: 'socials'},
    { title: 'Notification', icon: 'notified'}
  ];
   const accountItems: AccountItems[] =[
    { title: 'Profile', icon: 'user'},
    { title: 'Settings', icon: 'settings'},
    { title: 'Log Out', icon: 'logout'},
   ]

  return (
    <main className="container">
        <aside className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <Image className={styles.logo} src={Logo} alt="logo" />
            <h2 >Chatter</h2>
          </div>
          <ul className={styles.sidebarLinks}>
            <h4>
              <span> Main Menu </span>
              <div className={styles.menuSeparator}></div>
            </h4>
            {/* Render main menu items here */}
            {menuItems.map((item, index) =>
            <li key={index}>
                <a href="#">
                  <i className={item.icon}></i>
                  {item.title}
                </a>
  
            </li>
            )}
            
            <h4>
              <span>Account</span>
              <div className={styles.menuSeparator}></div>
            </h4>
            {accountItems.map((item, index)=>(
                <li key={index}>
                  <a href="#">
                    <i className={item.icon}></i>
                    {item.title}
                  </a>
                </li>
            ))}
          </ul>
          <div className={styles.userAccount}>
            <div className={styles.userProfile}>
              <Image src={profileImage}alt="user-profile" width={50} height={50}  className={styles.profilePic}/>
              <div className={styles.userDetails}>
                <h3>John Doe</h3>
                <span>Web Developer</span>
              </div>
            </div>
          </div>
        </aside>
    </main>
  );
};

export default SideNav;
