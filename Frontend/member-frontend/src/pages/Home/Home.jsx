import React from "react";
import styles from "./Home.module.css";

export default function Home() {
  const [message, setMessage] = React.useState("");
  const [progress, setProgress] = React.useState("");
  const [author, setAuthor] = React.useState("");

  function handleChangeMessage(event) {
    setMessage(event.target.value);
  }
  function handleChangeAuthor(event) {
    setAuthor(event.target.value);
  }
  function submit() {
    fetch("http://localhost:8080/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ author: author, message: message }),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Fields cannot be empty");
        else return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        setProgress("operation success!");
        setMessage("");
        setAuthor("");
      })
      .catch((error) => {
        console.error("Error:", error);
        setProgress("operation failed: " + error.message);
      });
  }

  return (
    <div>
      <h1>HOME</h1>
      <div className={styles.form}>
        <input
          className={styles.input}
          type="text"
          value={author}
          placeholder="Enter your name"
          onChange={handleChangeAuthor}
        />
        <input
          className={styles.input}
          type="text"
          value={message}
          placeholder="enter your message"
          onChange={handleChangeMessage}
        />
        <button onClick={submit}>Submit</button>
      </div>
      <p>{progress}</p>
    </div>
  );
}
