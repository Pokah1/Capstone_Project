// Dashboard.tsx
'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/app/Dashboard/styles.module.css';
import profileIcon from '@/assets/profile-pic.jpg';
import supabase from '@/lib/supabaseClients';  // Correct the import statement
import { User } from '@supabase/supabase-js';
import PieChart from '@/app/componetnts/charts/PieChart';


const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) {
        console.error('Error fetching session:', error);
      }
      if (session) {
        setUser(session.user);
      } else {
        router.push("/formpage");
      }
      setLoading(false);
    };
    getUser();
  }, [router]);

  if (loading) return <p>Loading...</p>;



  const pieData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };
  return (
    <div className={styles.dashboard}>
      <Link href="/content">
        <button className={styles.createContentButton}>Write</button>
      </Link>
      <header className={styles.header}>
        <h2 className={styles.name}>Welcome {user?.user_metadata?.full_name || 'John Doe'}</h2>
        <div className={styles.profile}>
        {user && <Image src={profileIcon} alt="Profile" width={50} height={50} />}
        <span>{user?.email}</span>
        </div>
      </header>
      <section className={styles.searchBar}>
        <h2>Search</h2>
        <input type="text" placeholder="Search content or users..." />
      </section>
      <section className={styles.metrics}>
        <div className={styles.metricItem}>
          <h2>Posts</h2>
          <p>42</p>
        </div>
        <div className={styles.metricItem}>
          <h2>Followers</h2>
          <p>123</p>
        </div>
        <div className={styles.metricItem}>
          <h2>Likes</h2>
          <p>789</p>
        </div>
      </section>
      <section>
        <PieChart data={pieData} />  {/* Pass the pieData as a prop */}
      </section>
      <section className={styles.recentActivity}>
        <h2>Recent Activity</h2>
        <ul className={styles.activityList}>
          <li>Latest post...</li>
          <li>Another activity...</li>
          {/* Map over recent posts and comments */}
        </ul>
      </section>
      <section className={styles.notifications}>
        <h2>Notifications</h2>
        <ul className={styles.notificationList}>
          <li>New comment on your post...</li>
          <li>Someone liked your post...</li>
          {/* Map over notifications */}
        </ul>
      </section>
      <section className={styles.quickLinks}>
        <h2>Quick Links</h2>
        <ul className={styles.quickLinksList}>
          <li><Link href="/create-post">Create New Post</Link></li>
          <li><Link href="/profile">Manage Profile</Link></li>
          <li><Link href="/explore">Explore Content</Link></li>
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
