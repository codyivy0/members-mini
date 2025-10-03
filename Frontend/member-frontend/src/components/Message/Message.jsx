import React from "react";
import styles from "./Message.module.css";

export default function Message({ author, message }) {
  return (
    <div className={styles.message}>
      <strong>{author}</strong>
      <p>{message}</p>
    </div>
  );
}
