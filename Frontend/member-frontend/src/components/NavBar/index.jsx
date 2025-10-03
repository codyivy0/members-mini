import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav>
      <Link to="/" className={styles.navLink}>
        Home
      </Link>
       <Link to="/messages" className={styles.navLink}>
        Messages
      </Link>
      <Link to="/about" className={styles.navLink}>
        About
      </Link>
    </nav>
  );
}
