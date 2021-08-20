import React from "react";

export default function RulesButton({ setShowModal }) {
  return (
    <button onClick={() => setShowModal(true)} className="rules-button">
      RULES
    </button>
  );
}
