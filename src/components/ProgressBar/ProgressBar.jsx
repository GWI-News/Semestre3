import React, { useEffect, useState } from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const updateScrollProgress = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = (scrollTop / scrollHeight) * 100;
    setProgress(scrollProgress);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className={styles.progressBar} style={{width: `${progress}%` }}></div>
  )
}

export default ProgressBar;
