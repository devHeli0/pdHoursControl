import { Controller, HttpStatus, Res, Body, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { FastifyReply } from 'fastify';
import { CreateSquadDTO } from '../../Application/Commands/DTOs/CreateSquadDTO';
import { CreateSquadCommand } from 'src/Application/Commands';

@Controller('squads')
export class SquadsController {
  constructor(private readonly commandBus: CommandBus) {}
  @Post('squad')
  async createSquad(
    @Body() createSquadDTO: CreateSquadDTO,
    @Res() reply: FastifyReply,
  ): Promise<HttpStatus> {
    await this.commandBus.execute(new CreateSquadCommand(createSquadDTO));
    return reply.status(HttpStatus.CREATED).send({
      success: true,
    });
  }
}
