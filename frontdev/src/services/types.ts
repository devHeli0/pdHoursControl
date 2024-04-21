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
