import { Report } from '../Entities';

export default interface IReportsRepository {
  create(
    description: string,
    employeeId: number,
    spentHours: number,
  ): Promise<Report>;
  findById(id: number): Promise<Report | null>;
}
