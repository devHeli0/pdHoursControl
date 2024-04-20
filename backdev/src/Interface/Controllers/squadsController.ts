import {
  Controller,
  HttpStatus,
  Res,
  Body,
  Post,
  Get,
  Query,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { FastifyReply } from 'fastify';
import { CreateSquadDTO } from '../../Application/Commands/DTOs/CreateSquadDTO';
import { CreateSquadCommand } from 'src/Application/Commands';
import { GetAllDataDTO } from 'src/Application/Queries/DTOs/Request/GetAllDataDTO';
import { GetSquadsReplyDTO } from 'src/Application/Queries/DTOs/Reply/GetSquadsReplyDTO';
import { GetSquadsQuery } from 'src/Application/Queries/Queries/GetSquadsQuery';

@Controller('squads')
export class SquadsController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}
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
  @Get()
  async getAllSquads(
    @Query('empty') empty: GetAllDataDTO['empty'],
    @Res() reply: FastifyReply,
  ): Promise<GetSquadsReplyDTO & HttpStatus> {
    const query = new GetSquadsQuery(empty);
    const result = await this.queryBus.execute(query);
    return reply.status(HttpStatus.OK).send({
      success: true,
      data: result,
    });
  }
}
