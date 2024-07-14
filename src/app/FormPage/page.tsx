"use client";

import React, { useState } from "react";
import styles from "@/app/FormPage/styles.module.css";
import supabase from "@/lib/supabaseClients";

import appleLogo from "@/assets/apple.svg";
import googleLogo from "@/assets/google.svg";
import gitHubLogo from "@/assets/github.svg";
import { signInWithEmail, signUpWithEmail } from "@/lib/auth";

type Logos = {
  logoIcon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const svgs: Logos[] = [
  { logoIcon: appleLogo },
  { logoIcon: googleLogo },
  { logoIcon: gitHubLogo },
];

const Form = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleForms = () => {
    setShowSignUp((prev) => !prev);
  };

  const appleSignUp = () => {
    console.log("Apple sign up");
   setShowSignUp(true);
  };

  const googleSignUp = async () => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: "http://localhost:3000/Dashboard",
        },
      });
      if (error) console.log("Google sign up error:", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const githubSignUp = async () => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "github",
        options: {
          redirectTo: "http://localhost:3000/Dashboard",
        },
      });
      if (error) console.log("GitHub sign up error:", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = new FormData(event.currentTarget);
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      const { data, error } = await signInWithEmail(email, password);
      if (error) {
        console.log("Sign in error:", error);
      } else {
        console.log("Sign in success:", data);
      }
      // Reset form fields
      event.currentTarget.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = new FormData(event.currentTarget);
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      const { data, error } = await signUpWithEmail(email, password);
      if (error) {
        console.log("Sign up error:", error);
      } else {
        console.log("Sign up success:", data);
      }
      // Reset form fields
      event.currentTarget.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="root" className={styles.formContainerWrapper}>
      <div
        className={styles.container}
        
      >
        <div
          className={`${styles.formWrapper} ${
            showSignUp ? styles.showSignUp : ""
          }`}
        >
          <div className={styles.formContainer}>
            <form onSubmit={handleSignIn}>
              <h1 className={styles.h1s}>Sign in</h1>
              <div className={styles.socialContainer}>
                {svgs.map((logo, index) => (
                  <a href="#" className={styles.social} key={index}>
                    <logo.logoIcon
                      onClick={
                        logo.logoIcon === appleLogo
                          ? appleSignUp
                          : logo.logoIcon === googleLogo
                          ? googleSignUp
                          : githubSignUp
                      }
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
                      onClick={
                        logo.logoIcon === googleLogo
                          ? googleSignUp
                          : githubSignUp
                      }
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
              <p>Enter your personal details and start journey with us</p>
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
          <p className={styles.special}>forgot password?</p>
        </footer>
      </div>
    </div>
  );
};

export default Form;

