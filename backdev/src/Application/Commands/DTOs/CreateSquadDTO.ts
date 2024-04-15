import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSquadDTO {
  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'Name must be a valid string' })
  name: string;
}
