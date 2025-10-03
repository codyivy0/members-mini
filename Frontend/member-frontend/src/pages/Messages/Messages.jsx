import React from "react";
import { useState, useEffect } from "react";
import MessageContainer from "../../components/MessageContainer/MessageContainer";
import Message from "../../components/Message/Message";
import styles from "./Messages.module.css";
export default function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/messages")
      .then((response) => response.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <>
      <h1>MESSAGES</h1>
      <MessageContainer classname={styles.messageContainer}>
        {messages.map((msg, index) => (
          <Message key={index} author={msg.author} message={msg.message} />
        ))}
      </MessageContainer>
    </>
  );
}
