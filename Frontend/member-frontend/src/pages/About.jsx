import React from "react";
import { useState, useEffect } from "react";

export default function About() {
  const [message, setMessage] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/hello")
      .then((response) => response.text())
      .then((data) =>  setMessage(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>ABOUT</h1>
      <p>{message}</p>
    </div>
  );
}
