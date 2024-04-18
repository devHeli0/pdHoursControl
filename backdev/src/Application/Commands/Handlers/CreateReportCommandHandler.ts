import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateReportCommand } from '../Commands/CreateReportCommand';
import { CreateReportUseCase } from '../UseCases/CreateReportUseCase';

@CommandHandler(CreateReportCommand)
export class CreateReportCommandHandler
  implements ICommandHandler<CreateReportCommand>
{
  constructor(private readonly createReportUseCase: CreateReportUseCase) {}

  async execute(command: CreateReportCommand): Promise<void> {
    await this.createReportUseCase.execute(command.data);
  }
}
