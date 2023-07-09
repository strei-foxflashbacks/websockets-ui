import { TypeOfData } from './TypeOfData';
import { TypeOfMessage } from './TypeOfMessage';

export type DataToProcess = {
  type: TypeOfMessage,
  data: TypeOfData,
  id: number,
};
