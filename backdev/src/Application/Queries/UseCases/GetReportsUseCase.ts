import { Injectable, Inject } from '@nestjs/common';
import { IReportsRepository } from 'src/Domain/Repositories';
import { ReportsRepository } from 'src/Infrastructure/Repositories/ReportsRepository';
import { GetAllDataDTO } from '../DTOs/Request/GetAllDataDTO';
import { GetReportsReplyDTO } from '../DTOs/Reply/GetReportsReplyDTO';

@Injectable()
export class GetReportsUseCase {
  constructor(
    @Inject(ReportsRepository)
    private readonly reportsRepository: IReportsRepository,
  ) {}

  async execute(query: GetAllDataDTO): Promise<GetReportsReplyDTO> {
    return this.reportsRepository.getAllReports(query);
  }
}
