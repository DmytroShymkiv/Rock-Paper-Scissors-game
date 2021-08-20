import paper from "../assets/images/icon-paper.svg";
import rock from "../assets/images/icon-rock.svg";
import scissors from "../assets/images/icon-scissors.svg";

export const selectors = [
  { img: paper, border: "hsl(230, 89%, 62%)" },
  { img: rock, border: "hsl(349, 71%, 52%)" },
  { img: scissors, border: "hsl(39, 89%, 49%" },
];

export const Turns = Object.freeze({
  PAPER: 0,
  ROCK: 1,
  SCISSORS: 2,
});

export const results = Object.freeze({
  WIN: 1,
  DRAW: 0,
  LOSE: -1,
});

export const stages = Object.freeze({
  INITIAL: 0,
  SHOW: 1,
  RESULTS: 2,
});
