import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';

const Bio = lazy(() => import('./pages/Bio'));
const Resume = lazy(() => import('./pages/Resume'));
const Interests = lazy(() => import('./pages/Interests'));
const Gallery = lazy(() => import('./pages/Gallery'));
const ContactForm = lazy(() => import('./pages/ContactForm'));

const App = () => (
  <Router>
    <Header />
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/bio" element={<Bio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Suspense>
    </main>
    <Footer />
  </Router>
);

export default App;
