import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './Infrastructure/prisma/prisma.module';
import { SquadsModule } from './Infrastructure/Modules/squads/squads.module';
import { LoggerMiddleware } from './Infrastructure/Middlewares/loggerMiddleare';
import { SquadsController } from './Adapter/Controllers/squadsController';
import { EmployeesModule } from './Infrastructure/Modules/employees/employees.module';
import { EmployeesController } from './Adapter/Controllers/employeesController';
import { ReportsController } from './Adapter/Controllers/reportsController';
import { ReportsModule } from './Infrastructure/Modules/reports/reports.module';

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
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(SquadsController);
    consumer.apply(LoggerMiddleware).forRoutes(EmployeesController);
    consumer.apply(LoggerMiddleware).forRoutes(ReportsController);
  }
}
