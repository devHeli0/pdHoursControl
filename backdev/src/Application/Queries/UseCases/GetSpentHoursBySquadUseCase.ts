import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { IReportsRepository } from 'src/Domain/Repositories';
import { GetReportsBySquadAndPeriodQueryHandler } from '../queryHandler/GetReportQueryHandler';
import { ReportsRepository } from 'src/Infrastructure/Repositories/ReportsRepository';

@Injectable()
@QueryHandler(GetReportsBySquadAndPeriodQueryHandler)
export class GetSpentHoursBySquadUseCase
  implements IQueryHandler<GetReportsBySquadAndPeriodQueryHandler, number>
{
  constructor(
    @Inject(ReportsRepository)
    private readonly reportsRepository: IReportsRepository,
  ) {}

  async execute(
    query: GetReportsBySquadAndPeriodQueryHandler,
  ): Promise<number> {
    const { squadId, period } = query;
    const startDate = new Date(period.startDate);
    const endDate = new Date(period.endDate);
    const reports = await this.reportsRepository.findBySquadAndPeriod(squadId, {
      startDate,
      endDate,
    });

    if (!reports || reports.length === 0) {
      throw new NotFoundException(
        `No reports found for squad ID ${squadId} and period`,
      );
    }

    const totalSpentHours = reports.reduce(
      (total, report) => total + report.getSpentHours(),
      0,
    );

    return totalSpentHours;
  }
}
