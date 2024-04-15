export class CreateEmployeeCommandHandler {
  constructor(
    public readonly name: string,
    public readonly estimatedHours: number,
    public readonly squadId: number,
  ) {}
}
