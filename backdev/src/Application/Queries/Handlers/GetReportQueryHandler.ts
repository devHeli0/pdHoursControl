import { GetReportDTO } from '../DTOs/GetReportDTO';

export class GetReportQueryHandler {
  constructor(public readonly reportId: GetReportDTO['id']) {}
}
