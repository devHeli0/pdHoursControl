import { IsNumber } from 'class-validator';
import { GetReportDTO } from '../Request/GetReportDTO';

export class GetAverageSpentHoursReplyDTO {
  @IsNumber()
  averageSpentHoursPerDay: GetReportDTO['spentHours'];
}
