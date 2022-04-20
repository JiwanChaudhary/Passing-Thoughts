import React from "react";
import { Li } from "./Thought.style";

const Thought = (props) => {
  const { thought, removeThought } = props;
  function handleRemoveThought() {
    removeThought(thought.id);
  }

  return (
    <Li>
      <button 
      aria-label="Remove thought" 
      onClick={handleRemoveThought}>
        &times;
      </button>
      <div>{thought.text}</div>
    </Li>
  );
};

export default Thought;
