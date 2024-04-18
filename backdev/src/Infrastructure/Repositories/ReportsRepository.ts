import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IReportsRepository } from 'src/Domain/Repositories';
import { Report } from 'src/Domain/Entities';
import { GetSpentHoursDTO } from 'src/Application/Queries/DTOs/GetSpentHoursDTO';
import { CreateReportDTO } from 'src/Application/Commands/DTOs/CreateReportDTO';

@Injectable()
export class ReportsRepository implements IReportsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateReportDTO): Promise<Report> {
    const { description, employeeId, spentHours } = data;

    const createdReport = await this.prisma.report.create({
      data: { description, employeeId, spentHours },
    });

    // Convert the Prisma response to a Squad domain entity
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

  async getSpentHoursBySquadAndPeriod(query: GetSpentHoursDTO): Promise<any> {
    const { squadId, period } = query;
    const { startDate, endDate } = period;
    const validStartDate = new Date(startDate).toISOString();
    const validEndDate = new Date(endDate).toISOString();
    try {
      const spentHours = await this.prisma.report.findMany({
        where: {
          employee: {
            squadId,
          },
          createdAt: {
            gte: validStartDate,
            lte: validEndDate,
          },
        },
        select: {
          employeeId: true,
          spentHours: true,
        },
      });

      return spentHours;
    } catch (error) {
      throw new Error(`Failed to fetch spent hours: ${error.message}`);
    }
  }
}
