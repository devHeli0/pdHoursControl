import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './Infrastructure/prisma/prisma.service';
import { PrismaModule } from './Infrastructure/prisma/prisma.module';
import { SquadsModule } from './Infrastructure/Modules/squads/squads.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, SquadsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
