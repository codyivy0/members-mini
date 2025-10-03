import React from "react";
import styles from "./Message.module.css";

export default function Message({id, author, message, onDelete }) {
    
  return (
    <div className={styles.message}>
      <strong>{author}</strong>
      <p>{message}</p>
      <button onClick={() => onDelete(id)}>Delete Me</button>
    </div>
  );
}
