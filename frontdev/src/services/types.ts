export type GetEmployeeByIdResponse = {
  employee: Employee
}

export type GetEmployeeSpentHoursResponse = {
  employeeId: number
  spentHours: number
}[]

export type GetSquadByIdResponse = {
  success: boolean
  data: {
    squad: Squad
  }
}

export type getAllSquadsResponse = {
  success: boolean
  data: {
    list: Squad[]
  }
}

export type getAllEmployeesResponse = {
  success: boolean
  data: {
    list: { list: Employee[] }
  }
}

export type getAllReportsResponse = {
  success: boolean
  data: {
    list: Report[]
  }
}

export type Squad = {
  id: number
  name: string
}

export type Report = {
  id: number
  description: string
  employeeId: number
  employee: Employee
  spentHours: number
  createdAt: Date
}

export type Employee = {
  id: number
  name: string
  estimatedHours: number
  squadId: number
  reports: Report[]
}
