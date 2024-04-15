// SquadsRepository.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { ISquadsRepository } from 'src/Domain/Repositories';
import { Squad } from 'src/Domain/Entities';

@Injectable()
export class SquadsRepository implements ISquadsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(name: string): Promise<Squad> {
    const createdSquad = await this.prisma.squad.create({
      data: { name },
    });
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
}
