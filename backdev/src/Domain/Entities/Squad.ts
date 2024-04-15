import { CreateSquadDTO } from 'src/Application/Commands/DTOs/CreateSquadDTO';
import { ISquadsRepository } from '../Repositories';
import { Employee } from './Employee';

class Squad {
  public readonly id: number;
  public readonly name: string;
  public employees?: Employee[];

  constructor(name: string, employees: Employee[] = [], id?: number) {
    this.id = id;
    this.name = name;
    this.employees = employees;
  }

  static create(squadData: CreateSquadDTO): Squad {
    return new Squad(squadData.name);
  }

  static findById(
    repository: ISquadsRepository,
    id: number,
  ): Promise<Squad | null> {
    return repository.findById(id);
  }
}

export { Squad };
