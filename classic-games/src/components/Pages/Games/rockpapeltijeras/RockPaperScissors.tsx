import React, { useState } from "react";
import "./RockPaperScissors.module.css";
import Player from "./components/Player";
import ActionButton from "./components/ActionButton";
import ShowWinner from "./components/ShowWinner";
import calculateWinner from "./utils/calculateWinner";
import randomAction from "./utils/randomAction";

function RockPaperScissors() {
  const [playerAction, setPlayerAction] = useState("");
  const [computerAction, setComputerAction] = useState("");

  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [winner, setWinner] = useState(0);

  const onActionSelected = (selectedAction) => {
    const newComputerAction = randomAction();

    setPlayerAction(selectedAction);
    setComputerAction(newComputerAction);

    const newWinner = calculateWinner(selectedAction, newComputerAction);
    setWinner(newWinner);
    if (newWinner === -1) {
      setPlayerScore(playerScore + 1);
    } else if (newWinner === 1) {
      setComputerScore(computerScore + 1);
    }
  };

  return (
    <div className="center">
      <h1>Rock Paper Scissors</h1>
      <div>
        <div className="container">
          <Player name="Player" score={playerScore} action={playerAction} />
          <Player
            name="Computer"
            score={computerScore}
            action={computerAction}
          />
        </div>
        <div>
          <ActionButton action="rock" onActionSelected={onActionSelected} />
          <ActionButton action="paper" onActionSelected={onActionSelected} />
          <ActionButton action="scissors" onActionSelected={onActionSelected} />
        </div>
        <ShowWinner winner={winner} />
      </div>
    </div>
  );
}

export default RockPaperScissors;