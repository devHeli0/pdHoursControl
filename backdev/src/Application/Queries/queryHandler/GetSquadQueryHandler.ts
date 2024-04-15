import { GetSquadDTO } from '../DTOs/GetSquadDTO';

export class GetSquadQueryHandler {
  constructor(public readonly squadId: GetSquadDTO['id']) {}
}
