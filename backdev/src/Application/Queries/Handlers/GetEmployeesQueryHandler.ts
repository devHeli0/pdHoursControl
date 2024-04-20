import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';

import { GetEmployeesQuery } from '../Queries/GetEmployeesQuery';
import { GetEmployeesReplyDTO } from '../DTOs/Reply/GetEmployeesReplyDTO';
import { GetEmployeesUseCase } from '../UseCases/GetEmployeesUseCase';

@QueryHandler(GetEmployeesQuery)
export class GetEmployeesQueryHandler
  implements IQueryHandler<GetEmployeesQuery>
{
  constructor(private readonly getEmployeesUseCase: GetEmployeesUseCase) {}

  async execute(query: GetEmployeesQuery): Promise<GetEmployeesReplyDTO> {
    return this.getEmployeesUseCase.execute(query.data);
  }
}
