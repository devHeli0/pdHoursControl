import { CreateReportDTO } from 'src/Application/Commands/DTOs/CreateReportDTO';
import { Report } from '../Entities';
import { GetAverageSpentHoursReplyDTO } from 'src/Application/Queries/DTOs/Reply/GetAverageSpentHoursReplyDTO';
import { GetReportDTO } from 'src/Application/Queries/DTOs/Request/GetReportDTO';
import { GetSpentHoursDTO } from 'src/Application/Queries/DTOs/Request/GetSpentHoursDTO';

export default interface IReportsRepository {
  create(data: CreateReportDTO): Promise<Report>;
  getEmployeeSpentHours(query: GetSpentHoursDTO): Promise<any>;
  getTotalSpentHoursBySquadAndPeriod(
    query: GetSpentHoursDTO,
  ): Promise<GetReportDTO['spentHours']>;
  getAverageSpentHoursBySquadAndPeriod(
    query: GetSpentHoursDTO,
  ): Promise<GetAverageSpentHoursReplyDTO>;
}
