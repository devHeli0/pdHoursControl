import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateEmployeeCommand } from '../Commands/CreateEmployeeCommand';
import { CreateEmployeeUseCase } from '../UseCases/CreateEmployeeUseCase';

@CommandHandler(CreateEmployeeCommand)
export class CreateEmployeeCommandHandler
  implements ICommandHandler<CreateEmployeeCommand>
{
  constructor(private readonly createEmployeeUseCase: CreateEmployeeUseCase) {}

  async execute(command: CreateEmployeeCommand): Promise<void> {
    await this.createEmployeeUseCase.execute(command.data);
  }
}
