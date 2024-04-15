import { PrismaModule } from 'src/Infrastructure/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { ReportsController } from 'src/Adapter/Controllers/reportsController';
import { CreateReportUseCase } from 'src/Application/Commands/UseCases/createReportUseCase';
import { ReportsRepository } from 'src/Infrastructure/Repositories/ReportsRepository';
import { CqrsModule } from '@nestjs/cqrs';
import { GetReportUseCase } from 'src/Application/Queries/UseCases/GetReportUseCase';

@Module({
  imports: [PrismaModule, CqrsModule],
  controllers: [ReportsController],
  providers: [ReportsRepository, CreateReportUseCase, GetReportUseCase],
})
export class ReportsModule {}
