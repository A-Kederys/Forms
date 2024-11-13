import React, { useState } from 'react'
import styles from "./Login.module.css"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Sveiki Sugrįžę!</h2>
      <p className={styles.subheading}>Įveskite savo duomenis</p>
      
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label
            className={`${styles.label} ${email ? styles.labelFilled : ''}`}
            htmlFor="email"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className={styles.input}
            placeholder="example@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autocomplete="off"
          />
        </div>

        <div className={styles.inputGroup}>
        <label
            className={`${styles.label} ${password ? styles.labelFilled : ''}`}
            htmlFor="password"
          >
            Password
          </label>
          <div className={styles.passwordContainer}>
            <input
              type="password"
              id="password"
              className={styles.input}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autocomplete="new-password"
            />
          </div>
        </div>

        <div className={styles.options}>
          <label className={styles.checkboxContainer}>
            <input type="checkbox" className={styles.checkbox} />
            Remember me
          </label>
          <a href="/" className={styles.forgotPassword}>
            Forgot Password?
          </a>
        </div>

        <button type="submit" className={styles.loginButton}>
          Login
        </button>
      </form>
    </section>
  )
}

export default Login
