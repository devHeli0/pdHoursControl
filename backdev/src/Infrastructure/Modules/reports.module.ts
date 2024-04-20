import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { GetEmployeeSpentHoursQueryHandler } from 'src/Application/Queries/Handlers/GetEmployeeSpentHoursQueryHandler';
import { ReportsController } from 'src/Interface/Controllers/reportsController';
import { ReportsRepository } from '../Repositories/ReportsRepository';
import { PrismaModule } from '../prisma/prisma.module';
import { GetEmployeeSpentHoursUseCase } from 'src/Application/Queries/UseCases/GetEmployeeSpentHoursUseCase';
import { CreateReportUseCase } from 'src/Application/Commands/UseCases/CreateReportUseCase';
import { CreateReportCommandHandler } from 'src/Application/Commands/Handlers/CreateReportCommandHandler';
import { GetTotalSpentHoursUseCase } from 'src/Application/Queries/UseCases/GetTotalSpentHoursUseCase';
import { GetTotalSpentHoursQueryHandler } from 'src/Application/Queries/Handlers/GetTotalSpentHoursQueryHandler';
import { GetReportsQueryHandler } from 'src/Application/Queries/Handlers/GetReportsQueryHandler';
import { GetReportsUseCase } from 'src/Application/Queries/UseCases/GetReportsUseCase';

@Module({
  imports: [PrismaModule, CqrsModule],
  controllers: [ReportsController],
  providers: [
    // Repository
    ReportsRepository,
    // Command
    CreateReportUseCase,
    CreateReportCommandHandler,
    // Query
    GetEmployeeSpentHoursQueryHandler,
    GetEmployeeSpentHoursUseCase,
    GetTotalSpentHoursQueryHandler,
    GetTotalSpentHoursUseCase,
    GetReportsQueryHandler,
    GetReportsUseCase,
  ],
  exports: [
    // Repository
    ReportsRepository,
    // Command
    CreateReportUseCase,
    // Query
    GetEmployeeSpentHoursQueryHandler,
    GetEmployeeSpentHoursUseCase,
    GetTotalSpentHoursQueryHandler,
    GetTotalSpentHoursUseCase,
    GetReportsQueryHandler,
    GetReportsUseCase,
  ],
})
export class ReportsModule {}
