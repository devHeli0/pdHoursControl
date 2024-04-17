import { IsInt, IsNotEmpty } from 'class-validator';
import { GetSquadDTO } from './GetSquadDTO';
import { GetPeriodDTO } from './GetPeriodDTO';

export class GetSpentHoursDTO {
  @IsInt()
  readonly squadId: GetSquadDTO['id'];

  @IsNotEmpty()
  readonly period: GetPeriodDTO;
}
