import { IsInt, IsNotEmpty } from 'class-validator';
import { GetSquadDTO } from './GetSquadDTO';
import { GetPeriodDTO } from './GetPeriodDTO';
import { Type } from 'class-transformer';

export class GetSpentHoursDTO {
  @IsInt()
  readonly squadId: GetSquadDTO['id'];

  @IsNotEmpty()
  @Type(() => GetPeriodDTO)
  readonly period: GetPeriodDTO;
}
