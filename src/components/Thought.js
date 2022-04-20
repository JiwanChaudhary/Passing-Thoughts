import React from "react";

const Thought = (props) => {
  const { thought, removeThought } = props;
  function handleRemoveThought() {
    removeThought(thought.id);
  }

  return (
    <li>
      <button aria-label="Remove thought" onClick={handleRemoveThought}>
        &times;
      </button>
      <div>{thought.text}</div>
    </li>
  );
};

export default Thought;
