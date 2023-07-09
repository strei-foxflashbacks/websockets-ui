import WebSocket, { RawData } from 'ws';
import { DataToProcess } from '../types/DataToProcess';
import registerUser from './registerUser';
import { UserData } from '../types/UserData';

const messageController = async (data: RawData, ws: WebSocket) => {
  const stringifiedData = data.toString();
  const parsedDataToObject: DataToProcess = JSON.parse(stringifiedData);
  const messageType = parsedDataToObject.type;
  const sentData = parsedDataToObject.data;
  const requestId = parsedDataToObject.id;

  switch (messageType) {
    case 'reg':
      await registerUser(sentData as UserData, requestId, ws);
      break;
    default:
      break;
  }
};
export default messageController;
