"use client"; 

import React, { useState, SVGProps} from 'react';
import styles from '@/app/FormPage/styles.module.css'
import supabase from '@/lib/supabaseClients';
import backgroundImage from '@/assets/background.svg'
import appleLogo from '@/assets/apple.svg'

import googleLogo from '@/assets/google.svg';

import gitHubLogo from '@/assets/github.svg';

// import Image from 'next/image';
import {signInWithEmail, signUpWithEmail} from '@/lib/auth'

type Logos = {
  logoIcon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const svgs: Logos[] = [
  {logoIcon: appleLogo},
  {logoIcon: googleLogo},
  {logoIcon: gitHubLogo},
]



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
      options: {
        redirectTo: 'http://localhost:3000/Dashboard', 
      },
    });
    if (error) console.log('Google sign up error:', error.message);
  };

  const githubSignUp = async() => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/Dashboard', 
      },
    })
    if (error) console.log('GitHub sign up error:', error.message);
    console.log('github sign up');
  
  };

  const handleSignIn =async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const {data, error} = await signInWithEmail(email, password);
    if (error) {console.log('Sign in error:', error.message)} else { console.log('Sign in success:', data)

    };
    // Reset form fields
    event.currentTarget.reset();
  };

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    try {
      const formData = new FormData(event.currentTarget);
      const email = formData.get('email') as string;
      const password = formData.get('password') as string;
  
      const { data, error } = await signUpWithEmail(email, password);
  
      if (error) {
        console.error('Sign up error:', error.message);
        // Handle error gracefully, show user-friendly message, etc.
      } else {
        console.log('Sign up success:', data);
        // Reset the form if it exists
        if (event.target) {
          (event.target as HTMLFormElement).reset();
        }
      }
    } catch (error) {
      console.error('Sign up error:', error.message);
      // Handle error if signUpWithEmail fails
    }
  };
  
  return (
    <div id="root" className={styles.formContainerWrapper}>
      <div className={styles.container} style={{ backgroundImage: `url(${backgroundImage.src})` }}>
        <div className={`${styles.formWrapper} ${showSignUp ? styles.showSignUp : ''}`}>
          <div className={styles.formContainer}>
            <form onSubmit={handleSignIn}>
              <h1 className={styles.h1s}>Sign in</h1>
              <div className={styles.socialContainer}>
                {svgs.map((logo, index) => (
                  <a href="#" className={styles.social} key={index}>
                    <logo.logoIcon onClick={logo.logoIcon === appleLogo? appleSignUp: logo.logoIcon === googleLogo ? googleSignUp : githubSignUp } width={30} height={30} />
                  </a>
                ))}
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
                {svgs.map((logo, index) => (
                  <a href="#" className={styles.social} key={index}>
                    <logo.logoIcon onClick={logo.logoIcon === googleLogo ? googleSignUp : () => handleSignUp} width={30} height={30} />
                  </a>
                ))}
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
