import React, { useState } from "react";
import RulesButton from "./RulesButton";
import RulesModal from "./RulesModal";

export default function Rules() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <RulesModal showModal={showModal} setShowModal={setShowModal} />
      <RulesButton setShowModal={setShowModal} />
    </>
  );
}
