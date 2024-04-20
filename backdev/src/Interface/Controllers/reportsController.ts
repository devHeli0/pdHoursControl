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
import { GetAverageSpentHoursReplyDTO } from 'src/Application/Queries/DTOs/Reply/GetAverageSpentHoursReplyDTO';
import { GetReportsReplyDTO } from 'src/Application/Queries/DTOs/Reply/GetReportsReplyDTO';
import { GetAllDataDTO } from 'src/Application/Queries/DTOs/Request/GetAllDataDTO';
import { GetSpentHoursDTO } from 'src/Application/Queries/DTOs/Request/GetSpentHoursDTO';
import { GetAverageSpentHoursQuery } from 'src/Application/Queries/Queries/GetAverageSpentHoursQuery';
import { GetEmployeeSpentHoursQuery } from 'src/Application/Queries/Queries/GetEmployeeSpentHoursQuery';
import { GetReportsQuery } from 'src/Application/Queries/Queries/GetReportsQuery';
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

  @Get('employeeSpentHours')
  async getEmployeeSpentHours(
    @Query('squadId', ParseIntPipe) squadId: GetSpentHoursDTO['squadId'],
    @Query('startDate') startDate: GetSpentHoursDTO['period']['startDate'],
    @Query('endDate') endDate: GetSpentHoursDTO['period']['endDate'],
  ) {
    const query = new GetEmployeeSpentHoursQuery({
      squadId,
      period: { startDate, endDate },
    });
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

  @Get('averageSpentHoursBySquadAndPeriod')
  async getAverageHours(
    @Query('squadId', ParseIntPipe) squadId: GetSpentHoursDTO['squadId'],
    @Query('startDate') startDate: GetSpentHoursDTO['period']['startDate'],
    @Query('endDate') endDate: GetSpentHoursDTO['period']['endDate'],
  ): Promise<GetAverageSpentHoursReplyDTO> {
    const query = new GetAverageSpentHoursQuery({
      squadId,
      period: { startDate, endDate },
    });

    const result = await this.queryBus.execute(query);

    return result;
  }

  @Get()
  async getAllReports(
    @Query('empty') empty: GetAllDataDTO['empty'],
    @Res() reply: FastifyReply,
  ): Promise<GetReportsReplyDTO & HttpStatus> {
    const query = new GetReportsQuery(empty);
    const result = await this.queryBus.execute(query);
    return reply.status(HttpStatus.OK).send({
      success: true,
      data: result,
    });
  }
}
