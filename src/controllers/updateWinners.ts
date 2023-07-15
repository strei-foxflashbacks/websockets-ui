import updateWinnerData from '../models/updateWinnerData';
import { DataToProcess } from '../types/DataToProcess';

const updateWinners = async (name: string, win = false) => {
  const updatedWinners = await updateWinnerData(name, win);
  const responseForUpdate: DataToProcess = {
    type: 'update_winners',
    data: updatedWinners,
    id: 0,
  };
  return responseForUpdate;
};
export default updateWinners;
