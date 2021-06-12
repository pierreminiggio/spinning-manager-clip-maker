import Transition from "./Transition";

export default interface Move {
  offset: number;
  transition: Transition;
}
