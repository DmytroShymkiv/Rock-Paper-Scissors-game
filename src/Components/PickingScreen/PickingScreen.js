import React from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import { useGame } from "../../Game/GameContext";
import Results from "../Results/Results";
import { stages } from "../../Game/Constants";

export default function PickingScreen() {
  console.log("mount");
  const { computerTurnState, userTurnState, gameStage } = useGame();

  const animation = {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1.75,
      opacity: 1,
    },
  };
  const animationHome = {
    ...animation,
    transition: { delay: 0.5 },
  };

  return (
    <AnimateSharedLayout>
      <div className="wrapper">
        <Selector
          title="You Picked"
          state={userTurnState}
          animation={animation}
        />
        <div className="hide-tablet">
          {gameStage === stages.RESULTS && <Results />}
        </div>
        <Selector
          title="The house Picked"
          state={computerTurnState}
          animation={animationHome}
        />
      </div>
      <div className="show-tablet">
        {gameStage === stages.RESULTS && <Results />}
      </div>
    </AnimateSharedLayout>
  );
}

function Selector({ title, state, animation }) {
  return (
    <motion.div layout className="pick__container">
      <h2 className="pick__title">{title}</h2>
      <motion.div
        {...animation}
        className="selector"
        style={{ borderColor: state.border }}
      >
        <img src={state.img} alt="" />
      </motion.div>
    </motion.div>
  );
}
