import { Controller, Post, Body, HttpStatus, Res } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateEmployeeCommandHandler } from 'src/Application/Commands/commandHandler/CreateEmployeeCommandHandler';
import { CreateEmployeeDTO } from 'src/Application/Commands/DTOs/CreateEmployeeDTO';
import { FastifyReply } from 'fastify';
import { GetSquadQueryHandler } from 'src/Application/Queries/queryHandler/GetSquadQueryHandler';

@Controller('employees')
export class EmployeesController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('employee')
  async createEmployee(
    @Body() createEmployeeDTO: CreateEmployeeDTO,
    @Res() reply: FastifyReply,
  ): Promise<void> {
    const squad = await this.queryBus.execute(
      new GetSquadQueryHandler(createEmployeeDTO.squadId),
    );

    if (!squad) {
      return reply.status(HttpStatus.BAD_REQUEST).send({
        success: false,
        errors: [`Squad with ID ${createEmployeeDTO.squadId} does not exist`],
      });
    }
    const result = await this.commandBus.execute(
      new CreateEmployeeCommandHandler(
        createEmployeeDTO.name,
        createEmployeeDTO.estimatedHours,
        createEmployeeDTO.squadId,
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
}
