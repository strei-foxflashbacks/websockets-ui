import rooms from '../database/rooms';
import users from '../database/users';
import { RoomData } from '../types/RoomData';
import { UserData } from '../types/UserData';

const createRoom = (username: string): Promise<RoomData[]> => {
  return new Promise((resolve) => {
    const newUser = users.find((user) => user.name === username) as UserData;
    const newRoom: RoomData = {
      roomId: rooms.length,
      roomUsers: [],
    };
    const { name, index } = newUser;
    newRoom.roomUsers.push({ name, index });
    rooms.push(newRoom);
    resolve(rooms);
  });
};
export default createRoom;
