import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IReportsRepository } from 'src/Domain/Repositories';
import { Report } from 'src/Domain/Entities';
import { GetSquadDTO } from 'src/Application/Queries/DTOs/GetSquadDTO';
import { GetPeriodDTO } from 'src/Application/Queries/DTOs/GetPeriodDTO';

@Injectable()
export class ReportsRepository implements IReportsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    description: string,
    employeeId: number,
    spentHours: number,
  ): Promise<Report> {
    const createdReport = await this.prisma.report.create({
      data: { description, employeeId, spentHours },
    });
    return Report.create(createdReport);
  }

  async findById(id: number): Promise<Report | null> {
    const report = await this.prisma.report.findUnique({
      where: { id },
    });
    if (!report) {
      throw new NotFoundException(`Report with ID ${id} not found`);
    }
    return Report.create(report);
  }

  async findBySquadAndPeriod(
    squadId: GetSquadDTO['id'],
    period: GetPeriodDTO,
  ): Promise<Report[]> {
    const reports = await this.prisma.report.findMany({
      where: {
        employee: {
          squadId,
        },
        createdAt: {
          gte: period.startDate,
          lte: period.endDate,
        },
      },
    });
    return reports.map(Report.create);
  }
}
