import { Injectable } from '@nestjs/common';
import { Squad } from 'src/Domain/Entities';
import { ISquadRepository } from 'src/Domain/Repositories';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SquadRepository implements ISquadRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(name: string): Promise<Squad> {
    const createdSquad = await this.prisma.squad.create({
      data: { name },
    });
    return Squad.create(createdSquad);
  }
}
