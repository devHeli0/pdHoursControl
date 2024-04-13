import { Inject, Injectable } from '@nestjs/common';
import { Squad } from '@prisma/client';
import ISquadRepository from 'src/Domain/Repositories/ISquadRepository';
import { SquadRepository } from 'src/Infrastructure/Repositories/SquadRepository';

@Injectable()
export class CreateSquadUseCase {
  constructor(
    @Inject(SquadRepository) private readonly squadRepository: ISquadRepository,
  ) {}

  async execute(createSquadDto: ICreateSquadDTO): Promise<Squad> {
    return await this.squadRepository.create(createSquadDto.name);
  }
}
