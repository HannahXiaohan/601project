import React from 'react';
import styles from '../../styles/Bio.module.css';

const Bio = () => (
  <section className={styles.bioContainer}>
    <img src="/assets/images/avatar.jpg" className={styles.bioImage} alt="Xiaohan Jiang" />
    <p>Hi! I'm Xiaohan Jiang, a passionate web developer.</p>
  </section>
);

export default Bio;
