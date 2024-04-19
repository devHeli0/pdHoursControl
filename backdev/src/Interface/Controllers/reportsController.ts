import {
  Controller,
  Post,
  Body,
  HttpStatus,
  Res,
  Query,
  Get,
  ParseIntPipe,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { FastifyReply } from 'fastify';
import { CreateReportCommand } from 'src/Application/Commands/Commands/CreateReportCommand';
import { CreateReportDTO } from 'src/Application/Commands/DTOs/CreateReportDTO';
import { GetSpentHoursDTO } from 'src/Application/Queries/DTOs/GetSpentHoursDTO';
import { GetSpentHoursBySquadAndPeriodQuery } from 'src/Application/Queries/Queries/GetSpentHoursBySquadAndPeriodQuery';
import { GetTotalSpentHoursQuery } from 'src/Application/Queries/Queries/GetTotalSpentHoursQuery';

@Controller('reports')
export class ReportsController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('report')
  async createReport(
    @Body() createReportDTO: CreateReportDTO,
    @Res() reply: FastifyReply,
  ): Promise<void> {
    await this.commandBus.execute(new CreateReportCommand(createReportDTO));

    return reply.status(HttpStatus.CREATED).send({
      success: true,
    });
  }

  @Post('employeeSpentHoursBySquadAndPeriod')
  async getSpentHoursBySquadAndPeriod(@Body() data: GetSpentHoursDTO) {
    const query = new GetSpentHoursBySquadAndPeriodQuery(data);
    const result = await this.queryBus.execute(query);
    return result;
  }

  @Get('totalSpentHoursBySquadAndPeriod')
  async getTotalSpentHours(
    @Query('squadId', ParseIntPipe) squadId: GetSpentHoursDTO['squadId'],
    @Query('startDate') startDate: GetSpentHoursDTO['period']['startDate'],
    @Query('endDate') endDate: GetSpentHoursDTO['period']['endDate'],
  ): Promise<void> {
    const query = new GetTotalSpentHoursQuery({
      squadId,
      period: { startDate, endDate },
    });
    const result = await this.queryBus.execute(query);

    return result;
  }
}
