import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  HttpStatus,
  Res,
  ParseIntPipe,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateEmployeeCommandHandler } from 'src/Application/Commands/Handlers/CreateEmployeeCommandHandler';
import { CreateEmployeeDTO } from 'src/Application/Commands/DTOs/CreateEmployeeDTO';
import { FastifyReply } from 'fastify';
import { GetSquadQueryHandler } from 'src/Application/Queries/Handlers/GetSquadQueryHandler';
import { GetEmployeeQueryHandler } from 'src/Application/Queries/Handlers/GetEmployeeQueryHandler';

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

  @Get(':employeeId')
  async getEmployee(
    @Param('employeeId', ParseIntPipe) employeeId: number,
    @Res() reply: FastifyReply,
  ): Promise<void> {
    const employee = await this.queryBus.execute(
      new GetEmployeeQueryHandler(employeeId),
    );

    if (!employee) {
      return reply.status(HttpStatus.NOT_FOUND).send({
        success: false,
        errors: [`Employee with ID ${employeeId} not found`],
      });
    }

    return reply.status(HttpStatus.OK).send({
      success: true,
      data: employee,
    });
  }
}
