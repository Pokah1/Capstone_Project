"use client"; 
import React, { SVGProps, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/componetnts/sideNav.module.css'
import { User } from '@supabase/supabase-js';
import supabase from '@/lib/supabaseClients';
import { useRouter } from 'next/navigation';
import Logo from '@/app/Dashboard/assets/header.jpg';
import profileImage from '@/app/componetnts/assets/profile-pic.jpg';
import dashboardIcon from '@/app/Dashboard/assets/dashboard.svg';
import analyticsIcon from '@/app/Dashboard/assets/analytics.svg';
import contentIcon from '@/app/Dashboard/assets/content.svg';
import discoverIcon from '@/app/Dashboard/assets/discover.svg';
import categoriesIcon from '@/app/Dashboard/assets/category.svg';
import notificationIcon from '@/app/Dashboard/assets/notification.svg';
import profileIcon from '@/app/Dashboard/assets/profile.svg';
import settingsIcon from '@/app/Dashboard/assets/settings.svg';
import logoutIcon from '@/app/Dashboard/assets/logout.svg';
import socialIcon from '@/app/Dashboard/assets/socials.svg';

interface SideNavProps {
  id?: string;
}


 
const SideNav : React.FC<SideNavProps>= ({ id }: { id?: string }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter(); // Initialize useRouter


  // get the current user
  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error('Error fetching user:', error);
      } else {
        setUser(data.user);
      }
    };

    fetchUser();
  }, []);

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error);
    } else {
      localStorage.clear();
      setUser(null);
      router.push('/'); // Redirect to the HomePage
    }
  };



  interface MenuItems {
    title: string;
    icon: React.FC<SVGProps<SVGSVGElement>>;
    onClick?: () => void;
  }

  interface AccountItems {
    title: string;
    icon: React.FC<SVGProps<SVGSVGElement>>;
    onClick?: () => void;
  }

  // Define sidebar menu items
  const menuItems: MenuItems[] = [
    { 
      title: 'Dashboard', 
      icon: dashboardIcon,
      onClick: () => router.push('/Dashboard')
      // Redirect to the DashboardPage
    },
    { title: 'Analytics', icon: analyticsIcon,
      onClick: () => router.push('Analytics')
     },
    { title: 'Content', icon: contentIcon,
      onClick: () => router.push('Content')
     },
    { title: 'Discover', icon: discoverIcon,
   onClick: () => router.push('Discover')
     },
    { title: 'Categories', icon: categoriesIcon,
    onClick: () => router.push('Categories')
     },
    { title: 'Socials', icon: socialIcon,
      onClick: () => router.push('Socials')
     },
    { title: 'Notification', icon: notificationIcon,
     onClick: () => router.push('Notification') 
     }
  ];

  const accountItems: AccountItems[] = [
    { title: 'Profile', icon: profileIcon,
      onClick: () => router.push('Profile')
    },
    { title: 'Settings', icon: settingsIcon,
      onClick: () => router.push('Settings')
     },
    { title: 'Sign Out', icon: logoutIcon, onClick: signOut }
  ];

  return (
    <main className="container">
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <Image className={styles.logo} src={Logo} alt="logo" />
          <h2>Chatter</h2>
        </div>
        {/* Sidebar content */}
        <ul className={styles.sidebarLinks}>
          <h4>
            <span>Main Menu</span>
            <div className={styles.menuSeparator}></div>
          </h4>
          {/* Render main menu items */}
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href="#" 
              onClick={item.onClick}           
              >
                <item.icon className={`${styles.icon} ${item.title}Icon`} />
                <span className={styles.title}>{item.title}</span>
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
              <Link href="#" onClick={item.onClick}>
                <item.icon className={`${styles.icon} ${item.title}Icon`} />
                <span className={styles.title}>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        {/* User account section */}
        <div className={styles.userAccount}>
          {/* User profile section */}
          <div className={styles.userProfile}>
            <Image
              src={user?.user_metadata?.avatar_url || profileImage}
              alt="user-profile"
              width={50}
              height={50}
              className={styles.profilePic}
            />
            <div className={styles.userDetails}>
              <h3>{user?.user_metadata?.full_name || 'John Doe'}</h3>
              <span>{user?.user_metadata?.role || 'Developer'}</span>
            </div>
          </div>
        </div>
      </aside>
    </main>
  );
};

export default SideNav;
