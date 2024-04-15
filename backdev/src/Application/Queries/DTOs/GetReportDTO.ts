import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class GetReportDTO {
  @IsInt()
  readonly id?: number;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsInt()
  readonly employeeId: number;

  @IsInt()
  readonly spentHours: number;

  readonly createdAt?: Date;
}
