import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateSquadCommandHandler } from 'src/Application/Commands/Handlers/CreateSquadCommandHandler';
import { CreateSquadUseCase } from 'src/Application/Commands/UseCases/CreateSquadUseCase';
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
  ],
  exports: [
    // Repository
    SquadsRepository,
    //Command
    CreateSquadUseCase,
    CreateSquadCommandHandler,
  ],
})
export class SquadsModule {}
