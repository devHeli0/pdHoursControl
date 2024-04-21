import { CreateReportDTO } from 'src/Application/Commands/DTOs/CreateReportDTO';
import { GetSpentHoursReplyDTO } from 'src/Application/Queries/DTOs/Reply/GetSpentHoursReplyDTO';

class Report {
  constructor(
    public description: string,
    public employeeId: number,
    public spentHours: number,
    public id?: number,
    public createdAt?: Date,
  ) {}

  static create(reportData: CreateReportDTO): Report {
    return new Report(
      reportData.description,
      reportData.employeeId,
      reportData.spentHours,
    );
  }

  static getEmployeeSpentHours(
    response: GetSpentHoursReplyDTO[],
  ): GetSpentHoursReplyDTO[] {
    return response.map((item) => ({
      employeeId: item.employeeId,
      spentHours: item.spentHours,
      employee: item.employee,
      description: item.description,
      createdAt: item.createdAt,
    }));
  }
}

export { Report };
