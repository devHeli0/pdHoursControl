import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';

import { GetReportsQuery } from '../Queries/GetReportsQuery';
import { GetReportsReplyDTO } from '../DTOs/Reply/GetReportsReplyDTO';
import { GetReportsUseCase } from '../UseCases/GetReportsUseCase';

@QueryHandler(GetReportsQuery)
export class GetReportsQueryHandler implements IQueryHandler<GetReportsQuery> {
  constructor(private readonly getAllReportsUseCase: GetReportsUseCase) {}

  async execute(query: GetReportsQuery): Promise<GetReportsReplyDTO> {
    return this.getAllReportsUseCase.execute(query.data);
  }
}
