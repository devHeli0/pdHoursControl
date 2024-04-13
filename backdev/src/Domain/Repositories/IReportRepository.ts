import { Report } from '../Entities';

export default interface IReportRepository {
  create(reportData: Report): Promise<Report>;
}
