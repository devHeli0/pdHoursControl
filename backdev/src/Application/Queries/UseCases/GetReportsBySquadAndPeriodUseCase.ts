import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Report } from '@prisma/client'; // Assuming this is the correct import for the Report entity
import { ReportsRepository } from 'src/Infrastructure/Repositories/ReportsRepository';
import { GetReportsBySquadAndPeriodQueryHandler } from '../queryHandler/GetReportQueryHandler';
import { IReportsRepository } from 'src/Domain/Repositories';

@Injectable()
@QueryHandler(GetReportsBySquadAndPeriodQueryHandler)
export class GetReportsBySquadAndPeriodUseCase
  implements IQueryHandler<GetReportsBySquadAndPeriodQueryHandler, Report[]>
{
  constructor(
    @Inject(ReportsRepository)
    private readonly reportsRepository: IReportsRepository,
  ) {}

  async execute(
    query: GetReportsBySquadAndPeriodQueryHandler,
  ): Promise<Report[]> {
    const { squadId, period } = query;
    const reports = await this.reportsRepository.findBySquadAndPeriod(
      squadId,
      period,
    );

    if (!reports || reports.length === 0) {
      throw new NotFoundException(
        `No reports found for squad ID ${squadId} and period`,
      );
    }

    return reports.map((report) => ({
      id: report.getId(),
      description: report.getDescription(),
      employeeId: report.getEmployeeId(),
      spentHours: report.getSpentHours(),
      createdAt: report.getCreatedAt(),
    }));
  }
}
