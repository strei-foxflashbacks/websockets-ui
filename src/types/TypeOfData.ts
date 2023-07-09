import { AddUserTORoomData } from './AddUserToRoomData';
import { CreateGameData } from './CreateGameData';
import { UserData } from './UserData';
import { UpdateWinnersData } from './UpdateWinnersData';
import { UpdateRoomData } from './UpdateRoomData';
import { AddShipsData } from './AddShipsData';
import { StartGameData } from './StartGameData';
import { AttackData } from './AttackData';
import { AttackFeedbackData } from './AttackFeedbackData';
import { RandomAttackData } from './RandomAttackData';
import { CurrentTurnData } from './CurrentTurnData';
import { FinishGameData } from './FinishGameData';

export type TypeOfData =
''
| UserData
| UpdateWinnersData[]
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
