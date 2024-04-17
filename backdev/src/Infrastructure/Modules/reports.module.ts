import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateReportUseCase } from 'src/Application/Commands/UseCases/createReportUseCase';
import { GetSpentHoursBySquadAndPeriodQueryHandler } from 'src/Application/Queries/Handlers/GetSpentHoursBySquadAndPeriodQueryHandler';
import { GetReportUseCase } from 'src/Application/Queries/UseCases/GetReportUseCase';
import { ReportsController } from 'src/Interface/Controllers/reportsController';
import { ReportsRepository } from '../Repositories/ReportsRepository';
import { PrismaModule } from '../prisma/prisma.module';
import { GetSpentHoursBySquadAndPeriodUseCase } from 'src/Application/Queries/UseCases/GetSpentHoursBySquadAndPeriodUseCase';

@Module({
  imports: [PrismaModule, CqrsModule],
  controllers: [ReportsController],
  providers: [
    // Repository
    ReportsRepository,
    // Command
    CreateReportUseCase,
    // Query
    GetReportUseCase,
    GetSpentHoursBySquadAndPeriodQueryHandler,
    GetSpentHoursBySquadAndPeriodUseCase,
  ],
  exports: [
    // Repository
    ReportsRepository,
    // Command
    CreateReportUseCase,
    // Query
    GetReportUseCase,
    GetSpentHoursBySquadAndPeriodQueryHandler,
    GetSpentHoursBySquadAndPeriodUseCase,
  ],
})
export class ReportsModule {}
