'use client'
import React from 'react';
import BarChart from '@/app/componetnts/Charts/BarChart'
import LineChart from '@/app/componetnts/Charts/LineChart'
import PieChart from '@/app/componetnts/Charts/PieChart'
import styles from '@/app/analytics/analytics.module.css';

const Analytics = () => {
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Monthly Posts',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'User Growth',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

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
    <div className={styles.analyticsContainer}>
      <h1 className={styles.header}>Analytics Dashboard</h1>
      <div className={styles.overview}>
        <p>This dashboard provides an overview of user engagement, post distribution, and growth metrics over the past six months.</p>
      </div>
      <div className={styles.chartsGrid}>
        <div className={styles.chartItem}>
          <h2 className={styles.chartHeader}>Monthly Posts</h2>
          <BarChart data={barData} />
          <p>The Monthly Posts chart illustrates the volume of content created each month. A consistent increase indicates growing user activity and content creation.</p>
        </div>
        <div className={styles.chartItem}>
          <h2 className={styles.chartHeader}>User Growth</h2>
          <LineChart data={lineData} />
          <p>The User Growth chart highlights the increase in user registrations. Steady growth is a positive indicator of the platforms popularity and user acquisition efforts.</p>
        </div>
        <div className={styles.chartItem}>
          <h2 className={styles.chartHeader}>Post Distribution</h2>
          <PieChart data={pieData} />
          <p>The Post Distribution chart shows the breakdown of various content categories. Understanding the distribution helps in identifying popular content types and areas for improvement.</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;