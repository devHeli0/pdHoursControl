import { GetPeriodDTO } from '../DTOs/GetPeriodDTO';
import { GetReportDTO } from '../DTOs/GetReportDTO';
import { GetSquadDTO } from '../DTOs/GetSquadDTO';

export class GetReportQueryHandler {
  constructor(public readonly reportId: GetReportDTO['id']) {}
}

export class GetReportsBySquadAndPeriodQueryHandler {
  constructor(
    public readonly squadId: GetSquadDTO['id'],
    public readonly period: GetPeriodDTO,
  ) {}
}
