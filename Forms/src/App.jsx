import React, { useState, useEffect } from 'react'
import styles from './App.module.css'
import Login from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'
import Register from './components/Register/Register'
import BlockyRoad from './banners'

function App() {
  const [activeForm, setActiveForm] = useState('login');
  const [exit, setExit] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 830px)');
    const handleMediaChange = () => setIsSmallScreen(mediaQuery.matches);
    handleMediaChange();
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

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

  return (
    <div className={styles.App}>
      <div className={styles.formContainer}>
        <Navbar activeForm={activeForm} setActiveForm={handleFormChange} />
        {activeForm === 'login' && <Login exit={exit} />}
        {activeForm === 'register' && <Register exit={exit} />}
      </div>
      <div className={styles.blur}></div>
      <div  className={styles.block}>
        <BlockyRoad className={styles.blockyRoad}/>
      </div>
    </div>
  )
}

export default App
