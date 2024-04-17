import { CreateSquadDTO } from 'src/Application/Commands/DTOs/CreateSquadDTO';
import { Squad } from '../Entities';

export default interface ISquadsRepository {
  create(data: CreateSquadDTO): Promise<Squad>;
  findById(id: number): Promise<Squad | null>;
}
