export const WOOL = "wool"
export const LUMBER = "lumber"
export const ORE = "ore"
export const BRICK = "brick"
export const GRAIN = "grain"
export const NONE = "desert"

export type Resource =
  | typeof WOOL
  | typeof LUMBER
  | typeof ORE
  | typeof BRICK
  | typeof GRAIN
  | typeof NONE;
