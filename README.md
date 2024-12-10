## Project Description

This is a personal portfolio website built using React. The portfolio showcases professional achievements, academic projects, technical skills, and personal interests. It is designed to be responsive, interactive, and visually engaging.

### Features

Dynamic Pages:

Bio: A personal introduction with profile image and summary.
Resume: Downloadable resume and an overview of professional experience and skills.
Interests: A visual representation of hobbies and interests.
Gallery: A grid of images showcasing creativity and accomplishments.
Contact Form: A functional form for users to connect.
Interactive Design:

CSS Modules for modular and reusable styling.
Hover effects and animations for user engagement.
Performance Optimizations:

Lazy loading components using React.Suspense and React.lazy.
Web vitals monitoring for improved performance metrics.
Routing:

Centralized navigation using react-router-dom.
Testing:

Ensures component reliability with Jest and React Testing Library.

### Tech Stack

Frontend: React (v19.0.0), React Router (v7.0.2)
Styling: CSS Modules and global styles
Performance Monitoring: Web Vitals
Testing: Jest and React Testing Library
Build Tool: Create React App

### Deployment

cd ~/Desktop/xiaohan-jiang-portfolio

npm start

### File Structure

xiaohan-jiang-portfolio/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Bio.jsx
│   │   ├── Resume.jsx
│   │   ├── Gallery.jsx
│   │   ├── Interests.jsx
│   │   └── ContactForm.jsx
│   ├── styles/
│   │   ├── App.css
│   │   ├── Bio.module.css
│   │   ├── Resume.module.css
│   │   ├── Gallery.module.css
│   │   └── index.css
│   ├── App.js
│   ├── index.js
│   ├── setupTests.js
│   └── reportWebVitals.js
├── package.json
└── README.md


## Future Enhancement

Add backend API for dynamic content and form submissions.

Integrate analytics to track user interactions.

Add animations and transitions for enhanced user experience.

