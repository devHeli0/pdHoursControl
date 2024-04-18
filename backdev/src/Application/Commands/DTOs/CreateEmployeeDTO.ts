import {
  IsNotEmpty,
  IsNumber,
  Min,
  Max,
  MinLength,
  MaxLength,
} from 'class-validator';
import { GetSquadDTO } from 'src/Application/Queries/DTOs/GetSquadDTO';

const HOUR_MSG = 'Estimated hours must be between 1 and 12 hours';

export class CreateEmployeeDTO {
  @IsNotEmpty({ message: 'Name is required' })
  @MinLength(1, { message: 'Name must be at least 1 character long' })
  @MaxLength(255, { message: 'Name must not exceed 255 characters' })
  readonly name: string;

  @IsNotEmpty({ message: 'Estimated hours is required' })
  @IsNumber({}, { message: 'Estimated hours must be a number' })
  @Min(1, { message: HOUR_MSG })
  @Max(12, { message: HOUR_MSG })
  readonly estimatedHours: number;

  @IsNotEmpty({ message: 'Squad ID is required' })
  @IsNumber({}, { message: 'Squad ID must be a number' })
  readonly squadId: GetSquadDTO['id'];
}
