// app/Dashboard/index.tsx

import React from 'react';
import SideNav from '@/app/componetnts/sideNav';

const Dashboard = () => {
  return (
    <div>
      <SideNav />
      <main>
        <h1>Dashboard</h1>
        {/* Add content specific to the Dashboard */}
      </main>
    </div>
  );
};

export default Dashboard;
