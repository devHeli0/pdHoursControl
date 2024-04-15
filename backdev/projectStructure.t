.
├── dist
│   ├── Adapter
│   │   └── Controllers
│   │       ├── employeesController.d.ts
│   │       ├── employeesController.js
│   │       ├── employeesController.js.map
│   │       ├── squadsController.d.ts
│   │       ├── squadsController.js
│   │       └── squadsController.js.map
│   ├── Application
│   │   ├── Commands
│   │   │   ├── BusinessObjects
│   │   │   │   ├── CalculateHoursBO.d.ts
│   │   │   │   ├── CalculateHoursBO.js
│   │   │   │   └── CalculateHoursBO.js.map
│   │   │   ├── commandHandler
│   │   │   │   ├── CreateEmployeeCommandHandler.d.ts
│   │   │   │   ├── CreateEmployeeCommandHandler.js
│   │   │   │   ├── CreateEmployeeCommandHandler.js.map
│   │   │   │   ├── CreateSquadCommandHandler.d.ts
│   │   │   │   ├── CreateSquadCommandHandler.js
│   │   │   │   └── CreateSquadCommandHandler.js.map
│   │   │   ├── commands
│   │   │   │   ├── CreateEmployeeCommandHandler.d.ts
│   │   │   │   ├── CreateEmployeeCommandHandler.js
│   │   │   │   └── CreateEmployeeCommandHandler.js.map
│   │   │   ├── DTOs
│   │   │   │   ├── CreateEmployeeDTO.d.ts
│   │   │   │   ├── CreateEmployeeDTO.js
│   │   │   │   ├── CreateEmployeeDTO.js.map
│   │   │   │   ├── CreateSquadDTO.d.ts
│   │   │   │   ├── CreateSquadDTO.js
│   │   │   │   └── CreateSquadDTO.js.map
│   │   │   └── UseCases
│   │   │       ├── createEmployeeUseCase.d.ts
│   │   │       ├── createEmployeeUseCase.js
│   │   │       ├── createEmployeeUseCase.js.map
│   │   │       ├── createSquadUseCase.d.ts
│   │   │       ├── createSquadUseCase.js
│   │   │       └── createSquadUseCase.js.map
│   │   └── Queries
│   │       ├── BusinessObjects
│   │       │   ├── index.d.ts
│   │       │   ├── index.js
│   │       │   └── index.js.map
│   │       ├── DTOs
│   │       │   ├── index.d.ts
│   │       │   ├── index.js
│   │       │   └── index.js.map
│   │       └── UseCases
│   │           ├── index.d.ts
│   │           ├── index.js
│   │           └── index.js.map
│   ├── app.module.d.ts
│   ├── app.module.js
│   ├── app.module.js.map
│   ├── Domain
│   │   ├── Entities
│   │   │   ├── Employee.d.ts
│   │   │   ├── Employee.js
│   │   │   ├── Employee.js.map
│   │   │   ├── index.d.ts
│   │   │   ├── index.js
│   │   │   ├── index.js.map
│   │   │   ├── Report.d.ts
│   │   │   ├── Report.js
│   │   │   ├── Report.js.map
│   │   │   ├── Squad.d.ts
│   │   │   ├── Squad.js
│   │   │   └── Squad.js.map
│   │   └── Repositories
│   │       ├── IEmployeesRepository.d.ts
│   │       ├── IEmployeesRepository.js
│   │       ├── IEmployeesRepository.js.map
│   │       ├── index.d.ts
│   │       ├── index.js
│   │       ├── index.js.map
│   │       ├── IReportsRepository.d.ts
│   │       ├── IReportsRepository.js
│   │       ├── IReportsRepository.js.map
│   │       ├── ISquadsRepository.d.ts
│   │       ├── ISquadsRepository.js
│   │       └── ISquadsRepository.js.map
│   ├── Infrastructure
│   │   ├── Middlewares
│   │   │   ├── loggerMiddleare.d.ts
│   │   │   ├── loggerMiddleare.js
│   │   │   ├── loggerMiddleare.js.map
│   │   │   ├── validationPipe.d.ts
│   │   │   ├── validationPipe.js
│   │   │   └── validationPipe.js.map
│   │   ├── Modules
│   │   │   ├── employees
│   │   │   │   ├── employees.module.d.ts
│   │   │   │   ├── employees.module.js
│   │   │   │   └── employees.module.js.map
│   │   │   └── squads
│   │   │       ├── squads.module.d.ts
│   │   │       ├── squads.module.js
│   │   │       └── squads.module.js.map
│   │   ├── prisma
│   │   │   ├── prisma.module.d.ts
│   │   │   ├── prisma.module.js
│   │   │   ├── prisma.module.js.map
│   │   │   ├── prisma.service.d.ts
│   │   │   ├── prisma.service.js
│   │   │   ├── prisma.service.js.map
│   │   │   ├── seed.d.ts
│   │   │   ├── seed.js
│   │   │   └── seed.js.map
│   │   └── Repositories
│   │       ├── EmployeesRepository.d.ts
│   │       ├── EmployeesRepository.js
│   │       ├── EmployeesRepository.js.map
│   │       ├── SquadsRepository.d.ts
│   │       ├── SquadsRepository.js
│   │       └── SquadsRepository.js.map
│   ├── main.d.ts
│   ├── main.js
│   ├── main.js.map
│   └── tsconfig.build.tsbuildinfo
├── dockerfile
├── nest-cli.json
├── package.json
├── pnpm-lock.yaml
├── projectStructure.t
├── README.md
├── src
│   ├── Adapter
│   │   └── Controllers
│   │       ├── employeesController.ts
│   │       └── squadsController.ts
│   ├── Application
│   │   ├── Commands
│   │   │   ├── BusinessObjects
│   │   │   │   └── CalculateHoursBO.ts
│   │   │   ├── commandHandler
│   │   │   │   ├── CreateEmployeeCommandHandler.ts
│   │   │   │   └── CreateSquadCommandHandler.ts
│   │   │   ├── DTOs
│   │   │   │   ├── CreateEmployeeDTO.ts
│   │   │   │   └── CreateSquadDTO.ts
│   │   │   └── UseCases
│   │   │       ├── createEmployeeUseCase.ts
│   │   │       └── createSquadUseCase.ts
│   │   └── Queries
│   │       ├── BusinessObjects
│   │       │   └── index.ts
│   │       ├── DTOs
│   │       │   └── index.ts
│   │       └── UseCases
│   │           └── index.ts
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
│   │   │   └── squads
│   │   │       └── squads.module.ts
│   │   ├── prisma
│   │   │   ├── migrations
│   │   │   │   ├── 20240413131318_init
│   │   │   │   │   └── migration.sql
│   │   │   │   └── migration_lock.toml
│   │   │   ├── prisma.module.ts
│   │   │   ├── prisma.service.spec.ts
│   │   │   ├── prisma.service.ts
│   │   │   ├── schema.prisma
│   │   │   └── seed.ts
│   │   └── Repositories
│   │       ├── EmployeesRepository.ts
│   │       └── SquadsRepository.ts
│   └── main.ts
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── tsconfig.build.json
└── tsconfig.json

51 directories, 142 files
