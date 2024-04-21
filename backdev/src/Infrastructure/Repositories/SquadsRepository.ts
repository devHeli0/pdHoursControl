import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ISquadsRepository } from 'src/Domain/Repositories';
import { Squad } from 'src/Domain/Entities';
import { CreateSquadDTO } from 'src/Application/Commands/DTOs/CreateSquadDTO';
import { GetSquadsReplyDTO } from 'src/Application/Queries/DTOs/Reply/GetSquadsReplyDTO';
import { GetSquadByIdDTO } from 'src/Application/Queries/DTOs/Request/GetSquadByIdDTO';
import { GetSquadByIdReplyDTO } from 'src/Application/Queries/DTOs/Reply/GetSquadByIdReplyDTO';

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

  async getAllSquads(): Promise<GetSquadsReplyDTO> {
    const squads = await this.prisma.squad.findMany();
    const squadList: Squad[] = squads.map((squad) => ({
      id: squad.id,
      name: squad.name,
    }));
    return { list: squadList };
  }

  async getSquadById(data: GetSquadByIdDTO): Promise<GetSquadByIdReplyDTO> {
    const squad = await this.prisma.squad.findUnique({
      where: {
        id: data.id,
      },
    });
    return { squad };
  }
}
