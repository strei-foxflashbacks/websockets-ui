import WebSocket from 'ws';
import { UserData } from '../types/UserData';
import registerOrLogin from '../models/registerOrLogin';
import { DataToProcess } from '../types/DataToProcess';
import updateWinners from './updateWinners';
import updateRoomState from './updateRoomState';

const registerUser = async (sentData: UserData, requestId: number, ws: WebSocket) => {
  try {
    const username = sentData.name;
    const password = sentData.password;
    const resolvedUser = await registerOrLogin(username, password as string);
    const userResponse: DataToProcess = {
      type: 'reg',
      data: resolvedUser as UserData,
      id: requestId,
    };
    const roomsUpdateResonse = await updateRoomState(resolvedUser.name);
    const winnersUpdateResonse = await updateWinners(resolvedUser.name);
    ws.send(JSON.stringify(userResponse));
    ws.send(JSON.stringify(roomsUpdateResonse));
    ws.send(JSON.stringify(winnersUpdateResonse));
  } catch {
    const errorMessage = {
      message: 'Registration failed',
    };
    ws.send(JSON.stringify(errorMessage));
  }
};
export default registerUser;
