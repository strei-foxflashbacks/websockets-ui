import { ShipsData } from './ShipsData';

export type AddShipsData = {
  gameId: number,
  ships: ShipsData[],
  indexPlayer: number,
};
