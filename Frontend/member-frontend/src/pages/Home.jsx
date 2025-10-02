import React from "react";

export default function Home() {
  const [message, setMessage] = React.useState("");

  function handleChange(event) {
    setMessage(event.target.value);
  }
  function submit() {
    fetch("http://localhost:8080/submit", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: message,
    })
      .then((response) => response.text())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  }

  return (
    <div>
      <h1>HOME</h1>
      <input
        type="text"
        placeholder="enter your message"
        onChange={handleChange}
      />
      <button onClick={submit}></button>
    </div>
  );
}
