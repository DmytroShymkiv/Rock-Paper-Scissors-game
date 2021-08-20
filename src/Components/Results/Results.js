import React from "react";
import { useGame } from "../../Game/GameContext";
import { results } from "../../Game/Constants";
import { motion } from "framer-motion";


export default function Results() {
  const { playAgain, result } = useGame();

  const resultTitle =
    result === results.DRAW
      ? "DRAW"
      : `YOU ${result === results.WIN ? "WIN" : "LOSE"}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="result__wrapper"
    >
      <div className="result">
        <h2 className="result__title">{resultTitle}</h2>
        <button className="result__button" onClick={playAgain}>
          Play Again
        </button>
      </div>
    </motion.div>
  );
}
