import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import ThreeColumnSection from './components/ThreeColumnSection';
import TextSection from './components/TextSection';
import CookieIcon from './components/CookieIcon';
import ContactBar from './components/ContactBar';
import DescriptionSection from "./components/DescriptionSection";
import Footer from './components/Footer';
import ContactPage from './components/pages/ContactPage';
import './App.css';
import LoadingScreen from './components/LoadingScreen';
import imageScreen from './img/loadingscreen.png';
import Realisations from './components/Realisations';

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  }, [location.pathname]);

  return (
    <div className='App'>
      {loading && <LoadingScreen image={imageScreen} />}
      <Header />
      <Routes>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/" element={
          <>
            <MainContent />
            <ThreeColumnSection />
            <DescriptionSection />
            <TextSection />
            <CookieIcon />
            <ContactBar />
          </>
        } />
      </Routes>
      <Footer />
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const handleStopLoading = () => setLoading(false);
    setTimeout(() => handleStopLoading(), 1000);
    window.addEventListener('beforeunload', handleStopLoading);
    return () => window.removeEventListener('beforeunload', handleStopLoading);
  }, []);

  return (
    <Router>
      {loading && <LoadingScreen image={imageScreen} />}
      <AppContent />
    </Router>
  );
};

export default App;
