import { Inject, Injectable } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ReportsRepository } from 'src/Infrastructure/Repositories/ReportsRepository';
import { CreateReportCommandHandler } from '../Handlers/CreateReportCommandHandler';
import { IReportsRepository } from 'src/Domain/Repositories';

@CommandHandler(CreateReportCommandHandler)
@Injectable()
export class CreateReportUseCase
  implements ICommandHandler<CreateReportCommandHandler>
{
  constructor(
    @Inject(ReportsRepository)
    private readonly reportsRepository: IReportsRepository,
  ) {}

  async execute(command: CreateReportCommandHandler) {
    const { description, employeeId, spentHours } = command;
    return this.reportsRepository.create(description, employeeId, spentHours);
  }
}
