import { IQuery } from '@nestjs/cqrs';
import { GetSpentHoursDTO } from '../DTOs/GetSpentHoursDTO';
export class GetSpentHoursBySquadAndPeriodQuery implements IQuery {
  constructor(public readonly data: GetSpentHoursDTO) {}
}
