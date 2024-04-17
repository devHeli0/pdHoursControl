import { PrismaModule } from 'src/Infrastructure/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { EmployeesController } from 'src/Interface/Controllers/employeesController';
import { CreateEmployeeUseCase } from 'src/Application/Commands/UseCases/createEmployeeUseCase';
import { EmployeesRepository } from 'src/Infrastructure/Repositories/EmployeesRepository';
import { CqrsModule } from '@nestjs/cqrs';
import { GetEmployeeUseCase } from 'src/Application/Queries/UseCases/GetEmployeeUseCase';

@Module({
  imports: [PrismaModule, CqrsModule],
  controllers: [EmployeesController],
  providers: [EmployeesRepository, CreateEmployeeUseCase, GetEmployeeUseCase],
})
export class EmployeesModule {}
