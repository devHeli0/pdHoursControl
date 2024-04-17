.
├── dockerfile
├── nest-cli.json
├── package.json
├── projectStructure.t
├── README.md
├── src
│   ├── Adapter
│   │   └── Controllers
│   │       ├── Commands
│   │       ├── employeesController.ts
│   │       ├── Queries
│   │       ├── reportsController.ts
│   │       └── squadsController.ts
│   ├── Application
│   │   ├── Commands
│   │   │   ├── BusinessObjects
│   │   │   │   └── CalculateHoursBO.ts
│   │   │   ├── commandHandler
│   │   │   │   ├── CreateEmployeeCommandHandler.ts
│   │   │   │   ├── CreateReportCommandHandler.ts
│   │   │   │   └── CreateSquadCommandHandler.ts
│   │   │   ├── DTOs
│   │   │   │   ├── CreateEmployeeDTO.ts
│   │   │   │   ├── CreateReportDTO.ts
│   │   │   │   └── CreateSquadDTO.ts
│   │   │   └── UseCases
│   │   │       ├── createEmployeeUseCase.ts
│   │   │       ├── createReportUseCase.ts
│   │   │       └── createSquadUseCase.ts
│   │   └── Queries
│   │       ├── DTOs
│   │       │   ├── GetEmployeeDTO.ts
│   │       │   ├── GetPeriodDTO.ts
│   │       │   ├── GetReportDTO.ts
│   │       │   └── GetSquadDTO.ts
│   │       ├── queryHandler
│   │       │   ├── GetEmployeeQueryHandler.ts
│   │       │   ├── GetReportQueryHandler.ts
│   │       │   └── GetSquadQueryHandler.ts
│   │       └── UseCases
│   │           ├── GetEmployeeUseCase.ts
│   │           ├── getSpentHoursBySquadAndPeriodUseCase.ts
│   │           ├── GetReportUseCase.ts
│   │           ├── GetSpentHoursBySquadUseCase.ts
│   │           └── GetSquadUseCase.ts
│   ├── app.module.ts
│   ├── Domain
│   │   ├── Entities
│   │   │   ├── Employee.ts
│   │   │   ├── index.ts
│   │   │   ├── Report.ts
│   │   │   └── Squad.ts
│   │   └── Repositories
│   │       ├── IEmployeesRepository.ts
│   │       ├── index.ts
│   │       ├── IReportsRepository.ts
│   │       └── ISquadsRepository.ts
│   ├── Infrastructure
│   │   ├── Middlewares
│   │   │   ├── loggerMiddleare.ts
│   │   │   └── validationPipe.ts
│   │   ├── Modules
│   │   │   ├── employees
│   │   │   │   └── employees.module.ts
│   │   │   ├── reports
│   │   │   │   └── reports.module.ts
│   │   │   └── squads
│   │   │       └── squads.module.ts
│   │   ├── prisma
│   │   │   ├── migrations
│   │   │   │   ├── 20240415121242_init
│   │   │   │   │   └── migration.sql
│   │   │   │   └── migration_lock.toml
│   │   │   ├── prisma.module.ts
│   │   │   ├── prisma.service.spec.ts
│   │   │   ├── prisma.service.ts
│   │   │   ├── schema.prisma
│   │   │   └── seed.ts
│   │   └── Repositories
│   │       ├── EmployeesRepository.ts
│   │       ├── ReportsRepository.ts
│   │       └── SquadsRepository.ts
│   └── main.ts
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── tsconfig.build.json
└── tsconfig.json

30 directories, 59 files
