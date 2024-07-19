"use client"; 
import React, { SVGProps, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/componetnts/sideNav.module.css'
import { User } from '@supabase/supabase-js';
import supabase from '@/lib/supabaseClients';
import { useRouter } from 'next/navigation';
import Logo from '@/assets/comapnyLogo.png';
import profileImage from '@/app/componetnts/assets/profile-pic.jpg';
import dashboardIcon from '@/assets/dashboard.svg'
import analyticsIcon from '@/assets/analytics.svg';
import contentIcon from '@/assets/content.svg';
import discoverIcon from '@/assets/discover.svg';
import categoriesIcon from '@/assets/category.svg';
import notificationIcon from '@/assets/notification.svg';
import profileIcon from '@/assets/profile.svg';
import settingsIcon from '@/assets/settings.svg';
import logoutIcon from '@/assets/logout.svg';
import socialIcon from '@/assets/socials.svg'

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
      onClick: () => router.push('/dashboard')
      // Redirect to the DashboardPage
    },
    { title: 'Analytics', icon: analyticsIcon,
      onClick: () => router.push('analytics')
     },
    { title: 'Content', icon: contentIcon,
      onClick: () => router.push('content')
     },
    { title: 'Discover', icon: discoverIcon,
   onClick: () => router.push('discover')
     },
    { title: 'Categories', icon: categoriesIcon,
    onClick: () => router.push('categories')
     },
    { title: 'Socials', icon: socialIcon,
      onClick: () => router.push('socials')
     },
    { title: 'Notification', icon: notificationIcon,
     onClick: () => router.push('notification') 
     }
  ];

  const accountItems: AccountItems[] = [
    { title: 'Profile', icon: profileIcon,
      onClick: () => router.push('profile')
    },
    { title: 'Settings', icon: settingsIcon,
      onClick: () => router.push('settings')
     },
    { title: 'Sign Out', icon: logoutIcon, onClick: signOut }
  ];

  return (
    <main className="container">
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <Link href='/'>
          <Image className={styles.logo} src={Logo} alt="logo" />
          </Link>
          
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
              <a href="#" onClick={item.onClick}>
                <item.icon className={`${styles.icon} ${item.title}Icon`} />
                <span className={styles.title}>{item.title}</span>
              </a>
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
