import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './Infrastructure/prisma/prisma.module';
import { SquadsModule } from './Infrastructure/Modules/squads/squads.module';
import { LoggerMiddleware } from './Infrastructure/Middlewares/loggerMiddleare';
import { SquadsController } from './Adapter/Controllers/squadsController';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, SquadsModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(SquadsController);
  }
}
