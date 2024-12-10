import React from 'react';
import styles from '../../styles/Resume.module.css';

const Resume = () => (
  <section className={styles.resumeContainer}>
    <h2>Resume</h2>
    <p>Click below to view or download my resume:</p>
    <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
      View My Resume
    </a>
  </section>
);

export default Resume;
