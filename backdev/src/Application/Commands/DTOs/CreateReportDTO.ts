import { IsNotEmpty, IsString, IsInt, Min, Max } from 'class-validator';
import { GetEmployeeDTO } from 'src/Application/Queries/DTOs/Request/GetEmployeeDTO';

export class CreateReportDTO {
  @IsNotEmpty({ message: 'Description is required' })
  @IsString({ message: 'Description must be a string' })
  description: string;

  @IsNotEmpty({ message: 'Employee ID is required' })
  @IsInt({ message: 'Employee ID must be an integer' })
  employeeId: GetEmployeeDTO['id'];

  @IsNotEmpty({ message: 'Spent hours is required' })
  @IsInt({ message: 'Spent hours must be an integer' })
  @Min(0, { message: 'Spent hours cannot be negative' })
  @Max(24, { message: 'Spent hours cannot exceed 24' })
  spentHours: number;
}
