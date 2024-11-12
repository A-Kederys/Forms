import React from 'react'
import styles from "./Navbar.module.css"

function Navbar( {activeForm, setActiveForm} ) {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navItems}>
        <li
          className={activeForm === 'login' ? styles.active : ''}
          onClick={() => setActiveForm('login')}
        >
          Prisijungimas
        </li>
        <li
          className={activeForm === 'register' ? styles.active : ''}
          onClick={() => setActiveForm('register')}
        >
          Registracija
        </li>
      </ul>
    </nav>
  )
}

export default Navbar