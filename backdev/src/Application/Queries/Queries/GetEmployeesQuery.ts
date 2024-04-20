import { IQuery } from '@nestjs/cqrs';
import { GetAllDataDTO } from '../DTOs/Request/GetAllDataDTO';

export class GetEmployeesQuery implements IQuery {
  constructor(public readonly data: GetAllDataDTO) {}
}
