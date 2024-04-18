import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { CreateSquadUseCase } from '../UseCases/CreateSquadUseCase';
import CreateSquadCommand from '../Commands/CreateSquadCommand';

@CommandHandler(CreateSquadCommand)
export class CreateSquadCommandHandler
  implements ICommandHandler<CreateSquadCommand>
{
  constructor(private readonly createSquadUseCase: CreateSquadUseCase) {}

  async execute(command: CreateSquadCommand): Promise<void> {
    await this.createSquadUseCase.execute(command.data);
  }
}
