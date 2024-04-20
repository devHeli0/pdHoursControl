import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Employee } from 'src/Domain/Entities';
import { CreateEmployeeDTO } from 'src/Application/Commands/DTOs/CreateEmployeeDTO';
import { GetEmployeesReplyDTO } from 'src/Application/Queries/DTOs/Reply/GetEmployeesReplyDTO';

@Injectable()
export class EmployeesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(employeeData: CreateEmployeeDTO): Promise<Employee> {
    const { name, estimatedHours, squadId } = employeeData;
    const createdEmployee = await this.prisma.employee.create({
      data: {
        name,
        estimatedHours,
        squadId,
      },
    });

    return this.mapToEntity(createdEmployee);
  }

  async findById(id: number): Promise<Employee | null> {
    const employee = await this.prisma.employee.findUnique({
      where: { id },
    });

    return employee ? this.mapToEntity(employee) : null;
  }

  async getEmployees(): Promise<GetEmployeesReplyDTO> {
    const employees = await this.prisma.employee.findMany();
    return { list: employees.map(this.mapToEntity) };
  }

  private mapToEntity(data: any): Employee {
    const { id, name, estimatedHours, squadId } = data;
    return new Employee(name, estimatedHours, squadId, id);
  }
}
