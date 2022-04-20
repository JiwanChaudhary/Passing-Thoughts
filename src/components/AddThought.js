import React from "react";
import { useState } from "react";
import { getExpirationTime, generateId } from "../utils/utilities";

const AddThoughtForm = ({ addThought }) => {
  const [text, setText] = useState("");
  
  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    text && addThought({text, id: generateId(), expiresAt: getExpirationTime()});
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What is on your mind?"
        onChange={handleChange}
        value={text}
        aria-label = "What is on your mind?"
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default AddThoughtForm;
