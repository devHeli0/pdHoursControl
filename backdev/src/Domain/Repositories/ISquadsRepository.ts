import { CreateSquadDTO } from 'src/Application/Commands/DTOs/CreateSquadDTO';
import { Squad } from '../Entities';
import { GetSquadsReplyDTO } from 'src/Application/Queries/DTOs/Reply/GetSquadsReplyDTO';
import { GetAllDataDTO } from 'src/Application/Queries/DTOs/Request/GetAllDataDTO';
import { GetSquadByIdDTO } from 'src/Application/Queries/DTOs/Request/GetSquadByIdDTO';
import { GetSquadByIdReplyDTO } from 'src/Application/Queries/DTOs/Reply/GetSquadByIdReplyDTO';

export default interface ISquadsRepository {
  create(data: CreateSquadDTO): Promise<Squad>;
  findById(id: number): Promise<Squad | null>;
  getAllSquads(data: GetAllDataDTO): Promise<GetSquadsReplyDTO>;
  getSquadById(data: GetSquadByIdDTO): Promise<GetSquadByIdReplyDTO>;
}
