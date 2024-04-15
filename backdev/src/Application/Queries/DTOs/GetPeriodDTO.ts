import { IsDateString, IsNotEmpty } from 'class-validator';

export class GetPeriodDTO {
  @IsNotEmpty()
  @IsDateString()
  startDate: string;

  @IsNotEmpty()
  @IsDateString()
  endDate: string;
}
