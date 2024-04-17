import { GetSpentHoursDTO } from '../DTOs/GetSpentHoursDTO';
//implements IQuery
export class GetSpentHoursBySquadAndPeriodQuery {
  constructor(public readonly data: GetSpentHoursDTO) {}
}
