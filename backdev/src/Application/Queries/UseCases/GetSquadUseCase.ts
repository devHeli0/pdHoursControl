import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Squad } from '@prisma/client';

import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetSquadQueryHandler } from '../Handlers/GetSquadQueryHandler';
import { SquadsRepository } from 'src/Infrastructure/Repositories/SquadsRepository';

@Injectable()
@QueryHandler(GetSquadQueryHandler)
export class GetSquadUseCase
  implements IQueryHandler<GetSquadQueryHandler, Squad>
{
  constructor(
    @Inject(SquadsRepository)
    private readonly squadsRepository: SquadsRepository, // Inject the concrete implementation
  ) {}

  async execute(query: GetSquadQueryHandler): Promise<Squad | null> {
    const { squadId } = query;
    const squad = await this.squadsRepository.findById(squadId);
    if (!squad) {
      throw new NotFoundException(`Squad with ID ${squadId} not found`);
    }
    return squad;
  }
}
