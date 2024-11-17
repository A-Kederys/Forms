import React, { useState, useEffect, useRef } from 'react'
import styles from "./Login.module.css"
import { EyeOpen, EyeClose } from "../../icons"
import CryptoJS from "crypto-js"
import { useNavigate } from 'react-router-dom'

function Login({ exit, setIsLoggedIn, setCurrentUser }) {
  const [username, setUserame] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 
  const [animate, setAnimate] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

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

    const savedUsername = localStorage.getItem('savedUsername');
    const savedPassword = localStorage.getItem('savedPassword');
    const savedRememberMe = localStorage.getItem('rememberMe') === 'true';

    const inputGroups = document.querySelectorAll(`.${styles.inputGroup}`);

    inputGroups.forEach((group) => {
      const input = group.querySelector(`.${styles.input}`);
      if (input && input.value !== "") {
        group.classList.add(styles.hasContent);
      } else {
        group.classList.remove(styles.hasContent);
      }
    });

    if (savedRememberMe && savedUsername && savedPassword) {
      setUserame(savedUsername);
      setPassword(savedPassword);
      setIsChecked(savedRememberMe);
    }

    setAnimate(true);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    const users = JSON.parse(localStorage.getItem('users')) || {};
    const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Base64);

    if (users[username] === hashedPassword) {
      if (isChecked) {
        localStorage.setItem('savedUsername', username);
        localStorage.setItem('savedPassword', password);
        localStorage.setItem('rememberMe', 'true');
      } else {
        localStorage.removeItem('savedUsername');
        localStorage.removeItem('savedPassword');
        localStorage.setItem('rememberMe', 'false');
      }

      setIsLoggedIn(true);
      setCurrentUser(username);
      navigate('/success');
    } else {
      setError('Neteisingi duomenys!');
    }
  };

  return (
    <section className={`${styles.container} ${animate ? styles.enter : ''} ${exit ? styles.exit : ''}`}>
      <h2 className={styles.heading}>Sveiki sugrįžę!</h2>
      <p className={styles.subheading}>Įveskite savo duomenis</p>
      
      <form className={styles.form} onSubmit={handleLogin}>
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

        <div className={styles.options}>
          <label className={styles.checkboxContainer}>
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span className={`${styles.checkbox} ${isChecked ? styles.checkedLabel : ''}`}>
              Prisiminti
            </span>
          </label>
          <a href="/" className={styles.forgotPassword}>
            Pamiršote slaptažodį?
          </a>
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit" className={styles.loginButton}>
          Prisijungti
        </button>
      </form>
    </section>
  )
}

export default Login
