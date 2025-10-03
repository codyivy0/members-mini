import React from "react";
import { useState, useEffect } from "react";
import MessageContainer from "../../components/MessageContainer/MessageContainer";
import Message from "../../components/Message/Message";
import styles from "./Messages.module.css";

export default function Messages() {
  const [messages, setMessages] = useState([]);

  function onDelete(id) {
    const newMessages = messages.filter((msg) => msg.id !== id);
    
    fetch(`http://localhost:8080/messages/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("Message deleted successfully");
        setMessages(newMessages);
      })
      .catch((error) => {
        console.error("There was a problem with the delete operation:", error);
      });
  }

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
        {messages.map((msg) => (
          <Message
            key={msg.id}
            id={msg.id}
            author={msg.author}
            message={msg.message}
            onDelete={onDelete}
          />
        ))}
      </MessageContainer>
    </>
  );
}
