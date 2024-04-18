import { ICommand } from '@nestjs/cqrs';
import { CreateReportDTO } from '../DTOs/CreateReportDTO';

export class CreateReportCommand implements ICommand {
  constructor(public readonly data: CreateReportDTO) {}
}
