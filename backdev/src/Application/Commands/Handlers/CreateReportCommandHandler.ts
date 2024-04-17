export class CreateReportCommandHandler {
  constructor(
    public readonly description: string,
    public readonly employeeId: number,
    public readonly spentHours: number,
  ) {}
}
