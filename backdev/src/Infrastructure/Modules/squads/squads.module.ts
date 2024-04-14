import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/Infrastructure/prisma/prisma.module';
import { SquadsRepository } from 'src/Infrastructure/Repositories/SquadsRepository';

@Module({
  imports: [PrismaModule],
  providers: [SquadsRepository],
})
export class SquadsModule {}
