import { ShipsData } from './ShipsData';

export type StartGameData = {
  ships: ShipsData[],
  currentPlayerIndex: number,
};
