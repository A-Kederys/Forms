import React, { useState, useEffect } from 'react'
import styles from './App.module.css'
import Login from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'
import Register from './components/Register/Register'
import BlockyRoad from './banners'
import Success from './components/Success/Success'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ButtonPause, ButtonPlay } from "./icons"

function App() {
  const [activeForm, setActiveForm] = useState('login');
  const [exit, setExit] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isAnimating, setIsAnimating] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const savedAnimationState = localStorage.getItem('isAnimating');

    if (loggedIn && savedUser) {
      setIsLoggedIn(true);
      setCurrentUser(savedUser);
    }
    if (savedAnimationState !== null) {
      setIsAnimating(savedAnimationState === 'true');
    } else {
      setIsAnimating(true);
    }

    const mediaQuery = window.matchMedia('(max-width: 830px)');
    const handleMediaChange = () => setIsSmallScreen(mediaQuery.matches);
    handleMediaChange();
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  useEffect(() => {
    if (isAnimating !== null) {
      localStorage.setItem('isAnimating', isAnimating);
    }
  }, [isAnimating]);

  const handleFormChange = (form) => {
    if (isSmallScreen) {
      setActiveForm(form);
    } else {
      setExit(true);
      setTimeout(() => {
        setActiveForm(form);
        setExit(false);
      }, 250);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
  };

  return (
    <Router basename="/Forms">
      <div className={styles.App}>
        <Routes>
          {!isLoggedIn && (
            <>
              <Route
                path="/"
                element={
                  <div className={styles.formContainer}>
                    <Navbar activeForm={activeForm} setActiveForm={handleFormChange} />
                    {activeForm === 'login' && (
                      <Login
                        exit={exit}
                        setIsLoggedIn={(status) => {
                          setIsLoggedIn(status);
                          localStorage.setItem('isLoggedIn', status);
                        }}
                        setCurrentUser={(user) => {
                          setCurrentUser(user);
                          localStorage.setItem('currentUser', user);
                        }}
                      />
                    )}
                    {activeForm === 'register' && <Register exit={exit} />}
                  </div>
                }
              />
            </>
          )}

          {isLoggedIn && (
            <Route
              path="/success"
              element={<Success username={currentUser} onLogout={handleLogout} />}
            />
          )}

          <Route
            path="/"
            element={isLoggedIn ? <Navigate to="/success" /> : <Navigate to="/" />}
          />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <div className={styles.blur}></div>
        <div className={styles.block}>
          <BlockyRoad 
            className={styles.blockyRoad}
            isAnimating={isAnimating}
          />
          <button 
            className={styles.stopButton} 
            onClick={() => setIsAnimating(!isAnimating)}
          >
            {isAnimating ? (
                <ButtonPause size={3} />
              ) : (
                <ButtonPlay size={3} />
              )}
          </button>
        </div>
      </div>
    </Router>
  )
}

export default App
