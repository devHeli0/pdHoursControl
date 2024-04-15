import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Employee } from 'src/Domain/Entities';

export class GetSquadDTO {
  @IsInt()
  readonly id: number;

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsOptional()
  readonly employees?: Employee[];
}
