// pages/index.tsx

import React, { SVGProps } from 'react';
import Image from 'next/image';
import styles from '@/app/Dashboard/styles.module.css';

import Logo from '@/app/Dashboard/assets/header.jpg'
import profileImage from '@/app/Dashboard/assets/profile-pic.jpg'
import dashboardIcon from '@/app/Dashboard/assets/dashboard.svg'
import analyticsIcon from '@/app/Dashboard/assets/analytics.svg'
import contentIcon from '@/app/Dashboard/assets/content.svg'
import discoverIcon from '@/app/Dashboard/assets/discover.svg'
import categoriesIcon from '@/app/Dashboard/assets/category.svg'
import notificationIcon from '@/app/Dashboard/assets/notification.svg'
import profileIcon from '@/app/Dashboard/assets/profile.svg'
import settingsIcon from '@/app/Dashboard/assets/settings.svg'
import logoutIcon from '@/app/Dashboard/assets/logout.svg'

import socialIcon from '@/app/Dashboard/assets/socials.svg'
const SideNav = () => {

interface MenuItems  {
    title: string,
    icon: React.FC<SVGProps<SVGSVGElement>>
  
}
interface AccountItems {
    title: string,
    icon: React.FC<SVGProps<SVGSVGElement>>
}


//Define sidebar menu items
  const menuItems: MenuItems[]= [
    { title: 'Dashboard', icon: dashboardIcon},
    { title: 'Analytics', icon: analyticsIcon },
    { title: 'Content', icon: contentIcon},
    { title: 'Discover', icon: discoverIcon},
    {title: 'Categories', icon: categoriesIcon},
    { title: 'Socials', icon: socialIcon},
    { title: 'Notification', icon: notificationIcon}
  ];
   const accountItems: AccountItems[] =[
    { title: 'Profile', icon: profileIcon},
    { title: 'Settings', icon: settingsIcon},
    { title: 'Log Out', icon: logoutIcon},
   ]

   return (
    <main className="container">
      <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
            <Image className={styles.logo} src={Logo} alt="logo" />
            <h2 >Chatter</h2>
          </div>
        {/* Sidebar content */}
        <ul className={styles.sidebarLinks}>
        <h4>
              <span> Main Menu </span>
              <div className={styles.menuSeparator}></div>
            </h4>
          {/* Render main menu items */}
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href="#">
                <item.icon className={`${styles.icon} ${item.title}Icon`} />
                {item.title}
              </a>
            </li>
          ))}
          
           <h4>
              <span>Account</span>
              <div className={styles.menuSeparator}></div>
            </h4>
          {/* Render account items */}
          {accountItems.map((item, index) => (
            <li key={index}>
              <a href="#">
                <item.icon className={`${styles.icon} ${item.title}Icon`} />
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {/* User account section */}
        <div className={styles.userAccount}>
          {/* User profile section */}
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
