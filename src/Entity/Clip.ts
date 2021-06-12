import Moves from "./Moves";

export default interface Clip {
  video: string;
  from: number;
  durationInFrames: number;
  moves: Moves
}
