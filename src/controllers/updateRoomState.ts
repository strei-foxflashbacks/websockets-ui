import createRoom from '../models/createRoom';
import { DataToProcess } from '../types/DataToProcess';

const updateRoomState = async (username: string) => {
  const resolvedRooms = await createRoom(username);
  const roomsResponse: DataToProcess = {
    type: 'update_room',
    data: resolvedRooms,
    id: 0,
  };
  return roomsResponse;
};
export default updateRoomState;
