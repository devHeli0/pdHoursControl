import { Squad } from '../Entities';

export default interface ISquadRepository {
  create(name: string): Promise<Squad>;
}
