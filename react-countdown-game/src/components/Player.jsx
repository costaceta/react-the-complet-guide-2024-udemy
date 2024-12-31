import { useRef, useState } from "react";
import ResultsModal from "./ResultsModal";

export default function Player() {
  const playerName = useRef("");

  const [enteredPlayerName, setEnteredPlayerName] = useState("");

  const handleClick = () => {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  };

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"} </h2>
      <p>
        <input ref={playerName} type="text" value={enteredPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
