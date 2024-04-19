import { CreateReportDTO } from 'src/Application/Commands/DTOs/CreateReportDTO';
import { Report } from '../Entities';
import { GetSpentHoursDTO } from 'src/Application/Queries/DTOs/GetSpentHoursDTO';
import { GetReportDTO } from 'src/Application/Queries/DTOs/GetReportDTO';

export default interface IReportsRepository {
  create(data: CreateReportDTO): Promise<Report>;
  getSpentHoursBySquadAndPeriod(query: GetSpentHoursDTO): Promise<any>;
  getTotalSpentHoursBySquadAndPeriod(
    query: GetSpentHoursDTO,
  ): Promise<GetReportDTO['spentHours']>;
}
