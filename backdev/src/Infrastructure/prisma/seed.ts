import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const squads = [
    { name: 'AI Squad' },
    { name: 'Cyber Squad' },
    { name: 'Blockchain Squad' },
    { name: 'Data Squad' },
    { name: 'Robotics Squad' },
    { name: 'Cloud Squad' },
    { name: 'IoT Squad' },
    { name: 'Web Development Squad' },
    { name: 'Mobile Development Squad' },
    { name: 'Game Development Squad' },
  ];

  // Create squads
  for (const squad of squads) {
    await prisma.squad.create({
      data: squad,
    });
  }

  // Employee data with random squad assignments and estimated hours
  const employees = [
    {
      name: 'Employee 1',
      estimatedHours: getRandomHours(),
      squadId: getRandomSquadId(),
    },
    {
      name: 'Employee 2',
      estimatedHours: getRandomHours(),
      squadId: getRandomSquadId(),
    },
    {
      name: 'Employee 3',
      estimatedHours: getRandomHours(),
      squadId: getRandomSquadId(),
    },
    {
      name: 'Employee 4',
      estimatedHours: getRandomHours(),
      squadId: getRandomSquadId(),
    },
    {
      name: 'Employee 5',
      estimatedHours: getRandomHours(),
      squadId: getRandomSquadId(),
    },
    {
      name: 'Employee 6',
      estimatedHours: getRandomHours(),
      squadId: getRandomSquadId(),
    },
    {
      name: 'Employee 7',
      estimatedHours: getRandomHours(),
      squadId: getRandomSquadId(),
    },
    {
      name: 'Employee 8',
      estimatedHours: getRandomHours(),
      squadId: getRandomSquadId(),
    },
    {
      name: 'Employee 9',
      estimatedHours: getRandomHours(),
      squadId: getRandomSquadId(),
    },
    {
      name: 'Employee 10',
      estimatedHours: getRandomHours(),
      squadId: getRandomSquadId(),
    },
  ];

  // Create employees
  for (const employee of employees) {
    await prisma.employee.create({
      data: employee,
    });
  }
}

// Function to get random squad ID between 1 and 10
function getRandomSquadId() {
  return Math.floor(Math.random() * 10) + 1;
}

// Function to get random estimated hours between 1 and 12
function getRandomHours() {
  return Math.floor(Math.random() * 12) + 1;
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
