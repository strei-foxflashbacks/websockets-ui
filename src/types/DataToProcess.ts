import { TypeOfMessage } from './TypeOfMessage';
import { AddUserTORoomData } from './AddUserToRoomData';
import { CreateGameData } from './CreateGameData';
import { UserData } from './UserData';
import { WinnersData } from './WinnersData';
import { UpdateRoomData } from './UpdateRoomData';
import { AddShipsData } from './AddShipsData';
import { StartGameData } from './StartGameData';
import { AttackData } from './AttackData';
import { AttackFeedbackData } from './AttackFeedbackData';
import { RandomAttackData } from './RandomAttackData';
import { CurrentTurnData } from './CurrentTurnData';
import { FinishGameData } from './FinishGameData';

export type DataToProcess = {
  type: TypeOfMessage,
  data: ''
  | UserData
  | WinnersData[]
  | AddUserTORoomData
  | CreateGameData
  | UpdateRoomData[]
  | AddShipsData
  | StartGameData
  | AttackData
  | AttackFeedbackData
  | RandomAttackData
  | CurrentTurnData
  | FinishGameData;
  id: number,
};
