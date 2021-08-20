import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import rules from "../../assets/images/image-rules.svg";
import close from "../../assets/images/icon-close.svg";

export default function RulesModal({ showModal, setShowModal }) {
  return (
    <AnimatePresence>
      {showModal && <Modal setShowModal={setShowModal} />}
    </AnimatePresence>
  );
}

function Modal({ setShowModal }) {
  const transition = { duration: 0.2 };
  const animation = {
    animate: "visible",
    initial: "hidden",
    exit: "hidden",
  };
  const variants = {
    backdrop: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    modal: {
      hidden: { scale: 0, x: "50vw", y: "50vh", transition },
      visible: { scale: 1, x: 0, y: 0, transition },
    },
  };
  const backdropAnimation = {
    variants: variants.backdrop,
    ...animation,
  };
  const modalAnimation = {
    variants: variants.modal,
    ...animation,
  };

  return (
    <motion.div {...backdropAnimation} className="backdrop">
      <motion.div {...modalAnimation} className="modal">
        <div className="modal__header">
          <div className="modal__title">Rules</div>
          <img src={rules} alt="rules" className="show-mobile" />
          <div onClick={() => setShowModal(false)} className="modal__close-btn">
            <img src={close} alt="close btn" />
          </div>
        </div>
        <img src={rules} alt="rules" className="hide-mobile" />
      </motion.div>
    </motion.div>
  );
}
