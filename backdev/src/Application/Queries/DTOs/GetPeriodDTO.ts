import { IsDate, IsNotEmpty } from 'class-validator';

export class GetPeriodDTO {
  @IsNotEmpty()
  @IsDate()
  startDate: Date;

  @IsNotEmpty()
  @IsDate()
  endDate: Date;
}
