import { Report } from '../Entities';
import { GetSpentHoursDTO } from 'src/Application/Queries/DTOs/GetSpentHoursDTO';

export default interface IReportsRepository {
  create(
    description: string,
    employeeId: number,
    spentHours: number,
  ): Promise<Report>;
  findById(id: number): Promise<Report | null>;
  getSpentHoursBySquadAndPeriod(query: GetSpentHoursDTO): Promise<any>;
}
