.
├── dist
│   ├── Adapter
│   │   └── Controllers
│   │       ├── squadController.d.ts
│   │       ├── squadController.js
│   │       └── squadController.js.map
│   ├── Application
│   │   ├── Commands
│   │   │   ├── BusinessObjects
│   │   │   │   ├── CalculateHoursBO.d.ts
│   │   │   │   ├── CalculateHoursBO.js
│   │   │   │   └── CalculateHoursBO.js.map
│   │   │   ├── DTOs
│   │   │   │   ├── ICreateEmployeeDTO.d.ts
│   │   │   │   ├── ICreateEmployeeDTO.js
│   │   │   │   ├── ICreateEmployeeDTO.js.map
│   │   │   │   ├── ICreateSquadDTO.d.ts
│   │   │   │   ├── ICreateSquadDTO.js
│   │   │   │   └── ICreateSquadDTO.js.map
│   │   │   └── UseCases
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
│   │   ├── Modules
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
│   │       └── squadController.ts
│   ├── Application
│   │   ├── Commands
│   │   │   ├── BusinessObjects
│   │   │   │   └── CalculateHoursBO.ts
│   │   │   ├── DTOs
│   │   │   │   ├── ICreateEmployeeDTO.ts
│   │   │   │   └── ICreateSquadDTO.ts
│   │   │   └── UseCases
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
│   │   ├── Modules
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
│   │       └── SquadsRepository.ts
│   └── main.ts
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── tsconfig.build.json
└── tsconfig.json

44 directories, 107 files
