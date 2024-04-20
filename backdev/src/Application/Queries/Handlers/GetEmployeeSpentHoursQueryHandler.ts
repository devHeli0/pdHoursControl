import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetEmployeeSpentHoursQuery } from '../Queries/GetEmployeeSpentHoursQuery';
import { GetEmployeeSpentHoursUseCase } from '../UseCases/GetEmployeeSpentHoursUseCase';

@QueryHandler(GetEmployeeSpentHoursQuery)
export class GetEmployeeSpentHoursQueryHandler
  implements IQueryHandler<GetEmployeeSpentHoursQuery>
{
  constructor(
    private readonly getEmployeeSpentHoursUseCase: GetEmployeeSpentHoursUseCase,
  ) {}

  async execute(query: GetEmployeeSpentHoursQuery): Promise<any> {
    return await this.getEmployeeSpentHoursUseCase.execute(query.data);
  }
}
