import React from 'react'
import styles from "./Success.module.css";

function Success({ username, onLogout }) {
    return (
        <section className={styles.container}>
          <h2>Sveiki prisijungę, <span className={styles.username}>{username}</span>!</h2>
          <button onClick={onLogout} className={styles.logoutButton}>
            Atsijungti
          </button>
        </section>
      );
  }

export default Success
