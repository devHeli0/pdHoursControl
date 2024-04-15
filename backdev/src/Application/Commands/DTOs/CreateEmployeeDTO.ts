import { IsNotEmpty, IsNumber, Min, IsOptional, Max } from 'class-validator';
import { GetSquadDTO } from 'src/Application/Queries/DTOs/GetSquadDTO';

const hourMsg: string = 'Estimated hours must be between 1h and 12h';

export class CreateEmployeeDTO {
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsNotEmpty({ message: 'Estimated hours is required' })
  @IsNumber({}, { message: 'Estimated hours must be a number' })
  @Min(0, { message: hourMsg })
  @Max(12, { message: hourMsg })
  estimatedHours: number;

  @IsNotEmpty({ message: 'Squad ID is required' })
  @IsNumber({}, { message: 'Squad ID must be a number' })
  squadId: GetSquadDTO['id'];

  @IsOptional()
  id?: number;

  reports?: any[]; // Define the type of reports explicitly
}
