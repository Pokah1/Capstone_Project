// app/Dashboard/[id].tsx

import React from 'react';
import SideNav from '@/app/componetnts/sideNav'; // Adjust path as needed
import { useRouter } from 'next/router';

const DashboardDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Get dynamic ID from router

  return (
    <div>
      <SideNav id={id as string}/>
      <main>
        <h1>Dashboard Detail Page</h1>
        <p>Dynamic ID: {id}</p>
        {/* Add specific content based on the dynamic ID */}
      </main>
    </div>
  );
};

export default DashboardDetail;
