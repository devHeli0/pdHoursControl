import { Employee } from '../Entities';

export default interface IEmployeesRepository {
  create(employeeData: Employee): Promise<Employee>;
}
