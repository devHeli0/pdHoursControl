import { CreateSquadDTO } from '../DTOs/CreateSquadDTO';

export default class CreateSquadCommand {
  constructor(public readonly data: CreateSquadDTO) {}
}
