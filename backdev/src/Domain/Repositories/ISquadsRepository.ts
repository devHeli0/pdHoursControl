import { Squad } from '../Entities';

export default interface ISquadsRepository {
  create(name: string): Promise<Squad>;
}
