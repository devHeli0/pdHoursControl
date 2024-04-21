import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';

import { GetSquadByIdQuery } from '../Queries/GetSquadByIdQuery';
import { GetSquadByIdReplyDTO } from '../DTOs/Reply/GetSquadByIdReplyDTO';
import { GetSquadByIdUseCase } from '../UseCases/GetSquadByIdUseCae';

@QueryHandler(GetSquadByIdQuery)
export class GetSquadByIdQueryHandler
  implements IQueryHandler<GetSquadByIdQuery>
{
  constructor(private readonly getSquadByIdUseCase: GetSquadByIdUseCase) {}

  async execute(query: GetSquadByIdQuery): Promise<GetSquadByIdReplyDTO> {
    return this.getSquadByIdUseCase.execute(query.data);
  }
}
