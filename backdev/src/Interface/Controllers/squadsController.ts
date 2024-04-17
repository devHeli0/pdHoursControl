import {
  Controller,
  Get,
  Param,
  HttpStatus,
  Res,
  ParseIntPipe,
  Body,
  Post,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { FastifyReply } from 'fastify';
import { GetSquadDTO } from 'src/Application/Queries/DTOs/GetSquadDTO';
import { GetSquadQueryHandler } from 'src/Application/Queries/Handlers/GetSquadQueryHandler';
import { CreateSquadDTO } from '../../Application/Commands/DTOs/CreateSquadDTO';
import { CreateSquadCommand } from 'src/Application/Commands';

@Controller('squads')
export class SquadsController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}
  @Post('squad')
  async createSquad(
    @Body() createSquadDTO: CreateSquadDTO,
  ): Promise<HttpStatus> {
    await this.commandBus.execute(new CreateSquadCommand(createSquadDTO));
    return HttpStatus.CREATED;
  }
  @Get(':squadId')
  async getSquad(
    @Param('squadId', ParseIntPipe) squadId: GetSquadDTO['id'],
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
