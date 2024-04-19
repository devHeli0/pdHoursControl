import { GetEmployeeDTO } from './GetEmployeeDTO';
import { GetReportDTO } from './GetReportDTO';

export class GetSpentHoursReplyDTO {
  employeeId: GetEmployeeDTO['id'];
  spentHours: GetReportDTO['spentHours'];
}
