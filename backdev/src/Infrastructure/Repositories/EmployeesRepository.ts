import { Injectable } from '@nestjs/common';
import { Employee } from 'src/Domain/Entities';
import { PrismaService } from '../prisma/prisma.service';
import { IEmployeesRepository } from 'src/Domain/Repositories';

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

    const newEmployeee = new Employee(
      newEmployeeData.data.name,
      newEmployeeData.data.estimatedHours,
      newEmployeeData.data.squadId,
    );

    this.prisma.employee
      .create(newEmployeeData)
      .then((createdEmployee) => {
        console.log('Created employee:', createdEmployee);
      })
      .catch((error) => {
        console.error('Error creating employee:', error);
      });
    return newEmployeee;
  }
}
