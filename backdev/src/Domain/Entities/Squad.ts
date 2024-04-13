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
}

export { Squad };
