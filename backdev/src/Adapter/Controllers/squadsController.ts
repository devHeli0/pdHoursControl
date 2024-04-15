import {
  Controller,
  Get,
  Param,
  HttpStatus,
  Res,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { FastifyReply } from 'fastify';
import { GetPeriodDTO } from 'src/Application/Queries/DTOs/GetPeriodDTO';
import { GetSquadDTO } from 'src/Application/Queries/DTOs/GetSquadDTO';
import { GetReportsBySquadAndPeriodQueryHandler } from 'src/Application/Queries/queryHandler/GetReportQueryHandler';
import { GetSquadQueryHandler } from 'src/Application/Queries/queryHandler/GetSquadQueryHandler';

@Controller('squads')
export class SquadsController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get(':squadId')
  async getSquad(
    @Param('squadId') squadId: GetSquadDTO['id'],
    @Res() reply: FastifyReply,
  ): Promise<void> {
    const result = await this.queryBus.execute(
      new GetSquadQueryHandler(Number(squadId)),
    );

    if (!result) {
      return reply.status(HttpStatus.NOT_FOUND).send({
        success: false,
        message: result.errors,
      });
    }

    return reply.status(HttpStatus.OK).send({
      success: true,
      data: result,
    });
  }
  @Get(':squadId/reports')
  async getReportsBySquadAndPeriod(
    @Param('squadId') squadId: GetSquadDTO['id'],
    @Query() period: GetPeriodDTO,
  ) {
    // Step 1: Fetch squad
    const squad = await this.queryBus.execute(
      new GetSquadQueryHandler(squadId),
    );

    if (!squad) {
      throw new NotFoundException(`Squad with ID ${squadId} not found`);
    }

    // Step 2: Fetch all employees in the squad
    const employees = squad.employees;

    // Step 3: For each employee, fetch reports within the specified period
    const results = await Promise.all(
      employees.map(async (employee) => {
        const reports = await this.queryBus.execute(
          new GetReportsBySquadAndPeriodQueryHandler(employee.id, period),
        );

        // Step 4: Calculate total spent hours for each employee
        const totalSpentHours = reports.reduce(
          (total, report) => total + report.spentHours,
          0,
        );

        return {
          employeeId: employee.id,
          employeeName: employee.name,
          totalSpentHours,
        };
      }),
    );

    // Step 5: Return the results
    return results;
  }
}
