import { IQuery } from '@nestjs/cqrs';
import { GetSquadByIdDTO } from '../DTOs/Request/GetSquadByIdDTO';

export class GetSquadByIdQuery implements IQuery {
  constructor(public readonly data: GetSquadByIdDTO) {}
}
