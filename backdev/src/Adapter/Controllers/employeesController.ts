import { Controller, Post, Body, HttpStatus, Res } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateEmployeeCommandHandler } from 'src/Application/Commands/commandHandler/CreateEmployeeCommandHandler';
import { CreateEmployeeDTO } from 'src/Application/Commands/DTOs/CreateEmployeeDTO';
import { FastifyReply } from 'fastify';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post('employee')
  async createEmployee(
    @Body() createEmployeeDTO: CreateEmployeeDTO,
    @Res() reply: FastifyReply,
  ): Promise<void> {
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
