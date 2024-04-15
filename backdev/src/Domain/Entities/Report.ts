import { CreateReportDTO } from 'src/Application/Commands/DTOs/CreateReportDTO';
import { IReportsRepository } from '../Repositories';

class Report {
  private id: number;
  private description: string;
  private employeeId: number;
  private spentHours: number;
  private createdAt: Date;

  constructor(
    description: string,
    employeeId: number,
    spentHours: number,
    id?: number,
    createdAt?: Date,
  ) {
    this.id = id;
    this.description = description;
    this.employeeId = employeeId;
    this.spentHours = spentHours;
    this.createdAt = createdAt;
  }

  static create(reportData: CreateReportDTO): Report {
    return new Report(
      reportData.description,
      reportData.employeeId,
      reportData.spentHours,
    );
  }

  static findById(
    repository: IReportsRepository,
    id: number,
  ): Promise<Report | null> {
    return repository.findById(id);
  }
  getId(): number {
    return this.id;
  }

  getDescription(): string {
    return this.description;
  }

  getEmployeeId(): number {
    return this.employeeId;
  }

  getSpentHours(): number {
    return this.spentHours;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }
}

export { Report };
