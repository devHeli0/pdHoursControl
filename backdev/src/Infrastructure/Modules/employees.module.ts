import { PrismaModule } from 'src/Infrastructure/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { EmployeesController } from 'src/Interface/Controllers/employeesController';
import { CreateEmployeeUseCase } from 'src/Application/Commands/UseCases/CreateEmployeeUseCase';
import { EmployeesRepository } from 'src/Infrastructure/Repositories/EmployeesRepository';
import { CqrsModule } from '@nestjs/cqrs';
import { GetEmployeeUseCase } from 'src/Application/Queries/UseCases/GetEmployeeUseCase';
import { CreateEmployeeCommandHandler } from 'src/Application/Commands/Handlers/CreateEmployeeCommandHandler';
import { SquadsRepository } from '../Repositories/SquadsRepository';

@Module({
  imports: [PrismaModule, CqrsModule],
  controllers: [EmployeesController],
  providers: [
    // Repository
    EmployeesRepository,
    SquadsRepository,
    // Command
    CreateEmployeeUseCase,
    CreateEmployeeCommandHandler,
    //Query
    GetEmployeeUseCase,
  ],
  exports: [
    // Repository
    EmployeesRepository,
    SquadsRepository,
    // Command
    CreateEmployeeUseCase,
    CreateEmployeeCommandHandler,
    //Query
    GetEmployeeUseCase,
  ],
})
export class EmployeesModule {}
