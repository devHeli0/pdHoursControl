import { ICommand } from '@nestjs/cqrs';
import { CreateSquadDTO } from '../DTOs/CreateSquadDTO';

export default class CreateSquadCommand implements ICommand {
  constructor(public readonly data: CreateSquadDTO) {}
}
