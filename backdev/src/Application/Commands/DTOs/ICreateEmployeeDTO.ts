/* eslint-disable @typescript-eslint/no-unused-vars */

// employee.dto.ts
interface ICreateEmployeeDTO {
  readonly name: string;
  readonly estimatedHours: number;
  readonly squadId: number;
}

// report.dto.ts
interface CreateReportDTO {
  readonly description: string;
  readonly employeeId: number;
  readonly spentHours: number;
}

// time-spent.dto.ts
interface TimeSpentDTO {
  readonly squadId: number;
  readonly period: Date; // You can refine the type for your period
}

// total-time-spent.dto.ts
interface TotalTimeSpentDTO {
  readonly squadId: number;
  readonly period: Date; // You can refine the type for your period
}
