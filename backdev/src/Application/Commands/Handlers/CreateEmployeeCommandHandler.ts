import { GetSquadDTO } from 'src/Application/Queries/DTOs/GetSquadDTO';

export class CreateEmployeeCommandHandler {
  constructor(
    public readonly name: string,
    public readonly estimatedHours: number,
    public readonly squadId: GetSquadDTO['id'],
  ) {}
}
