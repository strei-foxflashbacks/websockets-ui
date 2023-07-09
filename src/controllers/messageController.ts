import { RawData } from 'ws';
import { DataToProcess } from '../types/DataToProcess';

const messageController = (data: RawData) => {
  const stringifiedData = data.toString();
  const parsedDataToObject: DataToProcess = JSON.parse(stringifiedData);
  const messageType = parsedDataToObject.type;

  switch (messageType) {
    case 'reg':
      console.log('reg message');
      break;
    default:
      break;
  }
};
export default messageController;
