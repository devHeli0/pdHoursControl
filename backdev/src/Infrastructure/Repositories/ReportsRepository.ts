import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IReportsRepository } from 'src/Domain/Repositories';
import { Report } from 'src/Domain/Entities';

import { GetSpentHoursDTO } from 'src/Application/Queries/DTOs/GetSpentHoursDTO';

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

  async getSpentHoursBySquadAndPeriod(query: GetSpentHoursDTO): Promise<any> {
    const { squadId, period } = query;
    const { startDate, endDate } = period;

    try {
      const spentHours = await this.prisma.report.findMany({
        where: {
          employee: {
            squadId,
          },
          createdAt: {
            gte: startDate,
            lte: endDate,
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
