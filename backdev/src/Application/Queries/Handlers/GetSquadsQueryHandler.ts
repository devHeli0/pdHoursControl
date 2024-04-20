import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';

import { GetSquadsQuery } from '../Queries/GetSquadsQuery';
import { GetSquadsReplyDTO } from '../DTOs/Reply/GetSquadsReplyDTO';
import { GetSquadsUseCase } from '../UseCases/GetSquadsUseCase';

@QueryHandler(GetSquadsQuery)
export class GetSquadsQueryHandler implements IQueryHandler<GetSquadsQuery> {
  constructor(private readonly getAllSquadsUseCase: GetSquadsUseCase) {}

  async execute(query: GetSquadsQuery): Promise<GetSquadsReplyDTO> {
    return this.getAllSquadsUseCase.execute(query.data);
  }
}
