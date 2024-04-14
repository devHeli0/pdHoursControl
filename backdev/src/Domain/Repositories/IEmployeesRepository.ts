import { Employee } from '../Entities';

export default interface IEmployeeRepository {
  create(employeeData: Employee): Promise<Employee>;
}
