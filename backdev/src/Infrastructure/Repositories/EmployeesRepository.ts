import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IEmployeesRepository } from 'src/Domain/Repositories';
import { Employee } from 'src/Domain/Entities';

@Injectable()
export class EmployeesRepository implements IEmployeesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(employeeData: Employee): Promise<Employee> {
    const newEmployeeData = {
      data: {
        name: employeeData.getName(),
        estimatedHours: employeeData.getEstimatedHours(),
        squadId: employeeData.getSquadId(),
      },
    };

    const createdEmployee = await this.prisma.employee.create(newEmployeeData);

    return new Employee(
      createdEmployee.name,
      createdEmployee.estimatedHours,
      createdEmployee.squadId,
    );
  }

  async findById(id: number): Promise<Employee | null> {
    const employee = await this.prisma.employee.findUnique({
      where: { id },
    });

    if (!employee) {
      return null;
    }

    return new Employee(
      employee.name,
      employee.estimatedHours,
      employee.squadId,
    );
  }
}
