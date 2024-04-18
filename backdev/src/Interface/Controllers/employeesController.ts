import { Controller, Post, Body, HttpStatus, Res } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateEmployeeDTO } from 'src/Application/Commands/DTOs/CreateEmployeeDTO';
import { FastifyReply } from 'fastify';
import { CreateEmployeeCommand } from 'src/Application/Commands/Commands/CreateEmployeeCommand';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly commandBus: CommandBus) {}

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
}
