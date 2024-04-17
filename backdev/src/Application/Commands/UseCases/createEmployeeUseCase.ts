import { Inject, Injectable } from '@nestjs/common';
import { Employee } from 'src/Domain/Entities';
import { IEmployeesRepository } from 'src/Domain/Repositories';
import { CreateEmployeeDTO } from '../DTOs/CreateEmployeeDTO';
import { EmployeesRepository } from 'src/Infrastructure/Repositories/EmployeesRepository';
import { validate } from 'class-validator';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateEmployeeCommandHandler } from '../Handlers/CreateEmployeeCommandHandler';

@Injectable()
@CommandHandler(CreateEmployeeCommandHandler)
export class CreateEmployeeUseCase
  implements ICommandHandler<CreateEmployeeCommandHandler>
{
  constructor(
    @Inject(EmployeesRepository)
    private readonly employeesRepository: IEmployeesRepository,
  ) {}

  async execute(
    createEmployeeDTO: CreateEmployeeDTO,
  ): Promise<Employee | { success: false; errors: any }> {
    const errors = await validate(createEmployeeDTO);
    if (errors.length > 0) {
      return {
        success: false,
        errors: errors.map((error) => error.constraints),
      };
    }

    const { name, estimatedHours, squadId } = createEmployeeDTO;

    const newEmployee = new Employee(name, estimatedHours, squadId);

    const createdEmployee = await this.employeesRepository.create(newEmployee);

    return createdEmployee;
  }
}
