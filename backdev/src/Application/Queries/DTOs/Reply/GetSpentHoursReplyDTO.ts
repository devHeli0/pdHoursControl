import { GetEmployeeDTO } from '../Request/GetEmployeeDTO';
import { GetReportDTO } from '../Request/GetReportDTO';

export class GetSpentHoursReplyDTO {
  employeeId: GetEmployeeDTO['id'];
  spentHours: GetReportDTO['spentHours'];
  employee: GetEmployeeDTO;
  description: GetReportDTO['description'];
  createdAt: GetReportDTO['createdAt'];
}
