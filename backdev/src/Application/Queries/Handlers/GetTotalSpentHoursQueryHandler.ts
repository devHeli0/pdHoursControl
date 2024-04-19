import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetTotalSpentHoursQuery } from '../Queries/GetTotalSpentHoursQuery';
import { GetTotalSpentHoursUseCase } from '../UseCases/GetTotalSpentHoursUseCase';

@QueryHandler(GetTotalSpentHoursQuery)
export class GetTotalSpentHoursQueryHandler
  implements IQueryHandler<GetTotalSpentHoursQuery>
{
  constructor(
    private readonly getTotalSpentHoursUseCase: GetTotalSpentHoursUseCase,
  ) {}

  async execute(command: GetTotalSpentHoursQuery): Promise<number> {
    return this.getTotalSpentHoursUseCase.execute(command.query);
  }
}
