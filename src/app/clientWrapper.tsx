'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import SideNav from "@/app/componetnts/sideNav"; // Adjust path as necessary
import styles from "@/app/clientWrapper.module.css";
// import "@uploadthing/react/styles.css"; // Import the CSS here

const excludedPaths = ['/', '/formpage']; // Ensure paths match your actual routes

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [showSideNav, setShowSideNav] = useState(true);
    const [sideNavWidth, setSideNavWidth] = useState(80); // Initial width of the SideNav

    const sideNavRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Determine if the current path is in the excludedPaths
        setShowSideNav(!excludedPaths.includes(pathname));
    }, [pathname]);

    useEffect(() => {
        const handleHover = () => setSideNavWidth(10);
        const handleHoverOut = () => setSideNavWidth(8); 
        const sideNavElement = sideNavRef.current;

        if (sideNavElement) {
            sideNavElement.addEventListener('mouseenter', handleHover);
            sideNavElement.addEventListener('mouseleave', handleHoverOut);
        }

        return () => {
            if (sideNavElement) {
                sideNavElement.removeEventListener('mouseenter', handleHover);
                sideNavElement.removeEventListener('mouseleave', handleHoverOut);
            }
        };
    }, []);

    return (
        <div style={{ display: 'flex' }}>
            {showSideNav && (
                <div ref={sideNavRef} className={styles.sidenav}>
                    <SideNav />
                </div>
            )}
            <main
                style={{
                    flexGrow: 1,
                    marginLeft: showSideNav ? `${sideNavWidth}px` : '0',
                    transition: 'margin-left 0.3s ease', // Smooth transition for margin-left
                }}
            >
                {children}
            </main>
        </div>
    );
}
