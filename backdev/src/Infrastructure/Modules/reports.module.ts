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
import { GetAverageSpentHoursQueryHandler } from 'src/Application/Queries/Handlers/GetAverageSpentHoursQueryHandler';
import { GetAverageSpentHoursUseCase } from 'src/Application/Queries/UseCases/GetAverageSpentHoursUseCase';

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
    GetTotalSpentHoursQueryHandler,
    GetAverageSpentHoursQueryHandler,
    GetAverageSpentHoursUseCase,
    GetTotalSpentHoursUseCase,
    GetEmployeeSpentHoursUseCase,
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
  ],
})
export class ReportsModule {}
