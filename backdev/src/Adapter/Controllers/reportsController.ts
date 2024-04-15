// reports.controller.ts
import {
  Controller,
  Post,
  Body,
  Param,
  Get,
  HttpStatus,
  Res,
  NotFoundException,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { FastifyReply } from 'fastify';
import { CreateReportCommandHandler } from 'src/Application/Commands/commandHandler/CreateReportCommandHandler';
import { CreateReportDTO } from 'src/Application/Commands/DTOs/CreateReportDTO';
import { GetReportQueryHandler } from 'src/Application/Queries/queryHandler/GetReportQueryHandler';

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
    const result = await this.commandBus.execute(
      new CreateReportCommandHandler(
        createReportDTO.description,
        createReportDTO.employeeId,
        createReportDTO.spentHours,
      ),
    );

    if ('success' in result && result.success === false) {
      return reply.status(HttpStatus.BAD_REQUEST).send({
        success: false,
        errors: result.errors,
      });
    }

    return reply.status(HttpStatus.CREATED).send({
      success: true,
      data: result,
    });
  }

  @Get(':reportId')
  async getReport(
    @Param('reportId') reportId: number,
    @Res() reply: FastifyReply,
  ): Promise<void> {
    const result = await this.queryBus.execute(
      new GetReportQueryHandler(reportId),
    );

    if (!result) {
      throw new NotFoundException(`Report with ID ${reportId} not found`);
    }

    return reply.status(HttpStatus.OK).send({
      success: true,
      data: result,
    });
  }
}
