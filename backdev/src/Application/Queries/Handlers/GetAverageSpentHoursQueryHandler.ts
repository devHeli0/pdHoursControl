import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAverageSpentHoursQuery } from '../Queries/GetAverageSpentHoursQuery';
import { GetAverageSpentHoursUseCase } from '../UseCases/GetAverageSpentHoursUseCase';
import { GetAverageSpentHoursReplyDTO } from '../DTOs/Reply/GetAverageSpentHoursReplyDTO';

@QueryHandler(GetAverageSpentHoursQuery)
export class GetAverageSpentHoursQueryHandler
  implements
    IQueryHandler<GetAverageSpentHoursQuery, GetAverageSpentHoursReplyDTO>
{
  constructor(
    private readonly getAverageSpentHoursUseCase: GetAverageSpentHoursUseCase,
  ) {}

  async execute(
    query: GetAverageSpentHoursQuery,
  ): Promise<GetAverageSpentHoursReplyDTO> {
    return await this.getAverageSpentHoursUseCase.execute(query.data);
  }
}
