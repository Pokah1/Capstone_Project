"use client";
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Link from "next/link";
import styles from "./page.module.css"; // Import CSS module
import Footer from "./componetnts/footer";

const HomePage: React.FC = () => {
  const [text] = useTypewriter({
    words: ["Connect with Authors.", "Discover Amazing Content.", "Bring your Ideas into Reality."],
    loop: 0,
    typeSpeed: 200,
    delaySpeed: 11,
  });

  return (
    <main id="root" className={styles.container}>
      <article className={styles.pageContainer}>
       
        <nav className={styles.nav}>
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
            <Link href={'/FormPage'} className={styles.link}>
              Register Now
            </Link>
          </p>
          <p>
            <Link href={'/Dashboard'} className={styles.link}>
              View Dashboard
            </Link>
          </p>
        </section>
        <Footer />
      </article>
    </main>
  );
}

export default HomePage;
