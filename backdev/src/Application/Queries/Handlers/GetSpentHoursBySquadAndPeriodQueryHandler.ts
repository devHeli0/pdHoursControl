import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetSpentHoursBySquadAndPeriodQuery } from '../Queries/GetSpentHoursBySquadAndPeriodQuery';
import { GetSpentHoursBySquadAndPeriodUseCase } from '../UseCases/GetSpentHoursBySquadAndPeriodUseCase';

@QueryHandler(GetSpentHoursBySquadAndPeriodQuery)
export class GetSpentHoursBySquadAndPeriodQueryHandler
  implements IQueryHandler<GetSpentHoursBySquadAndPeriodQuery>
{
  constructor(
    private readonly getSpentHoursBySquadAndPeriodUseCase: GetSpentHoursBySquadAndPeriodUseCase,
  ) {}

  async execute(query: GetSpentHoursBySquadAndPeriodQuery): Promise<any> {
    return await this.getSpentHoursBySquadAndPeriodUseCase.execute(query.data);
  }
}
