import { Injectable, Inject } from '@nestjs/common';
import { ISquadsRepository } from 'src/Domain/Repositories';
import { SquadsRepository } from 'src/Infrastructure/Repositories/SquadsRepository';
import { GetAllDataDTO } from '../DTOs/Request/GetAllDataDTO';
import { GetSquadsReplyDTO } from '../DTOs/Reply/GetSquadsReplyDTO';

@Injectable()
export class GetSquadsUseCase {
  constructor(
    @Inject(SquadsRepository)
    private readonly squadsRepository: ISquadsRepository,
  ) {}

  async execute(query: GetAllDataDTO): Promise<GetSquadsReplyDTO> {
    return this.squadsRepository.getAllSquads(query);
  }
}
