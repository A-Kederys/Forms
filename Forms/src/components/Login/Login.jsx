import React, { useState } from 'react'
import styles from "./Login.module.css"
import { EyeOpen, EyeClose } from "../../icons"

function Login() {
  const [username, setUserame] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 

  const handleCheckboxChange = () => {
    setIsChecked(prevState => !prevState);
  }

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Sveiki Sugrįžę!</h2>
      <p className={styles.subheading}>Įveskite savo duomenis</p>
      
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label
            className={`${styles.label} ${username ? styles.labelFilled : ''}`}
            htmlFor="username"
          >
            Vartotojo vardas
          </label>
          <input
            type="text"
            id="username"
            className={styles.input}
            placeholder="vardenis123"
            value={username}
            onChange={(e) => setUserame(e.target.value)}
            autoComplete="off"
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
              type={showPassword ? 'text' : 'password'}
              id="password"
              className={styles.input}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
            <div onClick={togglePasswordVisibility} className={styles.iconContainer}>
              {showPassword ? (
                <EyeClose size={25} className={styles.eyeIcon} />
              ) : (
                <EyeOpen size={25} className={styles.eyeIcon} />
              )}
            </div>
          </div>
        </div>

        <div className={styles.options}>
          <label className={styles.checkboxContainer}>
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span className={`${styles.checkbox} ${isChecked ? styles.checkedLabel : ''}`}>
              Remember me
            </span>
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
