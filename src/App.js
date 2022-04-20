import React from "react";
import { getExpirationTime, generateId } from "./utils/utilities";
import { useState } from "react";
import AddThought from "../src/components/AddThought";
import Thought from "../src/components/Thought";
import { Wrapper, Header } from "./components/App.style";

function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: "Thoughts are things. They travel far. Think wisely.",
      expiresAt: getExpirationTime(),
    },
    {
      id: generateId(),
      text: "What you think is you become. You are the hero of your own.",
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
    <Wrapper>
      <Header>
        <h1>Passing Thought</h1>
      </Header>
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
    </Wrapper>
  );
}

export default App;
