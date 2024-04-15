import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Report } from '@prisma/client';

import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetReportQueryHandler } from '../queryHandler/GetReportQueryHandler';
import { ReportsRepository } from 'src/Infrastructure/Repositories/ReportsRepository';
import { IReportsRepository } from 'src/Domain/Repositories';

@Injectable()
@QueryHandler(GetReportQueryHandler)
export class GetReportUseCase
  implements IQueryHandler<GetReportQueryHandler, Report>
{
  constructor(
    @Inject(ReportsRepository)
    private readonly reportsRepository: IReportsRepository,
  ) {}

  async execute(query: GetReportQueryHandler): Promise<Report | null> {
    const { reportId } = query;
    const report = await this.reportsRepository.findById(reportId);

    if (!report) {
      throw new NotFoundException(`Report with ID ${reportId} not found`);
    }

    return {
      id: report.getId(),
      description: report.getDescription(),
      employeeId: report.getEmployeeId(),
      spentHours: report.getSpentHours(),
      createdAt: report.getCreatedAt(),
    };
  }
}
