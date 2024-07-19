"use client";
import React, { useEffect, useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Link from "next/link";
import Image from 'next/image';
import Logo from '@/assets/comapnyLogo.png'
import styles from "./page.module.css"; // Import CSS module
import Footer from "./componetnts/footer";

const HomePage: React.FC = () => {
  const [text] = useTypewriter({
    words: [
      'Connect with Authors.',
      'Discover Amazing Content.',
      'Bring your Ideas into Reality.',
    ],
    loop: 0,
    typeSpeed: 200,
    delaySpeed: 11,
  });

  const [showNavbarBackground, setShowNavbarBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowNavbarBackground(scrollTop > 0); // Toggle background based on scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>


    <main id="root" className={styles.container}>
      <article className={styles.pageContainer}>
      
        <nav  className={`${styles.nav} ${showNavbarBackground ? styles.navBackground : ''}`}>
   
          <Image src={Logo} alt='companyLogo' className={styles.logo}/>
     
       
        <header className={styles.header}>
          <h3>Take your Writing to another level!</h3>
        </header>
          <ul>
            <li>
              <Link href="/" className={styles.link}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/About" className={styles.link}>
                About
              </Link>
            </li>
            <li>
              <Link href="/Contact" className={styles.link}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/Contact" className={styles.link}>
                Support
              </Link>
            </li>
            <button className={styles.signinButton}>
            <Link href={'/formpage'} className={styles.signup} >
              Sign-Up
            </Link>
            </button>
            
          </ul>
        </nav>
        <section className={styles.section}>
          <h1 className={styles.title}>
            With CHATTER {''}
            <span className={styles.highlight}>{text}   <Cursor cursorStyle = '||' cursorColor='grey' /></span>
            
          
          </h1>
          <p>
            Chatter is a platform where writers can connect with authors, share
            their stories, and discover new ideas. Create a unique profile, share
            your writing, and engage with others through thought-provoking
            conversations.
          </p>
          <p>
            Ready to get started?{' '}
            <Link href={'/formpage'} className={styles.link}>
              Register Now
            </Link>
          </p>
          <p>
            <Link href={'/dashboard'} className={styles.link}>
              View Dashboard
            </Link>
          </p>
        </section>
        
      </article>

    </main>
    
      <Footer />
      </>
  );
}

export default HomePage;
