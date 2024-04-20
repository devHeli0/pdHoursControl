import { Injectable, Inject } from '@nestjs/common';
import { IEmployeesRepository } from 'src/Domain/Repositories';
import { EmployeesRepository } from 'src/Infrastructure/Repositories/EmployeesRepository';
import { GetAllDataDTO } from '../DTOs/Request/GetAllDataDTO';
import { GetEmployeesReplyDTO } from '../DTOs/Reply/GetEmployeesReplyDTO';

@Injectable()
export class GetEmployeesUseCase {
  constructor(
    @Inject(EmployeesRepository)
    private readonly employeesRepository: IEmployeesRepository,
  ) {}

  async execute(query: GetAllDataDTO): Promise<GetEmployeesReplyDTO> {
    const employees = await this.employeesRepository.getEmployees(query);
    return { list: employees };
  }
}
