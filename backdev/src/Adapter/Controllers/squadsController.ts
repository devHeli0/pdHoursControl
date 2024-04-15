import { Controller, Post, Body, HttpStatus, Res } from '@nestjs/common';
import { Squad } from '@prisma/client';
import { CreateSquadUseCase } from 'src/Application/Commands/UseCases/createSquadUseCase';
import { FastifyReply } from 'fastify';
import { CreateSquadDTO } from 'src/Application/Commands/DTOs/CreateSquadDTO';

@Controller('squads')
export class SquadsController {
  constructor(private readonly createSquadUseCase: CreateSquadUseCase) {}

  @Post('squad')
  async createSquad(
    @Body() squadName: CreateSquadDTO,
    @Res() reply: FastifyReply,
  ): Promise<Squad> {
    const newSquad = await this.createSquadUseCase.execute(squadName);
    return reply.status(HttpStatus.CREATED).send(newSquad);
  }
}
