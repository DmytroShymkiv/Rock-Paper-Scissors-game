import React, { useContext, useState } from "react";
import { results, stages, selectors, Turns } from "./Constants";

const GameContext = React.createContext();

export function useGame() {
  return useContext(GameContext);
}

export default function GameProvider({ children }) {
  const [score, setScore] = useState(0);
  const [gameStage, setGameStage] = useState(stages.INITIAL);
  const [computerTurnState, setComputerTurn] = useState();
  const [userTurnState, setUserTurn] = useState();
  const [result, setResult] = useState();

  // Computer   PAPER, ROCK, SCISSORS
  //User PAPER
  //User ROCK
  //User SCISSORS
  const rules = [
    [results.DRAW, results.WIN, results.LOSE],
    [results.LOSE, results.DRAW, results.WIN],
    [results.WIN, results.LOSE, results.DRAW],
  ];

  const updateScore = (userTurn) => {
    makeUserTurn(userTurn);
    const computerTurn = makeComputerTurn();
    setWinner(userTurn, computerTurn);
  };
  
  const setWinner = (userTurn, computerTurn) => {
    const result = rules[userTurn][computerTurn];

    setTimeout(() => {
      setGameStage(stages.RESULTS);
      setScore((prev) => prev + result);
      setResult(result);
    }, 1250);
  };

  const makeUserTurn = (userTurn) => {
    setUserTurn(selectors[userTurn]);
    setGameStage(stages.SHOW);
  };
  const makeComputerTurn = () => {
    const randomInt = (max) => Math.floor(Math.random() * max);
    const computerTurn = randomInt(Object.keys(Turns).length);
    setComputerTurn(selectors[computerTurn]);
    return computerTurn;
  };

  const playAgain = () => {
    setGameStage(stages.INITIAL);
  };

  const value = {
    computerTurnState,
    userTurnState,
    score,
    gameStage,
    updateScore,
    playAgain,
    result,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
