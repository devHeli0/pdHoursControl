import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateReportDTO {
  @IsNotEmpty({ message: 'Description is required' })
  description: string;

  @IsNotEmpty({ message: 'Estimated hours is required' })
  employeeId: number;

  @IsNotEmpty({ message: 'spenHours is required' })
  @IsNumber({}, { message: 'Squad ID must be a number' })
  spentHours: number;
}
