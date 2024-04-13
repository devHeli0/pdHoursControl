import { Report } from './Report';

class Employee {
  public readonly id?: number;

  public name: string;
  public estimatedHours: number;
  public squadId: number;
  public reports?: Report[];
  constructor(
    name: string,
    estimatedHours: number,
    squadId: number,
    reports: Report[],
    id?: number,
  ) {
    this.name = name;
    this.estimatedHours = estimatedHours;
    this.squadId = squadId;
    this.reports = reports;
    this.id = id;
  }

  static create({
    id,
    name,
    estimatedHours,
    squadId,
    reports,
  }): ICreateEmployeeDTO {
    return new Employee(id, name, estimatedHours, squadId, reports);
  }
}

export { Employee };
