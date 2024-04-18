import { Controller, Post, Body, HttpStatus, Res } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { FastifyReply } from 'fastify';
import { CreateReportCommand } from 'src/Application/Commands/Commands/CreateReportCommand';
import { CreateReportDTO } from 'src/Application/Commands/DTOs/CreateReportDTO';
import { GetSpentHoursDTO } from 'src/Application/Queries/DTOs/GetSpentHoursDTO';

import { GetSpentHoursBySquadAndPeriodQuery } from 'src/Application/Queries/Queries/GetSpentHoursBySquadAndPeriodQuery';

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

  @Post('squad')
  async getSpentHoursBySquadAndPeriod(@Body() data: GetSpentHoursDTO) {
    const query = new GetSpentHoursBySquadAndPeriodQuery(data);
    const result = await this.queryBus.execute(query);
    return result;
  }
}
