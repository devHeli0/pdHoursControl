import { Module } from '@nestjs/common';
import { SquadsController } from 'src/Adapter/Controllers/squadsController';
import { CreateSquadUseCase } from 'src/Application/Commands/UseCases/createSquadUseCase';
import { PrismaModule } from 'src/Infrastructure/prisma/prisma.module';
import { SquadsRepository } from 'src/Infrastructure/Repositories/SquadsRepository';

@Module({
  imports: [PrismaModule],
  controllers: [SquadsController],
  providers: [SquadsRepository, CreateSquadUseCase],
})
export class SquadsModule {}
