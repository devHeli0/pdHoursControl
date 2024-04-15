import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { IReportsRepository } from 'src/Domain/Repositories';
import { Report } from 'src/Domain/Entities';

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
}
