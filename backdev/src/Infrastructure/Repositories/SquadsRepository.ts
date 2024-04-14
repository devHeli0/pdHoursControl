import { Injectable } from '@nestjs/common';
import { Squad } from 'src/Domain/Entities';
import { PrismaService } from '../prisma/prisma.service';
import { ISquadsRepository } from 'src/Domain/Repositories';

@Injectable()
export class SquadsRepository implements ISquadsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(name: string): Promise<Squad> {
    const createdSquad = await this.prisma.squad.create({
      data: { name },
    });
    return Squad.create(createdSquad);
  }
}
