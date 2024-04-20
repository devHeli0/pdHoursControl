import { Inject, Injectable } from '@nestjs/common';
import { IReportsRepository } from 'src/Domain/Repositories';
import { GetSpentHoursDTO } from '../DTOs/Request/GetSpentHoursDTO';
import { ReportsRepository } from 'src/Infrastructure/Repositories/ReportsRepository';

@Injectable()
export class GetEmployeeSpentHoursUseCase {
  constructor(
    @Inject(ReportsRepository)
    private readonly reportsRepository: IReportsRepository,
  ) {}

  async execute(query: GetSpentHoursDTO): Promise<any> {
    return await this.reportsRepository.getEmployeeSpentHours(query);
  }
}
