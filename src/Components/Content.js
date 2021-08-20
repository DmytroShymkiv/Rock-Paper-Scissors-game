import React from "react";
import PickingScreen from "./PickingScreen/PickingScreen";
import Selectors from "./Selectors/Selectors";
import { stages } from "../Game/Constants";
import { useGame } from "../Game/GameContext";

export default function Content() {
  const { gameStage } = useGame();
  return gameStage === stages.INITIAL ? <Selectors /> : <PickingScreen />;
}
