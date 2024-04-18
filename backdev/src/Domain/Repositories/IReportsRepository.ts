import { CreateReportDTO } from 'src/Application/Commands/DTOs/CreateReportDTO';
import { Report } from '../Entities';
import { GetSpentHoursDTO } from 'src/Application/Queries/DTOs/GetSpentHoursDTO';

export default interface IReportsRepository {
  create(data: CreateReportDTO): Promise<Report>;
  findById(id: number): Promise<Report | null>;
  getSpentHoursBySquadAndPeriod(query: GetSpentHoursDTO): Promise<any>;
}
