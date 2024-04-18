import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const squads = [
    { name: 'Data Squad' },
    { name: 'Cloud Squad' },
    { name: 'Web Development Squad' },
    { name: 'Mobile Development Squad' },
    { name: 'Game Development Squad' },
  ];

  // Create squads
  await prisma.squad.createMany({
    data: squads,
  });

  // Increase number of employees to 15
  const employees = [];
  for (let i = 1; i <= 15; i++) {
    employees.push({
      name: `Employee ${i}`,
      estimatedHours: getRandomHours(),
      squadId: getRandomSquadId(),
    });
  }

  // Create employees
  await prisma.employee.createMany({
    data: employees,
  });

  // Increase number of reports to 20
  const reports = [];
  for (let i = 1; i <= 20; i++) {
    reports.push({
      description: `Report ${i}`,
      employeeId: getRandomEmployeeId(),
      spentHours: getRandomHours(),
      createdAt: getRandomDate(),
    });
  }

  // Create reports
  await prisma.report.createMany({
    data: reports,
  });

  console.log('Data seeded successfully');
}

// Function to get random squad ID between 1 and 5
function getRandomSquadId() {
  return Math.floor(Math.random() * 5) + 1;
}

// Function to get random employee ID between 1 and 15
function getRandomEmployeeId() {
  return Math.floor(Math.random() * 15) + 1;
}

// Function to get random estimated hours between 1 and 12
function getRandomHours() {
  return Math.floor(Math.random() * 12) + 1;
}

// Function to get random date between March 1st and April 30th
function getRandomDate() {
  const start = new Date('2024-03-01');
  const end = new Date('2024-04-30');
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
