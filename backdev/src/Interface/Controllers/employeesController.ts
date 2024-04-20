import {
  Controller,
  Post,
  Body,
  HttpStatus,
  Res,
  Get,
  Query,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateEmployeeDTO } from 'src/Application/Commands/DTOs/CreateEmployeeDTO';
import { FastifyReply } from 'fastify';
import { CreateEmployeeCommand } from 'src/Application/Commands/Commands/CreateEmployeeCommand';
import { GetEmployeesReplyDTO } from 'src/Application/Queries/DTOs/Reply/GetEmployeesReplyDTO';
import { GetAllDataDTO } from 'src/Application/Queries/DTOs/Request/GetAllDataDTO';
import { GetEmployeesQuery } from 'src/Application/Queries/Queries/GetEmployeesQuery';

@Controller('employees')
export class EmployeesController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('employee')
  async createEmployee(
    @Body() data: CreateEmployeeDTO,
    @Res() reply: FastifyReply,
  ): Promise<HttpStatus> {
    await this.commandBus.execute(new CreateEmployeeCommand(data));

    return reply.status(HttpStatus.CREATED).send({
      success: true,
    });
  }

  @Get()
  async getAllEmployees(
    @Query('empty') empty: GetAllDataDTO['empty'],
    @Res() reply: FastifyReply,
  ): Promise<GetEmployeesReplyDTO & HttpStatus> {
    const query = new GetEmployeesQuery(empty);
    const result = await this.queryBus.execute(query);
    return reply.status(HttpStatus.OK).send({
      success: true,
      data: result,
    });
  }
}
