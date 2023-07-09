import { UserData } from './UserData';

export type UpdateRoomData = {
  roomId: number,
  roomUsers: UserData[],
};
