import { IQuery } from '@nestjs/cqrs';
import { GetSpentHoursDTO } from '../DTOs/GetSpentHoursDTO';

export class GetTotalSpentHoursQuery implements IQuery {
  constructor(public readonly query: GetSpentHoursDTO) {}
}
