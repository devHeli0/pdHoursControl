import { IReportsRepository } from 'src/Domain/Repositories';
import { GetSpentHoursDTO } from '../DTOs/GetSpentHoursDTO';

export class GetSpentHoursBySquadAndPeriodUseCase {
  constructor(private readonly reportsRepository: IReportsRepository) {}

  async execute(query: GetSpentHoursDTO): Promise<any> {
    return await this.reportsRepository.getSpentHoursBySquadAndPeriod(query);
  }
}
