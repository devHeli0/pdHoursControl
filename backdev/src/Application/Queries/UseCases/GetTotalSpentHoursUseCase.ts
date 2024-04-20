import { Inject, Injectable } from '@nestjs/common';
import { ReportsRepository } from 'src/Infrastructure/Repositories/ReportsRepository';
import { GetSpentHoursDTO } from '../DTOs/Request/GetSpentHoursDTO';

@Injectable()
export class GetTotalSpentHoursUseCase {
  constructor(
    @Inject(ReportsRepository)
    private readonly repository: ReportsRepository,
  ) {}

  async execute(query: GetSpentHoursDTO): Promise<number> {
    return this.repository.getTotalSpentHoursBySquadAndPeriod(query);
  }
}
