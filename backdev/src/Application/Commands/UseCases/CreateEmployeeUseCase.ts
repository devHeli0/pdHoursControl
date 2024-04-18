import { Inject, NotFoundException } from '@nestjs/common';
import { Employee } from 'src/Domain/Entities';
import {
  IEmployeesRepository,
  ISquadsRepository,
} from 'src/Domain/Repositories';
import { CreateEmployeeDTO } from '../DTOs/CreateEmployeeDTO';
import { EmployeesRepository } from 'src/Infrastructure/Repositories/EmployeesRepository';
import { SquadsRepository } from 'src/Infrastructure/Repositories/SquadsRepository';

export class CreateEmployeeUseCase {
  constructor(
    @Inject(EmployeesRepository)
    private readonly employeesRepository: IEmployeesRepository,
    @Inject(SquadsRepository)
    private readonly squadsRepository: ISquadsRepository,
  ) {}

  async execute(data: CreateEmployeeDTO): Promise<void> {
    const { estimatedHours, name, squadId } = data;

    const squadExists = await this.squadsRepository.findById(squadId);

    if (!squadExists) {
      throw new NotFoundException(`Squad with ID ${name} not found`);
    }

    const newEmployee = new Employee(name, estimatedHours, squadId);

    await this.employeesRepository.create(newEmployee);
  }
}
