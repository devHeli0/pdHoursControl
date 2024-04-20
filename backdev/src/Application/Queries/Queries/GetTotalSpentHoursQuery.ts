import { IQuery } from '@nestjs/cqrs';
import { GetSpentHoursDTO } from '../DTOs/Request/GetSpentHoursDTO';

export class GetTotalSpentHoursQuery implements IQuery {
  constructor(public readonly query: GetSpentHoursDTO) {}
}
