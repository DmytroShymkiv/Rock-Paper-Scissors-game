import React from "react";
import { useGame } from "../../Game/GameContext";
import { Turns } from "../../Game/Constants";

import triangle from "../../assets/images/bg-triangle.svg";
import paper from "../../assets/images/icon-paper.svg";
import rock from "../../assets/images/icon-rock.svg";
import scissors from "../../assets/images/icon-scissors.svg";

export default function Selectors() {
  return (
    <div className="selectors-container">
      <div className="triangle">
        <img src={triangle} alt="" />
        <Selector selectorClass="rock" turn={Turns.ROCK}>
          <img src={rock} alt="" />
        </Selector>
        <Selector selectorClass="paper" turn={Turns.PAPER}>
          <img src={paper} alt="" />
        </Selector>
        <Selector selectorClass="scissors" turn={Turns.SCISSORS}>
          <img src={scissors} alt="" />
        </Selector>
      </div>
    </div>
  );
}

const Selector = ({ children, selectorClass, turn }) => {
  const { updateScore } = useGame();
  return (
    <div
      onClick={() => updateScore(turn)}
      className={`selector selector-init selector__${selectorClass}`}
    >
      {children}
    </div>
  );
};
