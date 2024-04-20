import { IQuery } from '@nestjs/cqrs';
import { GetSpentHoursDTO } from '../DTOs/Request/GetSpentHoursDTO';

export class GetEmployeeSpentHoursQuery implements IQuery {
  constructor(public readonly data: GetSpentHoursDTO) {}
}
