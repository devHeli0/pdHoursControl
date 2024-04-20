import { Inject, Injectable } from '@nestjs/common';
import { IReportsRepository } from 'src/Domain/Repositories';
import { GetSpentHoursDTO } from '../DTOs/Request/GetSpentHoursDTO';
import { ReportsRepository } from 'src/Infrastructure/Repositories/ReportsRepository';
import { GetAverageSpentHoursReplyDTO } from '../DTOs/Reply/GetAverageSpentHoursReplyDTO';

@Injectable()
export class GetAverageSpentHoursUseCase {
  constructor(
    @Inject(ReportsRepository)
    private readonly reportsRepository: IReportsRepository,
  ) {}

  async execute(
    query: GetSpentHoursDTO,
  ): Promise<GetAverageSpentHoursReplyDTO> {
    return await this.reportsRepository.getAverageSpentHoursBySquadAndPeriod(
      query,
    );
  }
}
