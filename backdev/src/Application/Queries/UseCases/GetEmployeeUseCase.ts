import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { EmployeesRepository } from 'src/Infrastructure/Repositories/EmployeesRepository';
import { Employee } from 'src/Domain/Entities';
import { GetEmployeeQueryHandler } from '../queryHandler/GetEmployeeQueryHandler';
import { IEmployeesRepository } from 'src/Domain/Repositories';
import { Inject } from '@nestjs/common';

@QueryHandler(GetEmployeeQueryHandler)
export class GetEmployeeUseCase
  implements IQueryHandler<GetEmployeeQueryHandler, Employee>
{
  constructor(
    @Inject(EmployeesRepository)
    private readonly employeesRepository: IEmployeesRepository,
  ) {}

  async execute(query: GetEmployeeQueryHandler): Promise<Employee | null> {
    const { employeeId } = query;
    return this.employeesRepository.findById(employeeId);
  }
}
