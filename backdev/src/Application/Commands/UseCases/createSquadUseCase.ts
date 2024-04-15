import { Inject, Injectable } from '@nestjs/common';
import { Squad } from '@prisma/client';
import ISquadsRepository from 'src/Domain/Repositories/ISquadsRepository';
import { SquadsRepository } from 'src/Infrastructure/Repositories/SquadsRepository';
import { CreateSquadDTO } from '../DTOs/CreateSquadDTO';

@Injectable()
export class CreateSquadUseCase {
  constructor(
    @Inject(SquadsRepository)
    private readonly squadsRepository: ISquadsRepository,
  ) {}

  async execute(createSquadDto: CreateSquadDTO): Promise<Squad> {
    return await this.squadsRepository.create(createSquadDto.name);
  }
}
