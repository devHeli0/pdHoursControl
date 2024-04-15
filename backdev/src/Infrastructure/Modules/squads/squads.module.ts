import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { SquadsController } from 'src/Adapter/Controllers/squadsController';
import { CreateSquadUseCase } from 'src/Application/Commands/UseCases/createSquadUseCase';
import { GetSquadUseCase } from 'src/Application/Queries/UseCases/GetSquadUseCase';
import { PrismaModule } from 'src/Infrastructure/prisma/prisma.module';
import { SquadsRepository } from 'src/Infrastructure/Repositories/SquadsRepository';

@Module({
  imports: [PrismaModule, CqrsModule],
  controllers: [SquadsController],
  providers: [SquadsRepository, CreateSquadUseCase, GetSquadUseCase],
})
export class SquadsModule {}
