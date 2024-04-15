import { GetSquadDTO } from 'src/Application/Queries/DTOs/GetSquadDTO';

class Employee {
  private readonly id?: number;
  private name: string;
  private estimatedHours: number;
  private squadId: GetSquadDTO['id'];
  private reports: Report[] = [];

  constructor(
    name: string,
    estimatedHours: number,
    squadId: GetSquadDTO['id'],
    id?: number,
  ) {
    this.validateEstimatedHours(estimatedHours);
    this.id = id;
    this.name = name;
    this.estimatedHours = estimatedHours;
    this.squadId = squadId;
  }

  private validateEstimatedHours(estimatedHours: number): void {
    if (estimatedHours < 1 || estimatedHours > 12) {
      throw new Error('Estimated hours must be between 1 and 12.');
    }
  }

  public getId(): number | undefined {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getEstimatedHours(): number {
    return this.estimatedHours;
  }

  public getSquadId(): number {
    return this.squadId;
  }

  public getReports(): Report[] {
    return [...this.reports];
  }

  public addReport(report: Report): void {
    this.reports.push(report);
  }
}

export { Employee };
