import { ISquadsRepository } from 'src/Domain/Repositories';
import { CreateSquadDTO } from '../DTOs/CreateSquadDTO';
import { Inject } from '@nestjs/common';
import { SquadsRepository } from 'src/Infrastructure/Repositories/SquadsRepository';

export class CreateSquadUseCase {
  constructor(
    @Inject(SquadsRepository)
    private readonly squadsRepository: ISquadsRepository,
  ) {}

  async execute(data: CreateSquadDTO): Promise<void> {
    await this.squadsRepository.create(data);
  }
}
