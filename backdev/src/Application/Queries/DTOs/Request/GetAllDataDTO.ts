import { IsEmpty } from 'class-validator';

export class GetAllDataDTO {
  @IsEmpty()
  empty: any;
}
