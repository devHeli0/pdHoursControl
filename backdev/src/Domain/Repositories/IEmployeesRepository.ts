import { GetAllDataDTO } from 'src/Application/Queries/DTOs/Request/GetAllDataDTO';
import { Employee } from '../Entities';

export default interface IEmployeesRepository {
  create(employeeData: Employee): Promise<Employee>;
  findById(id: number): Promise<Employee | null>;
  getEmployees(data: GetAllDataDTO): Promise<Employee[]>;
  mapToEntity(data: any): Employee;
}
