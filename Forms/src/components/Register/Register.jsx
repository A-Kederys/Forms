import React, { useState, useEffect, useRef } from 'react'
import styles from "./Register.module.css"
import { EyeOpen, EyeClose } from "../../icons"
import CryptoJS from "crypto-js";

function Register({ exit }) {
  const [username, setUserame] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(prevState => !prevState);
  }

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }

    const inputGroups = document.querySelectorAll(`.${styles.inputGroup}`);

    inputGroups.forEach((group) => {
      const input = group.querySelector(`.${styles.input}`);
      if (input && input.value !== "") {
        group.classList.add(styles.hasContent);
      } else {
        group.classList.remove(styles.hasContent);
      }
    });

    setAnimate(true);
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setUsernameError(false);
    setPasswordError(false);

    if (!username || !password || !confirmPassword) {
      setError('Visi laukai turi būti užpildyti!');
      return;
    }
    if (password !== confirmPassword) {
      setError('Slaptažodžiai nesutampa!');
      return;
    }
    if (password.length < 8) {
      setError('Per trumpas slaptažodis!');
      setPasswordError(true);
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[username]) {
      setError('Toks vartotojo vardas jau egzistuoja!');
      setUsernameError(true);
      return;
    }

    const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Base64);

    users[username] = hashedPassword;
    localStorage.setItem('users', JSON.stringify(users));
    setSuccess(true);
    setUserame('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <section className={`${styles.container} ${animate ? styles.enter : ''} ${exit ? styles.exit : ''}`}>
      <h2 className={styles.heading}>Sveiki atvykę!</h2>
      <p className={styles.subheading}>Įveskite norimus duomenis</p>
      
      <form className={styles.form} onSubmit={handleRegister}>
      <div className={`${styles.inputGroup} ${username ? styles.hasContent : ''} ${usernameError ? styles.error : ''}`} >
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

        <div className={`${styles.inputGroup} ${password ? styles.hasContent : ''} ${passwordError ? styles.error : ''}`} >
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

        <div className={`${styles.inputGroup} ${confirmPassword ? styles.hasContent : ""} ${confirmPassword && confirmPassword !== password ? styles.error : ''}`}>
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

        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>Registracija sėkminga!</p>}

        <button type="submit" className={styles.loginButton}>
          Registruotis
        </button>
      </form>
    </section>
  )
}

export default Register
