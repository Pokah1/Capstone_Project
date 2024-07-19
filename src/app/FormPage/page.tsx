"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/FormPage/styles.module.css";
import supabase from '@/lib/supabaseClients';

import appleLogo from "@/assets/apple.svg";
import googleLogo from "@/assets/google.svg";
import gitHubLogo from "@/assets/github.svg";
import { signInWithEmail, signUpWithEmail } from "@/lib/auth";

type Logos = {
  logoIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  provider: 'apple' | 'google' | 'github';
};

const svgs: Logos[] = [
  { logoIcon: appleLogo, provider: 'apple' },
  { logoIcon: googleLogo, provider: 'google' },
  { logoIcon: gitHubLogo, provider: 'github' },
];

const Form = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const toggleForms = () => {
    setShowSignUp((prev) => !prev);
  };

  const handleSocialLogin = async (provider: 'apple' | 'google' | 'github') => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: "http://localhost:3000/dashboard"
        },
      });
      if (error) {
        setErrorMessage(error.message);
      } 
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    try {
      const formData = new FormData(event.currentTarget);
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      const { user, session, error } = await signInWithEmail(email, password);
      if (error) {
        setErrorMessage(error.message);
      } else {
        router.push("/dashboard");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    try {
      const formData = new FormData(event.currentTarget);
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      const { user, session, error } = await signUpWithEmail(email, password);
      if (error) {
        setErrorMessage(error.message);
      } else {
        alert('Check your email for the confirmation link!');
        router.push("/dashboard");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="root" className={styles.formContainerWrapper}>
      <div className={styles.container}>
        <div className={`${styles.formWrapper} ${showSignUp ? styles.showSignUp : ""}`}>
          <div className={styles.formContainer}>
            <form onSubmit={handleSignIn}>
              <h1 className={styles.h1s}>Sign in</h1>
              <div className={styles.socialContainer}>
                {svgs.map((logo, index) => (
                  <a href="#" className={styles.social} key={index}>
                    <logo.logoIcon
                      onClick={() => handleSocialLogin(logo.provider)}
                      width={30}
                      height={30}
                    />
                  </a>
                ))}
              </div>
              <span>or use your account</span>
              <div className={styles.infield}>
                <input type="email" placeholder="Email" name="email" />
              </div>
              <div className={styles.infield}>
                <input type="password" placeholder="Password" name="password" />
              </div>
              <a href="#" className={styles.forgot}>
                Forgot your password?
              </a>
              {errorMessage && <div className={styles.error}>{errorMessage}</div>}
              <button type="submit" className={styles.submit} disabled={isSubmitting}>
                Sign In
              </button>
            </form>
          </div>
          <div className={styles.formContainer}>
            <form onSubmit={handleSignUp}>
              <h1 className={styles.h1s}>Create Account</h1>
              <div className={styles.socialContainer}>
                {svgs.map((logo, index) => (
                  <a href="#" className={styles.social} key={index}>
                    <logo.logoIcon
                      onClick={() => handleSocialLogin(logo.provider)}
                      width={30}
                      height={30}
                    />
                  </a>
                ))}
              </div>
              <span>Signup with Email</span>
              <div className={styles.infield}>
                <input type="email" placeholder="Email" name="email" />
              </div>
              <div className={styles.infield}>
                <input type="password" placeholder="Password" name="password" />
              </div>
              {errorMessage && <div className={styles.error}>{errorMessage}</div>}
              <button type="submit" className={styles.submit} disabled={isSubmitting}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className={styles.overlayContainer}>
          <div className={styles.overlay}>
            <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
              <h1 className={styles.h1s}>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className={`${styles.ghost} ${styles.submit}`}
                onClick={toggleForms}
              >
                Sign In
              </button>
            </div>
            <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
              <h1 className={styles.h1s}>Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <button
                className={`${styles.ghost} ${styles.submit}`}
                onClick={toggleForms}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <footer className={styles.footer}>
          <p className={styles.special}>Forgot password?</p>
        </footer>
      </div>
    </div>
  );
};

export default Form;
