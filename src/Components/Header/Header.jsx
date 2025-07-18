import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import "./Header.css";
/**
 * @file Header.jsx
 * @module Header
 */

/**
 * @function Header
 * @description A functional component that renders the header section of the portfolio, including the navigation menu.
 * It handles the display and hiding of the navigation menu on smaller screens.
 * @returns {JSX.Element} The Header component.
 */
const Header = () => {
  /**
   * @typedef {object} ToggleState
   * @property {boolean} Toggle - Represents the visibility state of the navigation menu.
   */

  /**
   * @typedef {function} ShowMenu
   * @param {boolean} toggle - The new visibility state of the navigation menu.
   * @returns {void}
   */

  /**
   * @description useState hook to manage the visibility of the navigation menu.
   * @type {[ToggleState, ShowMenu]}
   */
  const [Toggle, showMenu] = useState(false);

  /**
   * @description useRef hook to create a reference to the navigation element.
   * @type {React.RefObject<HTMLElement>}
   */
  const navRef = useRef(null);

  /**
   * @function handleClickOutside
   * @description An event handler that closes the navigation menu when a click occurs outside of it.
   * @param {MouseEvent} event - The click event.
   * @returns {void}
   */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        showMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [Toggle]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="header"
    >
      <nav ref={navRef} className="nav container">
        <a href="/" className="nav__logo">
          Frank
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list ">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i>home
              </a>
            </li>

            <li className="nav__item">
              <a href="#About" className="nav__link">
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>

            <li className="nav__item">
              <a href="#Skills" className="nav__link">
                <i className="uil uil-file nav__icon"></i>skill
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i> services
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>portfolio
              </a>
            </li>

            <li className="nav__item">
              <Link to="/blog" className="nav__link">
                <i className="uil uil-edit nav__icon"></i>blog
              </Link>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="	uil uil-comment-dots nav__icon"></i>Contact
              </a>
            </li>
            <li className="nav__item">{/* <Switch /> */}</li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps nav__toggle"></i>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
