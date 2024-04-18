import { IReportsRepository } from 'src/Domain/Repositories';
import { CreateReportDTO } from '../DTOs/CreateReportDTO';
import { Inject } from '@nestjs/common';
import { ReportsRepository } from 'src/Infrastructure/Repositories/ReportsRepository';

export class CreateReportUseCase {
  constructor(
    @Inject(ReportsRepository)
    private readonly reportsRepository: IReportsRepository,
  ) {}

  async execute(data: CreateReportDTO): Promise<void> {
    await this.reportsRepository.create(data);
  }
}
