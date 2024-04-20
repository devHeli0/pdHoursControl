import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class GetEmployeeDTO {
  @IsNotEmpty({ message: 'Employee ID is required' })
  @IsInt({ message: 'Employee ID must be an integer' })
  readonly id: number;

  @IsOptional()
  @IsString({ message: 'Name must be a string' })
  readonly name?: string;

  @IsOptional()
  @IsInt({ message: 'Estimated hours must be an integer' })
  readonly estimatedHours?: number;

  @IsOptional()
  @IsInt({ message: 'Squad ID must be an integer' })
  readonly squadId?: number;
}
