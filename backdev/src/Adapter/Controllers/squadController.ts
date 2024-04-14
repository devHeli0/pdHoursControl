import { Controller, Post, Body } from '@nestjs/common';
import { Squad } from '@prisma/client';
import { CreateSquadUseCase } from 'src/Application/Commands/UseCases/createSquadUseCase';

@Controller('squad')
export class SquadController {
  constructor(private readonly createSquadUseCase: CreateSquadUseCase) {}

  @Post()
  async createSquad(@Body() createSquadDto: ICreateSquadDTO): Promise<Squad> {
    return await this.createSquadUseCase.execute(createSquadDto);
  }
}
