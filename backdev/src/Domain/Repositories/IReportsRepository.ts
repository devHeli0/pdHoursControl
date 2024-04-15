import { GetPeriodDTO } from 'src/Application/Queries/DTOs/GetPeriodDTO';
import { GetSquadDTO } from 'src/Application/Queries/DTOs/GetSquadDTO';
import { Report } from '../Entities';

export default interface IReportsRepository {
  create(
    description: string,
    employeeId: number,
    spentHours: number,
  ): Promise<Report>;
  findById(id: number): Promise<Report | null>;
  findBySquadAndPeriod(
    squadId: GetSquadDTO['id'],
    period: GetPeriodDTO,
  ): Promise<Report[]>;
}
