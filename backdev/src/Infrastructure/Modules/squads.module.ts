import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateSquadCommandHandler } from 'src/Application/Commands/Handlers/CreateSquadCommandHandler';
import { CreateSquadUseCase } from 'src/Application/Commands/UseCases/CreateSquadUseCase';
import { GetSquadByIdQueryHandler } from 'src/Application/Queries/Handlers/GetSquadByIdQueryHandler';
import { GetSquadsQueryHandler } from 'src/Application/Queries/Handlers/GetSquadsQueryHandler';
import { GetSquadByIdUseCase } from 'src/Application/Queries/UseCases/GetSquadByIdUseCae';
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
    GetSquadByIdUseCase,
    GetSquadByIdQueryHandler,
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
    GetSquadByIdUseCase,
    GetSquadByIdQueryHandler,
  ],
})
export class SquadsModule {}
