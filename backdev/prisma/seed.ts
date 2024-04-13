import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const squads = [
    { name: 'Alpha Squad' },
    { name: 'Beta Squad' },
    { name: 'Gamma Squad' },
    { name: 'Delta Squad' },
    { name: 'Epsilon Squad' },
  ];

  for (const squad of squads) {
    await prisma.squad.create({
      data: squad,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
