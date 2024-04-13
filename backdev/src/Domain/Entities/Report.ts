class Report {
  private id: number;
  private description: string;
  private employeeId: number;
  private spentHours: number;
  private createdAt: Date;

  constructor(
    id: number,
    description: string,
    employeeId: number,
    spentHours: number,
    createdAt: Date,
  ) {
    this.id = id;
    this.description = description;
    this.employeeId = employeeId;
    this.spentHours = spentHours;
    this.createdAt = createdAt;
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
