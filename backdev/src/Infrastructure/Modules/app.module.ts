import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '../prisma/prisma.module';
import { SquadsModule } from './squads.module';
import { LoggerMiddleware } from '../Middlewares/loggerMiddleare';
import { SquadsController } from '../../Interface/Controllers/squadsController';
import { EmployeesModule } from './employees.module';
import { EmployeesController } from '../../Interface/Controllers/employeesController';
import { ReportsController } from '../../Interface/Controllers/reportsController';
import { ReportsModule } from './reports.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    SquadsModule,
    EmployeesModule,
    ReportsModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export default class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(SquadsController);
    consumer.apply(LoggerMiddleware).forRoutes(EmployeesController);
    consumer.apply(LoggerMiddleware).forRoutes(ReportsController);
  }
}
