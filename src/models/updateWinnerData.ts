import winners from '../database/winners';
import { WinnersData } from '../types/WinnersData';

const updateWinnerData = (name: string, win = false): Promise<WinnersData[]> => {
  return new Promise((resolve) => {
    const existingWinner = winners.find((winner) => winner.name === name);
    if (existingWinner && win === true) {
      existingWinner.wins++;
      resolve(winners);
    } else {
      const newWinner: WinnersData = {
        name: name,
        wins: win === false ? 0 : 1,
      };
      winners.push(newWinner);
      resolve(winners);
    }
  });
};
export default updateWinnerData;
