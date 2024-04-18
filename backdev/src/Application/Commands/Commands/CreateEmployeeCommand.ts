import { ICommand } from '@nestjs/cqrs';
import { CreateEmployeeDTO } from '../DTOs/CreateEmployeeDTO';

export class CreateEmployeeCommand implements ICommand {
  constructor(public readonly data: CreateEmployeeDTO) {}
}
