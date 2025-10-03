import React from "react";
import styles from "./MessageContainer.module.css";
export default function MessageContainer({ children }) {
  return <div className={styles.messageContainer}>{children}</div>;
}
