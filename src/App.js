import React from "react";
import { getExpirationTime, generateId } from "./utils/utilities";
import { useState } from "react";
import AddThought from "../src/components/AddThought";
import Thought from "../src/components/Thought";

function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: "This is id 1",
      expiresAt: getExpirationTime(),
    },
    {
      id: generateId(),
      text: "This is id 2",
      expiresAt: getExpirationTime(),
    },
  ]);

  function addThought(a) {
    setThoughts((thoughts) => [...thoughts, a]);
  }

  const removeThought = (thoughtIdToRemove) => {
    setThoughts((thoughts) =>
      thoughts.filter((thought) => thought.id !== thoughtIdToRemove)
    );
  };
  
  return (
    <div>
      <header>
        <h1>Passing Thought</h1>
      </header>
      <AddThought addThought={addThought} />
      <ul>
        {thoughts.map((thought) => (
          <Thought
            key={thought.id}
            thought={thought}
            removeThought={removeThought}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
