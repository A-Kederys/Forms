import React, { useState } from 'react'
import styles from './App.module.css'
import Login from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'
import Register from './components/Register/Register'
import BlockyRoad from './banners'

function App() {
  const [activeForm, setActiveForm] = useState('login');
  const [exit, setExit] = useState(false);

  const handleFormChange = (form) => {
    setExit(true);
    setTimeout(() => {
      setActiveForm(form);
      setExit(false);
    }, 500);
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
