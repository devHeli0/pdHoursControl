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
  await prisma.employee.createMany({
    data: employees,
  });

  // Report data with random descriptions, spent hours, and employee assignments
  const reports = [
    {
      description: 'Report 1',
      employeeId: getRandomEmployeeId(),
      spentHours: getRandomHours(),
      createdAt: new Date(),
    },
    {
      description: 'Report 2',
      employeeId: getRandomEmployeeId(),
      spentHours: getRandomHours(),
      createdAt: new Date(),
    },
    {
      description: 'Report 3',
      employeeId: getRandomEmployeeId(),
      spentHours: getRandomHours(),
      createdAt: new Date(),
    },
    {
      description: 'Report 4',
      employeeId: getRandomEmployeeId(),
      spentHours: getRandomHours(),
      createdAt: new Date(),
    },
    {
      description: 'Report 5',
      employeeId: getRandomEmployeeId(),
      spentHours: getRandomHours(),
      createdAt: new Date(),
    },
    {
      description: 'Report 6',
      employeeId: getRandomEmployeeId(),
      spentHours: getRandomHours(),
      createdAt: new Date(),
    },
    {
      description: 'Report 7',
      employeeId: getRandomEmployeeId(),
      spentHours: getRandomHours(),
      createdAt: new Date(),
    },
    {
      description: 'Report 8',
      employeeId: getRandomEmployeeId(),
      spentHours: getRandomHours(),
      createdAt: new Date(),
    },
    {
      description: 'Report 9',
      employeeId: getRandomEmployeeId(),
      spentHours: getRandomHours(),
      createdAt: new Date(),
    },
    {
      description: 'Report 10',
      employeeId: getRandomEmployeeId(),
      spentHours: getRandomHours(),
      createdAt: new Date(),
    },
    // Add more report data as needed
  ];

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

// Function to get random employee ID between 1 and 10
function getRandomEmployeeId() {
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
