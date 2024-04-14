import { Inject, Injectable } from '@nestjs/common';
import { Squad } from '@prisma/client';
import ISquadsRepository from 'src/Domain/Repositories/ISquadsRepository';
import { SquadsRepository } from 'src/Infrastructure/Repositories/SquadsRepository';

@Injectable()
export class CreateSquadUseCase {
  constructor(
    @Inject(SquadsRepository)
    private readonly SquadsRepository: ISquadsRepository,
  ) {}

  async execute(createSquadDto: ICreateSquadDTO): Promise<Squad> {
    return await this.SquadsRepository.create(createSquadDto.name);
  }
}
