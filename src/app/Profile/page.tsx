// components/FlipCard.js
'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/profile/profile.module.css'
import gitHubIcon from '@/assets/github.svg'
import twiiterIcon from '@/assets/apple.svg'
import facebookIcon from '@/assets/facebook.svg'

const FlipCard = () => {
  return (
    <div className={styles['flip-card']}>
      <div className={styles['flip-card-inner']}>
        <div className={styles['flip-card-front']}>
          <div className={styles['profile-image']}>
            <Image src="/assets/profile.svg" alt="Profile" width={120} height={120} className={styles.pfp} />
            <div className={styles.name}>
              Ethan Johnson
            </div>
          </div>
        </div>
        <div className={styles['flip-card-back']}>
          <div className={styles.description}>
            <p>
              Hello, I am a software engineer with over 5 years of experience in web development. I specialize in building scalable, high-performance web applications using modern web technologies such as React, Angular, and Node.js.
            </p>
            <div className={styles.socialbar}>
              <Link href="https://github.com">
                
                  <Image src={gitHubIcon} alt="GitHub" width={20} height={20} />
               
              </Link>
              <Link href="https://facebook.com">
               
                  <Image src={facebookIcon} alt="Instagram" width={20} height={20} />
                
              </Link>
              <Link href="https://twitter.com">
               
                  <Image src={twiiterIcon} alt="Twitter" width={20} height={20} />
              
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
