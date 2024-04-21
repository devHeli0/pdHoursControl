import { Injectable, Inject } from '@nestjs/common';
import { ISquadsRepository } from 'src/Domain/Repositories';
import { SquadsRepository } from 'src/Infrastructure/Repositories/SquadsRepository';
import { GetSquadByIdDTO } from '../DTOs/Request/GetSquadByIdDTO';
import { GetSquadByIdReplyDTO } from '../DTOs/Reply/GetSquadByIdReplyDTO';

@Injectable()
export class GetSquadByIdUseCase {
  constructor(
    @Inject(SquadsRepository)
    private readonly squadsRepository: ISquadsRepository,
  ) {}

  async execute(query: GetSquadByIdDTO): Promise<GetSquadByIdReplyDTO> {
    return this.squadsRepository.getSquadById(query);
  }
}
