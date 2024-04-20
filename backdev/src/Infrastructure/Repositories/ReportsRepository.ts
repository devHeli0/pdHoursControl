import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IReportsRepository } from 'src/Domain/Repositories';
import { Report } from 'src/Domain/Entities';
import { CreateReportDTO } from 'src/Application/Commands/DTOs/CreateReportDTO';
import { GetAverageSpentHoursReplyDTO } from 'src/Application/Queries/DTOs/Reply/GetAverageSpentHoursReplyDTO';
import { GetSpentHoursReplyDTO } from 'src/Application/Queries/DTOs/Reply/GetSpentHoursReplyDTO';
import { GetReportDTO } from 'src/Application/Queries/DTOs/Request/GetReportDTO';
import { GetSpentHoursDTO } from 'src/Application/Queries/DTOs/Request/GetSpentHoursDTO';

@Injectable()
export class ReportsRepository implements IReportsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateReportDTO): Promise<Report> {
    const { description, employeeId, spentHours } = data;

    const createdReport = await this.prisma.report.create({
      data: { description, employeeId, spentHours },
    });

    // Convert the Prisma response to a Report domain entity
    return Report.create(createdReport);
  }

  async getEmployeeSpentHours(
    query: GetSpentHoursDTO,
  ): Promise<GetSpentHoursReplyDTO[]> {
    const { squadId, period } = query;
    const { startDate, endDate } = period;
    const validStartDate = new Date(startDate).toISOString();
    const validEndDate = new Date(endDate).toISOString();

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

    if (!spentHours) {
      throw new Error(`Failed to fetch spent hours: ${spentHours}`);
    }
    return Report.getEmployeeSpentHours(spentHours);
  }

  async getTotalSpentHoursBySquadAndPeriod(
    query: GetSpentHoursDTO,
  ): Promise<GetReportDTO['spentHours']> {
    const { squadId, period } = query;
    const { startDate, endDate } = period;
    const validStartDate = new Date(startDate).toISOString();
    const validEndDate = new Date(endDate).toISOString();

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
        spentHours: true,
      },
    });

    if (!spentHours) {
      return 0;
    }
    return spentHours.reduce((total, entry) => total + entry.spentHours, 0);
  }

  async getAverageSpentHoursBySquadAndPeriod(
    query: GetSpentHoursDTO,
  ): Promise<GetAverageSpentHoursReplyDTO> {
    const { squadId, period } = query;
    const { startDate, endDate } = period;
    const validStartDate = new Date(startDate).toISOString();
    const validEndDate = new Date(endDate).toISOString();

    const reports = await this.prisma.report.findMany({
      where: {
        employee: {
          squadId,
        },
        AND: {
          createdAt: {
            gte: validStartDate,
            lte: validEndDate,
          },
        },
      },
      select: {
        spentHours: true,
      },
    });

    const totalHours = reports.reduce(
      (acc, report) => acc + report.spentHours,
      0,
    );
    const totalDays = Math.ceil(
      (new Date(endDate).getTime() - new Date(startDate).getTime()) /
        (1000 * 60 * 60 * 24),
    );

    return {
      averageSpentHoursPerDay: totalHours / totalDays,
    };
  }

  // async getAllReports(): Promise<GetAllDataReplyDTO> {
  //   const reports = await this.prisma.report.findMany();
  //   const reportList: Report[] = reports.map((report) => {
  //     return {
  //       id: report.id,
  //       description: report.description,
  //       employeeId: report.employeeId,
  //       spentHours: report.spentHours,
  //       createdAt: report.createdAt,
  //     };
  //   });
  //   return { list: reportList };
  // }
}
