import React, { useState, useEffect, useRef } from 'react'
import styles from "./Register.module.css"
import { EyeOpen, EyeClose } from "../../icons"

function Register() {
  const [username, setUserame] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 

  const handleCheckboxChange = () => {
    setIsChecked(prevState => !prevState);
  }

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    // Focus the username input when the component mounts
    if (usernameRef.current) {
      usernameRef.current.focus();
    }

    // Add border-left to .inputGroup when there is content in input
    const inputGroups = document.querySelectorAll(`.${styles.inputGroup}`);

    inputGroups.forEach((group) => {
      const input = group.querySelector(`.${styles.input}`);
      if (input && input.value !== "") {
        group.classList.add(styles.hasContent);
      } else {
        group.classList.remove(styles.hasContent);
      }
    });
  }, []);

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Sveiki atvykę!</h2>
      <p className={styles.subheading}>Įveskite norimus duomenis</p>
      
      <form className={styles.form}>
        <div className={`${styles.inputGroup} ${username ? styles.hasContent : ""}`}>
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
            ref={usernameRef}
          />
        </div>

        <div className={`${styles.inputGroup} ${password ? styles.hasContent : ""}`}>
        <label
            className={`${styles.label} ${password ? styles.labelFilled : ''}`}
            htmlFor="password"
          >
            Slaptažodis
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
                <EyeOpen size={25} className={styles.eyeIcon} />
              ) : (
                <EyeClose size={25} className={styles.eyeIcon} />
              )}
            </div>
          </div>
        </div>

        <div className={`${styles.inputGroup} ${confirmPassword ? styles.hasContent : ""}`}>
          <label
            className={`${styles.label} ${confirmPassword ? styles.labelFilled : ''}`}
            htmlFor="confirmPassword"
          >
            Pakartokite slaptažodį
          </label>
          <div className={styles.passwordContainer}>
            <input
              type={showPassword ? 'text' : 'password'}
              id="confirmPassword"
              className={styles.input}
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
            />
          </div>
        </div>

        <button type="submit" className={styles.loginButton}>
          Registruotis
        </button>
      </form>
    </section>
  )
}

export default Register
