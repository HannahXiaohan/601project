import React from 'react';
import styles from '../../styles/Gallery.module.css';

const Gallery = () => (
  <section className={styles.galleryContainer}>
    <h2>Gallery</h2>
    <div className={styles.galleryImages}>
      <img src="/assets/images/gallery1.jpg" alt="Gallery 1" />
      <img src="/assets/images/gallery2.jpg" alt="Gallery 2" />
    </div>
  </section>
);

export default Gallery;
