import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateSquadCommandHandler } from 'src/Application/Commands/Handlers/CreateSquadCommandHandler';
import { CreateSquadUseCase } from 'src/Application/Commands/UseCases/CreateSquadUseCase';
import { GetSquadsQueryHandler } from 'src/Application/Queries/Handlers/GetSquadsQueryHandler';
import { GetSquadsUseCase } from 'src/Application/Queries/UseCases/GetSquadsUseCase';

import { SquadsRepository } from 'src/Infrastructure/Repositories/SquadsRepository';
import { PrismaModule } from 'src/Infrastructure/prisma/prisma.module';
import { SquadsController } from 'src/Interface/Controllers/squadsController';

@Module({
  imports: [PrismaModule, CqrsModule],
  controllers: [SquadsController],
  providers: [
    // Repository
    SquadsRepository,
    //Command
    CreateSquadUseCase,
    CreateSquadCommandHandler,
    //Query,
    GetSquadsUseCase,
    GetSquadsQueryHandler,
  ],
  exports: [
    // Repository
    SquadsRepository,
    //Command
    CreateSquadUseCase,
    CreateSquadCommandHandler,
    //Query,
    GetSquadsUseCase,
    GetSquadsQueryHandler,
  ],
})
export class SquadsModule {}
