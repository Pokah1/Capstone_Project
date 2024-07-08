"use client"; 

import React, { useState } from 'react';
import styles from '@/app/form/styles.module.css'
import supabase from '@/lib/supabaseClients';
import backgroundImage from '@/assets/background.svg'
import appleLogo from '@/assets/apple.svg';
import googleLogo from '@/assets/google.svg';
import linkedinLogo from '@/assets/linkedin.svg';
import Image from 'next/image';

const Form = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleForms = () => {
    setShowSignUp((prev) => !prev);
  };

  const appleSignUp = () => {
    console.log('Apple sign up');
    setShowSignUp(true);
  };

  const googleSignUp = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) console.log('Google sign up error:', error.message);
  };

  const linkedinSignUp = () => {
    console.log('LinkedIn sign up');
    setShowSignUp(true);
  };

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Sign in');
    (event.target as HTMLFormElement).reset();
  };

  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Sign up');
    (event.target as HTMLFormElement).reset();
  };

  return (
    <div id="root" className={styles.formContainerWrapper}>
      <div className={styles.container} style={{ backgroundImage: `url(${backgroundImage.src})` }}>
        <div className={`${styles.formWrapper} ${showSignUp ? styles.showSignUp : ''}`}>
          <div className={styles.formContainer}>
            <form onSubmit={handleSignIn}>
              <h1 className={styles.h1s}>Sign in</h1>
              <div className={styles.socialContainer}>
                <a href="#" className={styles.social}>
                  <Image src={appleLogo} alt="Apple logo" onClick={appleSignUp} width={30} height={30} />
                </a>
                <a href="#" className={styles.social}>
                  <Image src={googleLogo} alt="Google logo" onClick={googleSignUp} width={30} height={30} />
                </a>
                <a href="#" className={styles.social}>
                  <Image src={linkedinLogo} alt="LinkedIn logo" onClick={linkedinSignUp} width={30} height={30} />
                </a>
              </div>
              <span>or use your account</span>
              <div className={styles.infield}>
                <input type="email" placeholder="Email" name="email" />
              </div>
              <div className={styles.infield}>
                <input type="password" placeholder="Password" />
              </div>
              <a href="#" className={styles.forgot}>
                Forgot your password?
              </a>
              <button type="submit" className={styles.submit}>Sign In</button>
            </form>
          </div>
          <div className={styles.formContainer}>
            <form onSubmit={handleSignUp}>
              <h1 className={styles.h1s}>Create Account</h1>
              <div className={styles.socialContainer}>
                <a href="#" className={styles.social}>
                  <Image src={appleLogo} alt="Apple logo" onClick={appleSignUp} width={30} height={30} />
                </a>
                <a href="#" className={styles.social}>
                  <Image src={googleLogo} alt="Google logo" onClick={googleSignUp} width={30} height={30} />
                </a>
                <a href="#" className={styles.social}>
                  <Image src={linkedinLogo} alt="LinkedIn logo" onClick={linkedinSignUp} width={30} height={30} />
                </a>
              </div>
              <span>or use your email for registration</span>
              <div className={styles.infield}>
                <input type="text" placeholder="Name" />
              </div>
              <div className={styles.infield}>
                <input type="email" placeholder="Email" name="email" />
              </div>
              <div className={styles.infield}>
                <input type="password" placeholder="Password" />
              </div>
              <button type="submit" className={styles.submit}>Sign Up</button>
            </form>
          </div>
        </div>
        <div className={styles.overlayContainer}>
          <div className={styles.overlay}>
            <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
              <h1 className={styles.h1s}>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className={`${styles.ghost} ${styles.submit}`} onClick={toggleForms}>
                Sign In
              </button>
            </div>
            <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
              <h1 className={styles.h1s}>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className={`${styles.ghost} ${styles.submit}`} onClick={toggleForms}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <footer className={styles.footer}>
          <p className={styles.special}>forgot password?</p>
        </footer>
      </div>
    </div>
  );
};

export default Form;
