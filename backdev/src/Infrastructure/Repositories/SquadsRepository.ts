import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ISquadsRepository } from 'src/Domain/Repositories';
import { Squad } from 'src/Domain/Entities';
import { CreateSquadDTO } from 'src/Application/Commands/DTOs/CreateSquadDTO';
import { GetSpentHoursDTO } from 'src/Application/Queries/DTOs/GetSpentHoursDTO';

@Injectable()
export class SquadsRepository implements ISquadsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateSquadDTO): Promise<Squad> {
    const { name } = data;

    const createdSquad = await this.prisma.$transaction(async (prisma) => {
      return prisma.squad.create({
        data: { name },
      });
    });

    // Convert the Prisma response to a Squad domain entity
    return Squad.create(createdSquad);
  }

  async findById(id: number): Promise<Squad | null> {
    const squad = await this.prisma.squad.findUnique({
      where: { id },
    });
    if (!squad) {
      throw new NotFoundException(`Squad with ID ${id} not found`);
    }
    return Squad.create(squad);
  }

  async getSpentHoursBySquadAndPeriod(
    getSpentHoursDTO: GetSpentHoursDTO,
  ): Promise<any> {
    const spentHours = await this.prisma.squad.findUnique({
      where: { id: getSpentHoursDTO.squadId },
    });
    return spentHours;
  }
}
