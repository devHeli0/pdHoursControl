import { Controller, Get, Param, HttpStatus, Res } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { FastifyReply } from 'fastify';
import { GetSquadDTO } from 'src/Application/Queries/DTOs/GetSquadDTO';
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
}
