import React from "react";
import { useGame } from "../../Game/GameContext";

export default function Score() {
  const { score } = useGame();
  return (
    <div className="score">
      <div className="score__title">SCORE</div>
      <div className="score__count">{score}</div>
    </div>
  );
}
