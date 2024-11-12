import React, { useState } from 'react'
import styles from './App.module.css'
import Login from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'
import Register from './components/Register/Register'

function App() {
  const [activeForm, setActiveForm] = useState('login');

  return (
    <div className={styles.App}>
      <Navbar activeForm={activeForm} setActiveForm={setActiveForm} />
      {activeForm === 'login' && <Login />}
      {activeForm === 'register' && <Register />}
    </div>
  )
}

export default App
