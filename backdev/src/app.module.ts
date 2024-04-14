import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './Infrastructure/prisma/prisma.module';
import { SquadsModule } from './Infrastructure/Modules/squads/squads.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, SquadsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
