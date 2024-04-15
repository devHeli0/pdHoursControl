import { Inject, Injectable } from '@nestjs/common';
import { Squad } from '@prisma/client';
import { ISquadsRepository } from 'src/Domain/Repositories';
import { SquadsRepository } from 'src/Infrastructure/Repositories/SquadsRepository';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateSquadCommandHandler } from '../commandHandler/CreateSquadCommandHandler';

@Injectable()
@CommandHandler(CreateSquadCommandHandler)
export class CreateSquadUseCase
  implements ICommandHandler<CreateSquadCommandHandler>
{
  constructor(
    @Inject(SquadsRepository)
    private readonly squadsRepository: ISquadsRepository,
  ) {}

  async execute(command: CreateSquadCommandHandler): Promise<Squad | null> {
    const { name } = command;
    return this.squadsRepository.create(name);
  }
}
