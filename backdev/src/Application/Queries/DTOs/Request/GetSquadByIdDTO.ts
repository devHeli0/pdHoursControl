import { IsNotEmpty, IsNumber } from 'class-validator';

export class GetSquadByIdDTO {
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
