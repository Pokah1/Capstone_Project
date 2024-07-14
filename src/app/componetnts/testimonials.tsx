import React, { useRef, useEffect, useState } from 'react';
import styles from './testimonial.module.css';

interface TestimonialProps {
  testimonials: { name: string; content: string }[];
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [testimonials]);

  return (
    <div className={styles.testimonial}>
      <div className={styles.wrapper}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}>
            <p className={styles.quote}>{testimonial.content}</p>
            <p className={styles.name}>{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
