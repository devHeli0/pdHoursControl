import { ISquadsRepository } from '../Repositories';
import { Employee } from './Employee';

class Squad {
  public readonly id: number;
  public readonly name: string;
  public employees?: Employee[];

  constructor(id: number, name: string, employees: Employee[] = []) {
    this.id = id;
    this.name = name;
    this.employees = employees;
  }

  static create(data: { id: number; name: string }): Squad {
    return new Squad(data.id, data.name);
  }

  static findById(
    repository: ISquadsRepository,
    id: number,
  ): Promise<Squad | null> {
    return repository.findById(id);
  }
}

export { Squad };
